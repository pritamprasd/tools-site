import jsYaml from 'js-yaml';

export function getYamlOutput(inputText){
    try {
        var santitized = inputText.replace(/:\s*-/g, ':\n    -');
        santitized = jsYaml.dump(santitized, { indent: 2 });
        const parsedYaml = jsYaml.load(santitized);
        return JSON.stringify(parsedYaml)
    } catch (error) {
        return `Error in getYamlOutput: \n${error}`
    }
}

function convertIfJson(inputText) {
    try {
        const yl = JSON.parse(inputText)
        const yaml = yaml.load(JSON.stringify(yl))
        return yaml.toString()
    } catch (error) {
        return inputText
    }
}