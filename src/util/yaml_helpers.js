import jsYaml from 'js-yaml';

export function getYamlOutput(inputText){
    try {
        var santitized = inputText.replace(/:\s*-/g, ':\n    -');
        const parsedYaml = jsYaml.load(santitized);
        return jsYaml.dump(parsedYaml, { indent: 2 });
    } catch (error) {
        // const lines = inputText.split('\n');
        // const errors = [];
        // const errorLines = error.mark.name.split('\n');
        // errorLines.forEach((line, index) => {
        //     const lineNumber = error.mark.line + index;
        //     errors.push(`Line ${lineNumber}: ${line}`);
        // });        
        return `Error at line ${error.mark.line}, position: ${error.mark.position}`
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