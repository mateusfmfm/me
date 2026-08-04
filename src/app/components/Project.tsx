interface ProjectProps {
  title: string;
  stacks: string[];
  description: string;
  icons: string[];
}

export default function Project({
  title,
  stacks,
  description,
  icons,
}: ProjectProps) {
  return (
    <article className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-xs hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold">{title}</h3>
        {icons.length > 0 && (
          <div className="flex items-center gap-2 shrink-0">
            {icons.map((icon, index) => (
              <img
                key={`${icon}-${index}`}
                src={icon}
                alt=""
                className="w-5 h-5 object-contain"
                loading="lazy"
              />
            ))}
          </div>
        )}
      </div>

      {stacks.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {stacks.map((stack) => (
            <span
              key={stack}
              className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400"
            >
              {stack}
            </span>
          ))}
        </div>
      )}

      <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm leading-relaxed">
        {description}
      </p>
    </article>
  );
}
