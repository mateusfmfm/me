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
    <article className="card">
      <div className="flex items-start justify-between gap-4">
        <h3 className="card-title">{title}</h3>
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
            <span key={stack} className="stack-tag">
              {stack}
            </span>
          ))}
        </div>
      )}

      <p className="card-body mt-3">{description}</p>
    </article>
  );
}
