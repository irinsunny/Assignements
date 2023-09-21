const originalString = "Hello,\x02\x1FGood\x0AMorning!";
const cleanedString = originalString.replace(/[\x00-\x1F\x7F-\x9F]/g, '');
console.log(cleanedString);