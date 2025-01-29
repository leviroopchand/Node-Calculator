let operation = (num, op, num2) => {
    switch (op) {
        case '+':
            return num + num2;
        case '-':
            return num - num2;
        case '*':
            return num * num2;
        case '/':
            return num / num2;
        default:
            return 'Invalid operation';
    }
};

let getValidNumber = (prompt) => {
    let num;
    while (true) {
        num = parseFloat(rs.question(prompt));
        if (!isNaN(num)) {
            break;
        }
        console.log('This is not a number. Please enter a valid number.');
    }
    return num;
};

let main = () => {
    let operations = ['+', '-', '*', '/'];
    let index = rs.keyInSelect(operations, "What operation would you like to perform?");
    if (index === -1) {
        console.log('No valid operation selected. Restarting.');
        return main();
    }
    let op = operations[index];
    let num = getValidNumber('Please enter the first number: ');
    let num2 = getValidNumber('Please enter the second number: ');

    let confirm = rs.keyInYNStrict('Are you sure you want to ' + num + ' ' + op + ' ' + num2 + '? ');

    if (confirm) {
        console.log('Result: ' + operation(num, op, num2));
    } else {
        console.log('Ok, let\'s try again.');
        return main();
    }
};

main();