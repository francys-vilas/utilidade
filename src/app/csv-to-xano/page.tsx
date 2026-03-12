"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Papa from "papaparse";

function processCsvData(csvText: string): string {
  // Parse original CSV focusing on semicolon delimiter
  const parsed = Papa.parse(csvText, {
    delimiter: ";", // Default for Excel in Brazil
    skipEmptyLines: true,
  });

  if (parsed.errors.length > 0 && parsed.data.length === 0) {
    throw new Error("Falha ao analisar o CSV. Verifique se o separador é ponto e vírgula (;)");
  }

  // Se retornou um array de arrays
  const rows = parsed.data as string[][];
  
  // Mapear cada célula verificando se é um possível número brasileiro
  const transformedRows = rows.map((row) => {
    return row.map((cell) => {
      if (typeof cell !== "string") return cell;
      
      const trimmed = cell.trim();
      
      // Regexp para identificar formato brasileiro: "1.234,56" ou "-150,00"
      // Basicamente começa com número (ou -), tem possivelmente pontos como milesimo, e tem vírgula antes de 2 dígitos (ou mais).
      // Uma validação mais ampla: só tem digitos, pontos e UMA vírgula
      if (/^-?\d{1,3}(\.\d{3})*(,\d+)?$/.test(trimmed)) {
        // Remover pontos de milhar, trocar virgula por ponto
        return trimmed.replace(/\./g, "").replace(",", ".");
      }
      
      // E tambem para numeros apenas com virgula: 123,45
      if (/^-?\d+(,\d+)?$/.test(trimmed)) {
         return trimmed.replace(",", ".");
      }

      return cell;
    });
  });

  // Re-encode to CSV using comma as delimiter (Xano standard)
  const newCsv = Papa.unparse(transformedRows, {
    delimiter: ",",
  });

  return newCsv;
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

export default function CsvToXano() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [csvText, setCsvText] = useState("");
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
      setCsvText(""); // Clear text if file is chosen
    }
  };

  const handleConvert = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = function (e) {
        try {
          const result = e.target?.result;
          if (typeof result === "string") {
            const csv = processCsvData(result);
            const outName = selectedFile.name.replace(/\.[^/.]+$/, "") + "_xano.csv";
            downloadCSV(csv, outName);
          }
        } catch (err: any) {
          showError(err.message || "Erro: Falha na conversão do arquivo selecionado.");
          console.error(err);
        }
      };
      reader.readAsText(selectedFile, "ISO-8859-1"); // Often Brazilian CSVs are in ISO-8859-1, but can be UTF-8
    } else if (csvText.trim()) {
      try {
        const csv = processCsvData(csvText.trim());
        downloadCSV(csv, "dados_convertidos_xano.csv");
      } catch (err: any) {
        showError(err.message || "Erro: O texto colado não pôde ser convertido.");
        console.error(err);
      }
    } else {
      showError("Por favor, selecione um arquivo CSV ou cole o conteúdo no campo indicado.");
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
            CSV para Xano
          </h1>
          <p className="text-text-muted text-lg">
            Ajuste a formatação de números (1.500,00 {'->'} 1500.00) e prepare planilhas para o Xano.
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
              accept=".csv,text/csv" 
              className="hidden"
              onChange={handleFileChange}
            />
            <span className={`font-semibold text-lg ${selectedFile ? 'text-primary' : 'text-text-muted'}`}>
              {selectedFile ? `Selecionado: ${selectedFile.name}` : "Arraste e solte um arquivo .csv ou clique aqui"}
            </span>
          </div>
        </div>

        <div className="flex items-center text-center my-6 text-text-muted before:flex-1 before:border-b before:border-border-subtle after:flex-1 after:border-b after:border-border-subtle">
          <span className="px-4 font-bold tracking-wider text-[#a0aec0] text-sm">OU</span>
        </div>

        <div className="mb-8">
          <label className="block mb-2 font-semibold text-[#4a5568]">Cole seu CSV abaixo</label>
          <textarea 
            spellCheck={false} 
            value={csvText}
            onChange={(e) => {
              setCsvText(e.target.value);
              if (selectedFile) setSelectedFile(null); // Clear file if text is edited
            }}
            placeholder={'id;nome;valor\n1;João;1.500,00\n2;Maria;250,55\n'}
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
