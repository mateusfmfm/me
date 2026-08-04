interface CompanyProps {
  logo: string;
  name: string;
  role: string;
  time: string;
  description: string;
}

export default function Company({ logo, name, role, time, description }: CompanyProps) {
  return (
    <article className="card">
      <div className="flex items-center gap-4">
        <div className="company-logo">
          <img
            src={logo}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <div className="flex items-baseline gap-2 flex-wrap">
            <h3 className="card-title">{name}</h3>
            <span className="company-role">{role}</span>
          </div>
          <span className="company-time">{time}</span>
        </div>
      </div>
      <p className="card-body mt-4">{description}</p>
    </article>
  );
}
