export default function Projects() {
  return (
    <section id="projects" className="space-y-6">
      {/* Título da Seção */}
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
        Projetos em Destaque
      </h2>

      {/* Grid de Cards Responsivo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card de Projeto 1 */}
        <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-xs hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300">
          <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
            Flutter
          </span>
          <h3 className="text-xl font-bold mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            Banco BV
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm leading-relaxed">
            Liderei o time de Frontend e Mobile desenvolvendo projetos no Banco BV, um aplicativo de banco digital para pessoas físicas e jurídicas.
          </p>
        </div>

        {/* Card de Projeto 2 */}
        <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-xs hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300">
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
            Fullstack (Go, Flutter)
          </span>
          <h3 className="text-xl font-bold mt-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            wowe
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm leading-relaxed">
            Liderei o desenvolvimento integral do projeto, baseado em uma rede social para compartilhamento de experiências e trendings.
          </p>
        </div>
        {/* Card de Projeto 3 */}
        <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-xs hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300">
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
            Fullstack (Go, Flutter)
          </span>
          <h3 className="text-xl font-bold mt-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            wowe
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm leading-relaxed">
            Liderei o desenvolvimento integral do projeto, baseado em uma rede social para compartilhamento de experiências e trendings.
          </p>
        </div>
      </div>
    </section>
  );
}