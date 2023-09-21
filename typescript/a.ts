
const input = prompt("Please enter a non-negative number:");

if (input === null) {
    // User clicked Cancel or closed the prompt
    console.log("Prompt was canceled.");
} else {
    var num1 = parseInt(input);

    if (!isNaN(num1) && num1 >= 0) {
        const numArray: number[] = [];

        while (num1 > 0) {
            const res = num1 % 10;
            numArray.push(res);
            num1 = Math.floor(num1 / 10);
        }

        console.log(numArray.reverse());
    } else {
        console.log("Invalid input. Please enter a non-negative number.");
    }
}
