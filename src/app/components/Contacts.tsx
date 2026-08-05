import { useTranslation } from "react-i18next";
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  TelegramIcon,
} from "./icons/ContactIcons";

const contacts = [
  {
    id: "email",
    href: "mailto:mateusfmfm@outlook.com",
    value: "mateusfmfm@outlook.com",
    Icon: EmailIcon,
    external: false,
  },
  {
    id: "telegram",
    href: "https://t.me/mateusfmfm",
    value: "@mateusfmfm",
    Icon: TelegramIcon,
    external: true,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/mateusfmfm",
    value: "mateusfmfm",
    Icon: LinkedInIcon,
    external: true,
  },
  {
    id: "github",
    href: "https://github.com/mateusfmfm",
    value: "mateusfmfm",
    Icon: GitHubIcon,
    external: true,
  },
] as const;

export default function Contacts() {
  const { t } = useTranslation();

  return (
    <ul className="contacts-list">
      {contacts.map((contact) => {
        const value = contact.value;

        return (
          <li key={contact.id}>
            <a
              href={contact.href}
              className="contact-link"
              {...(contact.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <contact.Icon className="contact-icon" />
              <span className="contact-label">{t(`contacts.${contact.id}`)}:</span>
              <span className="contact-value">{value}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
