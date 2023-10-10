export function toBase64(inputText){
    return btoa(unescape(encodeURIComponent(inputText)))
}

export function fromB64(inputText){
    try {
        return decodeURIComponent(escape(window.atob(inputText)));
    } catch (error) {
        return `Invalid B64 string\n=====\n${error}`
    }
}