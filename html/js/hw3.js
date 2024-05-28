// 1. 印出 -- Hello 你好！
function Hello(){
    console.log("Hello! 你好!");
}
// 2. 印出小於 n 的所有奇數
function printOdd(n){
    for (let i=1 ; i<n ; i+=2){
        console.log(i);
    }
}
// 3. 判斷 n 是否為質數
function isPrime(n){
    if (n<=1){
        return false;
    }
    for (let i=2 ; i<=Math.sqrt(n) ; i++){   //檢查小於等於n的平方根之整數是否能被整除
        if (n % i=== 0){
            return false;
        }
    }
    return true;
}
// 4. 印出所有小於 n 的質數並計算總和
function sumPrime(n){
    let sum = 0;
    for (let i = 2; i < n; i++){
        if (isPrime(i)){
            sum += i;
            console.log(i);
        }
    }
    console.log("質數的總和:", sum);
}
// 5. 向量相加
class Vector{
    constructor(array){
        this.a = array;
    }

    add(arrayb){
        let a = [];
        for (let i=0; i<this.a.length; i++) {
          a[i] = this.a[i]+arrayb.a[i];
        }
        return new Vector(a);
    }

    toString(){
        return JSON.stringify(this.a);
    }
}
// 6. 矩陣相加
function matrixAdd(a,b){
    const result = [];
    for (let i = 0; i < a.length; i++) {
        const row = [];
        for (let j = 0; j < a[0].length; j++) {
            row.push(a[i][j] + b[i][j]);
        }
        result.push(row);
    }
    return result;
}
// 7. 矩陣相乘
function matrixMul(a,b){
    const result = [];
    for (let i = 0; i < a.length; i++) {
        const row = [];
        for (let j = 0; j < b[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < a[0].length; k++) {
                sum += a[i][k] * b[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}
//8. 請寫一個函數 daysInYear(n) 傳回西元 n 年應該有幾天
function daysInYear(n) {
    // 判斷是否為閏年
    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };

    // 若為閏年，則返回 366 天；否則返回 365 天
    return isLeapYear(n) ? 366 : 365;
}
console.log("1. 印出 -- Hello 你好!:");
Hello();

console.log("2. 印出小於 n 的所有奇數(n=30):");
printOdd(30);

console.log("3. 判斷 n 是否為質數(n=100, n=71):");
console.log(isPrime(100));
console.log(isPrime(71));

console.log("4. 印出所有小於 n 的質數並計算總和(n=100):");
sumPrime(100);

console.log("5. 向量相加:");
let p = new Vector([1, 3, 5]), p2 = new Vector([2, 4, 6]);
console.log('p=', p.toString(), 'p2=', p2.toString());
console.log('p + p2 =', p.add(p2));

console.log("6. 矩陣相加(mA = [[1, 2], [3, 4]], mB = [[5, 6], [7, 8]]):");
let mA = [[1, 2], [3, 4]], mB = [[5, 6], [7, 8]];
console.log(matrixAdd(mA, mB)); // 矩陣相加

console.log("7. 矩陣相乘:");
console.log(matrixMul(mA, mB)); // 矩陣相乘

console.log("8. 請寫一個函數 daysInYear(n) 傳回西元 n 年應該有幾天(n=2024, n=2025)");
console.log(daysInYear(2024));
console.log(daysInYear(2025));