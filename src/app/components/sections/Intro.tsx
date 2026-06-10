

export default function Intro() {
    return (
        <section id="about" className="space-y-4 pt-4 animate-fade-in">
            {/* Badge de Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50 w-fit">
                🚀 Disponível para novos projetos
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl max-w-3xl">
                Engenheiro de Software
            </h1>

            {/* Texto Biográfico */}
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                Olá, sou Mateus Félix, engenheiro de software localizado em Santos/SP.
                Apaixonado por estudos e desenvolvimento de soluções em software.
            </p>
        </section>
    );
}