let operator;
function getSymbol() {
    let symbol = document.getElementsByClassName("symbol");
    if(symbol) {
        for(let i = 0; i < symbol.length; i ++) {
            symbol[i].addEventListener('click', function() {
                operator = symbol[i].innerText;
                console.log(operator);
            });
        }
        return operator;
    }
}
getSymbol();

document.getElementById('calculateButton').addEventListener('click', function() {
    let leftNum = document.getElementById('inputTextLeft').value;
    let rightNum = document.getElementById('inputTextRight').value;

    let data = {
        leftNum: leftNum,
        rightNum: rightNum
    };

    let xhr = new XMLHttpRequest();
    let url = 'http://localhost/calculation_API_practice/api.php';
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if(response.result.length > 0 && getSymbol() === "＋") {
                document.getElementById('result').innerText = "結果: " + response.result[1];
            } 
            else if(response.result.length > 0 && getSymbol() === "－") {
                document.getElementById('result').innerText = "結果: " + response.result[2];
            }
            else if(response.result.length > 0 && getSymbol() === "×") {
                document.getElementById('result').innerText = "結果: " + response.result[0];
            }
            else if(response.result.length > 0 &&  getSymbol() === "÷") {
                document.getElementById('result').innerText = "結果: " + response.result[3];
            } else {
                document.getElementById('result').innerText = "結果: " + response.error;
                console.log("エラー文言")
            }
        }
    };

    xhr.send(JSON.stringify(data));
});