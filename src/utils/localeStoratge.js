// utils/storage.ts
export const setLocaleStorage = (key, token) => {
    if (typeof window === 'undefined') return "";
    return localStorage.setItem(key, token);
};

export const getFormLocaleStorage = (key) => {
    if (typeof window === 'undefined') return "";
    return localStorage.getItem(key);
};

export const removeFromLocaleStorage = (key) => {
    if (typeof window === 'undefined') return "";
    return localStorage.removeItem(key);
};
