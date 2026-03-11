"use client";

import { useState, useRef } from "react";
import Link from "next/link";

function flattenObject(ob: any): any {
  const toReturn: any = {};
  for (const i in ob) {
    if (!ob.hasOwnProperty(i)) continue;
    if (typeof ob[i] === "object" && ob[i] !== null && !Array.isArray(ob[i])) {
      const flatObject = flattenObject(ob[i]);
      for (const x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;
        toReturn[i + "." + x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }
  return toReturn;
}

function convertToCSV(jsonData: any): string {
  let data = typeof jsonData !== "object" ? JSON.parse(jsonData) : jsonData;

  if (!Array.isArray(data)) {
    data = [data];
  }

  if (data.length === 0) {
    throw new Error("O JSON selecionado está vazio.");
  }

  const flattenedData = data.map((item: any) =>
    typeof item === "object" && item !== null ? flattenObject(item) : { value: item }
  );

  const headersSet = new Set<string>();
  flattenedData.forEach((item: any) => {
    Object.keys(item).forEach((key) => headersSet.add(key));
  });
  const headers = Array.from(headersSet);

  const csvRows: string[] = [];
  csvRows.push(headers.map((header) => `"${String(header).replace(/"/g, '""')}"`).join(","));

  flattenedData.forEach((row: any) => {
    const values = headers.map((header) => {
      const val = row[header] === null || row[header] === undefined ? "" : String(row[header]);
      return `"${val.replace(/"/g, '""')}"`;
    });
    csvRows.push(values.join(","));
  });

  return csvRows.join("\n");
}

function downloadCSV(csv: string, filename: string) {
  const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function JsonToCsv() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [jsonText, setJsonText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showError = (msg: string) => {
    setErrorMsg(msg);
    setTimeout(() => {
      setErrorMsg("");
    }, 6000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      setJsonText(""); // Clear text if file is chosen
    }
  };

  const handleConvert = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = function (e) {
        try {
          const result = e.target?.result;
          if (typeof result === "string") {
            const parsedData = JSON.parse(result);
            const csv = convertToCSV(parsedData);
            const outName = selectedFile.name.replace(/\.[^/.]+$/, "") + ".csv";
            downloadCSV(csv, outName);
          }
        } catch (err) {
          showError("Erro: O arquivo selecionado não contém um JSON válido.");
          console.error(err);
        }
      };
      reader.readAsText(selectedFile);
    } else if (jsonText.trim()) {
      try {
        const parsedData = JSON.parse(jsonText.trim());
        const csv = convertToCSV(parsedData);
        downloadCSV(csv, "dados_convertidos.csv");
      } catch (err) {
        showError("Erro: O texto colado não é um formato JSON válido.");
        console.error(err);
      }
    } else {
      showError("Por favor, selecione um arquivo JSON ou cole o código no campo indicado.");
    }
  };

  return (
    <main className="flex min-h-screen bg-[var(--color-background-main)] items-center justify-center p-6 animate-fade-in">
      <div className="relative w-full max-w-2xl bg-card-bg border border-border-subtle rounded-3xl p-8 md:p-12 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] animate-slide-down">
        
        <Link 
          href="/" 
          className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-2 text-text-muted hover:text-primary font-semibold text-sm transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
          </svg>
          Voltar
        </Link>
        
        <div className="text-center mt-8 mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight mb-2">
            JSON para CSV
          </h1>
          <p className="text-text-muted text-lg">
            Converta seus dados rapidamente direto pelo navegador.
          </p>
        </div>

        <div className="mb-6">
          <div 
            className="relative flex items-center justify-center border-2 border-dashed border-[#cbd5e1] rounded-2xl p-10 bg-[#f8fafc] hover:bg-[#eff6ff] hover:border-primary transition-colors cursor-pointer text-center"
            onClick={() => fileInputRef.current?.click()}
          >
            <input 
              type="file" 
              ref={fileInputRef}
              accept=".json,application/json" 
              className="hidden"
              onChange={handleFileChange}
            />
            <span className={`font-semibold text-lg ${selectedFile ? 'text-primary' : 'text-text-muted'}`}>
              {selectedFile ? `Selecionado: ${selectedFile.name}` : "Arraste e solte um arquivo .json ou clique aqui"}
            </span>
          </div>
        </div>

        <div className="flex items-center text-center my-6 text-text-muted before:flex-1 before:border-b before:border-border-subtle after:flex-1 after:border-b after:border-border-subtle">
          <span className="px-4 font-bold tracking-wider text-[#a0aec0] text-sm">OU</span>
        </div>

        <div className="mb-8">
          <label className="block mb-2 font-semibold text-[#4a5568]">Cole seu código JSON abaixo</label>
          <textarea 
            spellCheck={false} 
            value={jsonText}
            onChange={(e) => {
              setJsonText(e.target.value);
              if (selectedFile) setSelectedFile(null); // Clear file if text is edited
            }}
            placeholder={'[\n  { "nome": "João", "idade": 30 },\n  { "nome": "Maria", "idade": 25 }\n]'}
            className="w-full h-48 bg-[#f8fafc] border border-border-subtle rounded-xl p-4 text-text-main font-mono text-sm resize-y focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-inner"
          />
        </div>

        {errorMsg && (
          <div className="text-[#c53030] bg-[#fff5f5] border border-[#feb2b2] p-4 rounded-xl text-center font-medium mb-6 animate-fade-in-up">
            {errorMsg}
          </div>
        )}

        <button 
          onClick={handleConvert}
          className="w-full bg-primary text-white border-none py-4 rounded-xl text-lg font-bold cursor-pointer transition-all hover:-translate-y-0.5 hover:bg-primary-hover shadow-[0_4px_6px_-1px_rgba(24,100,248,0.2),0_2px_4px_-1px_rgba(24,100,248,0.1)] hover:shadow-[0_10px_15px_-3px_rgba(24,100,248,0.3)] active:translate-y-0"
        >
          Converter e Baixar CSV
        </button>
      </div>
    </main>
  );
}
