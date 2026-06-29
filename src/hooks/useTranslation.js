import { useLanguage } from "@/app/context/LanguageContext";


export default function useTranslation() {
  const { translations } = useLanguage();
  
  return (key, defaultValue = "") => {
    // Split nested keys (e.g., "header.category")
    const keys = key.split('.');
    let value = translations;
    
    // Traverse through the nested objects
    for (const k of keys) {
      if (!value || typeof value !== 'object') break;
      value = value[k];
    }
    
    // Return translation or default value
    return value || defaultValue;
  };
}