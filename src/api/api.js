export async function consultar () {

    const consulta = await fetch(import.meta.env.VITE_URL);

    const {items} = await consulta.json();
    return items ?? []
}