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

let getValidOperation = () => {
    let input;
    let match;
    const regex = /^(\d+(\.\d+)?)\s*([\+\-\*\/])\s*(\d+(\.\d+)?)$/;
    while (true) {
        input = rs.question('Please enter the operation (e.g., "6 / 6" or "5 * 3"): ');
        match = input.match(regex);
        if (match) {
            return {
                num1: parseFloat(match[1]),
                op: match[3],
                num2: parseFloat(match[4])
            };
        }
        console.log('Invalid input. Please enter a valid operation.');
    }
};

let main = () => {
    let { num1, op, num2 } = getValidOperation();

    let confirm = rs.keyInYNStrict(`Are you sure you want to ${num1} ${op} ${num2}?`);

    if (confirm) {
        console.log('Result: ' + operation(num1, op, num2));
    } else {
        console.log('Ok, let\'s try again.');
        return main();
    }
};

main();