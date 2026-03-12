const Papa = require("papaparse");

const getTransformCsv = (csvText) => {
  const parsed = Papa.parse(csvText, {
    delimiter: ";", // Default for Excel in Brazil
    skipEmptyLines: true,
  });

  if (parsed.errors.length > 0 && parsed.data.length === 0) {
    throw new Error("Falha ao analisar o CSV. Verifique se o separador é ponto e vírgula (;)");
  }

  // Se retornou um array de arrays
  const rows = parsed.data;
  
  // Mapear cada célula verificando se é um possível número brasileiro
  const transformedRows = rows.map((row) => {
    return row.map((cell) => {
      if (typeof cell !== "string") return cell;
      
      const trimmed = cell.trim();
      
      // Regexp para identificar formato brasileiro: "1.234,56" ou "-150,00"
      if (/^-?\d{1,3}(\.\d{3})*(,\d+)?$/.test(trimmed)) {
        // Remover pontos de milhar, trocar virgula por ponto
        return trimmed.replace(/\./g, "").replace(",", ".");
      }
      
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

const mockCSV = `id;nome;valor;saldo
1;Teste A;1.500,00;-50,25
2;Teste B;200,00;0,00
3;Teste C;1.234.567,89;0,42
4;Teste D;100;120`;

console.log("Original:");
console.log(mockCSV);
console.log("\nConvertido:");
console.log(getTransformCsv(mockCSV));
