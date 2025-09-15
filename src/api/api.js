export async function consultar () {

    const consulta = await fetch("https://dragonball-api.com/api/characters?limit=58")

    const {items} = await consulta.json();
    return items ?? []
}