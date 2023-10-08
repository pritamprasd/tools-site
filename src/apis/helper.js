export async function checkResponse(response) {
    if (!response.ok) {
        throw new Error(` | ${await response.text()}`)
    }
    return response
}