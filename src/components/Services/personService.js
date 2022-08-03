export const getRegions = async () => {
    return fetch('http://localhost:3001/api/regiones')
    .then((response) => response.json())
}

export const createPerson = async (person) => {
    const options = {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'content-type': 'application/json',
        },
        body: JSON.stringify(person)
    }
    fetch('http://localhost:3001/api/personas', options)
        .then(response => response.json())
}