let expression = "";
let lastAnswer = "";

function updateDisplay(){
    document.getElementById("expression").innerText =
        expression.replaceAll("*","×").replaceAll("/","÷");

    document.getElementById("result").innerText =
        expression || "0";
}

function add(value){
    expression += value;
    updateDisplay();
}

function clearAll(){
    expression="";
    updateDisplay();
}

function del(){
    expression = expression.slice(0,-1);
    updateDisplay();
}

function calculate(){
    try{
        let result = eval(expression);
        lastAnswer = result;
        expression = result.toString();
        updateDisplay();
    }
    catch{
        expression="";
        document.getElementById("result").innerText="Error";
    }
}

function answer(){
    expression += lastAnswer;
    updateDisplay();
}

function sqrt(){
    try{
        let result = Math.sqrt(eval(expression));
        expression = result.toString();
        updateDisplay();
    }
    catch{
        expression="";
    }
}

function plusMinus(){
    try{
        expression = (eval(expression)*-1).toString();
        updateDisplay();
    }
    catch{}
}