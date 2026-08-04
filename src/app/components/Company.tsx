interface CompanyProps {
  logo: string;
  name: string;
  role: string;
  time: string;
  description: string;
}

export default function Company({ logo, name, role, time, description }: CompanyProps) {
  return (
    <article className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-xs hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="shrink-0 w-14 h-14 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700 bg-white">
          <img
            src={logo}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <div className="flex items-baseline gap-2 flex-wrap">
            <h3 className="text-xl font-bold">
              {name}
            </h3>
            <span className="text-lg font-light italic text-slate-500 dark:text-slate-400">
              {role}
            </span>
          </div>
          <span className="block text-sm text-slate-400 dark:text-slate-500 mt-0.5">
            {time}
          </span>
        </div>
      </div>
      <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm leading-relaxed">
        {description}
      </p>
    </article>
  );
}
