import type { ReactNode } from "react";
import Header from "./Header";

interface ScaffoldProps {
  children: ReactNode;
}

export default function Scaffold({ children }: ScaffoldProps) {
  return (
    <div className="page-shell">
      <Header />

      <main className="page-main">
        <div className="page-content">{children}</div>
      </main>

      <footer className="site-footer">
        © {new Date().getFullYear()} Mateus Félix. Feito com React + Tailwind.
      </footer>
    </div>
  );
}
