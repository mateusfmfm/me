const STORAGE_KEY = "i18nextLng";
const PT_COUNTRIES = new Set(["BR", "PT"]);

export type AppLanguage = "pt-BR" | "en";

function persist(lng: AppLanguage): AppLanguage {
  localStorage.setItem(STORAGE_KEY, lng);
  return lng;
}

export async function detectLanguage(): Promise<AppLanguage> {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "pt-BR" || saved === "en") return saved;

  try {
    const res = await fetch("https://ipapi.co/country_code/");
    if (!res.ok) throw new Error(`Geo lookup failed: ${res.status}`);

    const country = (await res.text()).trim().toUpperCase();
    return persist(PT_COUNTRIES.has(country) ? "pt-BR" : "en");
  } catch {
    const nav = navigator.language.toLowerCase();
    return persist(nav.startsWith("pt") ? "pt-BR" : "en");
  }
}
