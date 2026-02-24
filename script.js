const result = document.getElementById("result");
const history = document.getElementById("history");
const buttons = document.querySelectorAll("button");

let expression = "";
let lastAnswer = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        if (value === "clear") {
            expression = "";
            result.value = "";
            history.innerText = "";
        }
        else if (value === "del") {
            expression = expression.slice(0, -1);
            result.value = expression;
        }
        else if (value === "ENTER") {
            try {
                history.innerText = expression;
                expression = eval(expression).toString();
                result.value = expression;
                lastAnswer = expression;
            } catch {
                result.value = "Error";
            }
        }
        else if (value === "ans") {
            expression += lastAnswer;
            result.value = expression;
        }
        else if (value === "√") {
            expression = Math.sqrt(eval(expression)).toString();
            result.value = expression;
        }
        else if (value === "±") {
            expression = (eval(expression) * -1).toString();
            result.value = expression;
        }
        else {
            expression += value;
            result.value = expression;
        }
    });
});