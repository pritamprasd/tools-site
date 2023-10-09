export function getJsonOutput(input){
    try {
        return JSON.stringify( JSON.parse(input), null, 4)            
    } catch (error) {
        return `Error in getJsonOutput: \n${error}`
    }
}