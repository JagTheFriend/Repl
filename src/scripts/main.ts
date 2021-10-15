const apiURL: string = "https://API.jagthefriend.repl.co";
interface API {
    output: string
}

const runBtn: HTMLButtonElement = document.getElementById("runButton") as HTMLButtonElement;
runBtn.onclick = runCode;

/**
 * Runs the code provided by the user
 */
function runCode(): void {
    // gets the code written by the user
    const code: string = (document.getElementById("inputCode") as HTMLTextAreaElement).value;
    // gets the language selected by the user
    const language: string = (document.getElementById("languages") as HTMLSelectElement).value;

    // Send a `GET` request to the API
    fetch(`${apiURL}/compile=${language}_${code}`)
        .then((data: Response) => data.json())
        .then(function (data: API){
            // Get ths output of the response
            var output = data.output;
            (document.getElementById("outputCode") as HTMLTextAreaElement).value = `Output: \n${output}`;
        });
}
