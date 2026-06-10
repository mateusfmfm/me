import type { ReactNode } from "react";
import Header from "./Header";

interface ScaffoldProps {
  children: ReactNode;
}

export default function Scaffold({ children }: ScaffoldProps) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300 flex flex-col">
      {/* Header fixo no topo */}
      <Header />

      {/* Contêiner do Conteúdo Principal */}
      {/* O 'flex-1' garante que o main ocupe todo o espaço restante da tela se o conteúdo for curto */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Aqui está a mágica: 
          'flex flex-col gap-12 md:gap-20' garante que todos os blocos enviados
          para dentro do Scaffold fiquem perfeitamente empilhados em coluna,
          com um espaçamento maior em telas grandes (md:) para dar um respiro visual (design profissional).
        */}
        <div className="flex flex-col gap-12 md:gap-20">
          {children}
        </div>
      </main>

      {/* Rodapé Simples opcional */}
      <footer className="w-full py-6 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-400 dark:text-slate-600">
        © {new Date().getFullYear()} Mateus Félix. Feito com React + Tailwind.
      </footer>
    </div>
  );
}