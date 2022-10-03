export function parseFormData(formData) {
    const fields = Object.fromEntries(formData);
    const data = Object.entries(fields)
    .reduce((acc, [key, value]) => {
        if (key.includes('+')) {
            const [k, c] = key.split('+')
            acc[k] = acc[k] || {}
            acc[k][c] = value 
        } else {
            acc[key] = value
        }
        return acc
    }, {})
    data.accept = data.accept == 'true' || data.accept == 'on'
    return data
}
