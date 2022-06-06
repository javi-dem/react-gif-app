
// Peticion http
export const getGifs = async(category) => {
    // encodeURI: Convierte caracteres especiales a codigo URI
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=rXoH05m2lvSNSsTqjjljyncHSiK9PU8a`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            // ? signo para cosultar si existe una propiedad
            url: img.images?.downsized_medium.url
         }
    });

    return gifs
}