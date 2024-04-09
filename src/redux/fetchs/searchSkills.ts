export const searchSkills = async (search: string) => {
    const params = new URLSearchParams({q: search});
    const response = await fetch(`${import.meta.env.VITE_APP_SEARCH_URL}?${params}`);
    if (!response.ok) {
        throw new Error('Не удалось осуществить поиск');
    }
    return await response.json();
}