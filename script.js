function performOperation(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        if (isNaN(num1) || isNaN(num2)) {
            reject('Invalid input: Both inputs must be numbers.');
            return;
        }

        switch (operation) {
            case '+':
                resolve(num1 + num2);
                break;
            case '-':
                resolve(num1 - num2);
                break;
            case '*':
                resolve(num1 * num2);
                break;
            case '/':
                if (num2 === 0) {
                    reject('Error: Division by zero is not allowed.');
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject('Invalid operation: Supported operations are +, -, *, /.');
        }
    });
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const resultDiv = document.getElementById('result');

    performOperation(num1, num2, operation)
        .then(result => {
            resultDiv.textContent = `Result: ${result}`;
            resultDiv.style.color = '#28a745'; // Green color for success
        })
        .catch(error => {
            resultDiv.textContent = `Error: ${error}`;
            resultDiv.style.color = '#dc3545'; // Red color for errors
        });
}
