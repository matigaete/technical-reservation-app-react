export const getProducts = async () => {
    return fetch('http://localhost:3001/api/servicios')
    .then((response) => response.json())
}