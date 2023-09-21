const numList = [1, 2, 3, 4, 5];
const sqauredNumList = numList.map((num) => num -1);
let sum = 0;
for (const num of sqauredNumList) {
    sum += num;
}
console.log(sum / sqauredNumList.length);