export function getJsonOutput(inputText){
    try {
        return JSON.stringify( JSON.parse(inputText), null, 4)            
    } catch (error) {
        return `Error in getJsonOutput: \n${error}`
    }
}