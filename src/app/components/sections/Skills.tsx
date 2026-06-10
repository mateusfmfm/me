import BadgesRow from "../BadgesRow";

export default function Skills() {
    return (
      <section id="skills" className="space-y-6">
        {/* Título e Subtítulo da Seção */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Skills
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Tive a oportunidade de trabalhar com uma variedade de tecnologias ao longo da minha carreira, além ser apaixonado por estudos. Portanto, essa lista está sempre sendo atualizada.
          </p>
        </div>
        <div>
            <BadgesRow />
        </div>
  
        {/* Placeholder para a estrutura de abas interativas */}
        <div className="p-8 text-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl text-slate-400 dark:text-slate-600 bg-white/30 dark:bg-slate-900/30 backdrop-blur-xs">
          [ Aqui vai entrar nosso componente de abas interativas ]
        </div>
      </section>
    );
  }