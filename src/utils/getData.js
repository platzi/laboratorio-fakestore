const API = process.env.API;

const getData = async () => {
    const api = `${API}?offset=${localStorage.offset}&limit=${localStorage.limit}`
        try {
        const response = await fetch(api)
        const data = await response.json(); 
        if (data.length < 10) {
            localStorage.maxOffset = true
        }
        return data
    } catch (error) {
        console.error('Fetch Error', error)
    }
}

export default getData;