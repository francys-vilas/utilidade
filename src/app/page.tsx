"use client";

import { useState } from "react";
import { FilterButton } from "@/components/FilterButton";
import { ToolCard, ToolCardProps } from "@/components/ToolCard";

const tools: ToolCardProps[] = [
  {
    title: "JSON para CSV",
    description: "Converta de forma inteligente objetos JSON aninhados ou arrays diretamente para tabelas CSV formatadas.",
    category: "dados",
    icon: "🔄",
    tags: ["Dados", "Exportação"],
    href: "/json-to-csv"
  },
  {
    title: "Compressor de Imagem",
    description: "Reduza o tamanho de imagens PNG e JPEG mantendo a qualidade visual para web usando processamento local.",
    category: "imagens",
    icon: "🖼️",
    tags: ["Imagens", "Otimização"],
    href: "#"
  },
  {
    title: "Formatador JSON",
    description: "Cole seu JSON feio e minificado e receba ele formatado, indentado e fácil de ler com destaque de sintaxe.",
    category: "texto",
    icon: "✨",
    tags: ["Texto", "JSON"],
    href: "#"
  },
  {
    title: "CSV para JSON",
    description: "O inverso da nossa outra ferramenta. Transforme planilhas tabulares de volta em arrays de objetos estruturados.",
    category: "dados",
    icon: "📊",
    tags: ["Dados", "Conversão"],
    href: "#"
  },
  {
    title: "Gerador de Senhas",
    description: "Crie senhas criptograficamente seguras com base em critérios de força, comprimento e símbolos especiais.",
    category: "outros",
    icon: "🔑",
    tags: ["Segurança", "Utilitário"],
    href: "#"
  },
  {
    title: "Contador de Caracteres",
    description: "Analise textos grandes em tempo real. Veja a quantidade de palavras, caracteres limpos e tempo de leitura.",
    category: "texto",
    icon: "📝",
    tags: ["Texto", "Análise"],
    href: "#"
  }
];

export default function Home() {
  const [filter, setFilter] = useState("todos");

  const filteredTools = filter === "todos" 
    ? tools 
    : tools.filter(t => t.category === filter);

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 md:py-20 animate-fade-in">
      <header className="text-center mb-12 animate-slide-down">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4">
          Hub de Utilidades
        </h1>
        <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
          Sua central de ferramentas rápidas para facilitar o dia a dia. Selecione uma categoria abaixo ou navegue pelo grid.
        </p>
      </header>

      <div className="flex justify-center gap-3 mb-12 flex-wrap animate-fade-in-delayed">
        <FilterButton 
          label="Todas as Ferramentas" 
          isActive={filter === "todos"} 
          onClick={() => setFilter("todos")} 
        />
        <FilterButton 
          label="Manipulação de Dados" 
          isActive={filter === "dados"} 
          onClick={() => setFilter("dados")} 
        />
        <FilterButton 
          label="Imagens" 
          isActive={filter === "imagens"} 
          onClick={() => setFilter("imagens")} 
        />
        <FilterButton 
          label="Textos" 
          isActive={filter === "texto"} 
          onClick={() => setFilter("texto")} 
        />
        <FilterButton 
          label="Outros" 
          isActive={filter === "outros"} 
          onClick={() => setFilter("outros")} 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTools.map((tool, index) => (
          <div 
            key={tool.title} 
            className="animate-fade-in-up" 
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
          >
            <ToolCard {...tool} />
          </div>
        ))}
      </div>
    </main>
  );
}
