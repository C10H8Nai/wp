//Q1 請寫一個 min(a,b) 函數傳回 a, b 裡較小的那個數字
function min(a,b){
    if (a<b)
    return a;
  else
    return b;
}
//Q2 請寫一個 arrayMin(a) 函數傳回陣列 a 裡最小的那個數字
function arrayMin(a){
    var a_min = a[0];
    for(var i;i<a.length;i++){
        try{
            var a_min = Math.min(a_min, a[i]);
        }catch(error){
            console.log(error);
        }
        console.log(i, "/", a[i+1]);
    }
    return a_min;
}
//Q3 請寫一個 filter(a, f) 函數可以根據 f 成功或失敗過濾掉那些不合的內容
function filter(a,f){
    var result = [];
    for (var i = 0; i < a.length; i++) {
        if (f(a[i])) {  //當輸入的f函數為true時，將該位置加入result
            result.push(a[i]);
        }
    }
    return result;
}
//Q4 請寫一個函數 weekday(str) 可以把星期幾的英文轉換成數字（0,1,2,3,4,5,6) (Sunday 是 0)
function weekday(str){
    var day = 0;
    var err = "Unknow word";
    switch(str){
        case "Sunday":
            day = 0;
            return day;
        case "Monday":
            day = 1;
            return day;
        case "Tuesday":
            day = 2;
            return day;
        case "Wednesday":
            day = 3;
            return day;
        case "Thursday":
            day = 4;
            return day;
        case "Friday":
            day = 5;
            return day;
        case "Saturday":
            day = 6;
            return day;
        default:
            return err;
    }
}
var dayti ={
    "Sunday":0,
    "Monday":1,
    "Tuesday":2,
    "Wednesday":3,
    "Thursday":4,
    "Friday":5,
    "Saturday":6
}
function dayToIndex(day){
    return dayti[day];
}

//Q5 請寫一個函數 countChar(str) 可以算出一個字串中，每個字出現幾次。
function countChar(str){
    var charCount = {}; // 創建一個空的物件來保存每個字母的計數

    // 遍歷字串中的每個字符
    for (let char of str) {
        // 如果 charCount 物件中已經有這個字母的屬性，則將其值加 1；否則，將其初始化為 1
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // 將 charCount 物件轉換為陣列，並按照字母順序排序
    const charCountArray = Object.entries(charCount).sort(([charA], [charB]) => charA.localeCompare(charB));

    // 將排序後的陣列轉換回物件形式
    const sortedCharCount = {};
    for (const [char, count] of charCountArray) {
        sortedCharCount[char] = count;
    }

    return sortedCharCount;
}
//Q6 寫一個函數 gcd(a,b) 傳回 a, b 兩數字的最大公因數。
function gcd(a,b){
    // 如果 b 為 0，則 a 即為最大公因數
    if (b === 0) {
        return a;
    }

    // 否則，遞歸計算 b 和 a 除以 b 的餘數的最大公因數
    return gcd(b, a % b);
}
//Q7 寫一個函數 lcm(a,b) 傳回 a, b 兩數字的最小公倍數。
function lcm(a,b){
    return (a * b) / gcd(a, b);
}

//Q8 請寫一個函數 gradient(f, p) 可以計算 f 在 p 點的梯度
function gradient(f, p) { //gradient(f, p) 函數計算函數 f 在點 p 上的梯度
    const gp = []; // 創建一個空陣列來存儲梯度向量
    for (let k = 0; k < p.length; k++) {
        const p1 = p.slice(); // 複製陣列以避免改變原始陣列
        p1[k] += h; // 將變數 p 中的第 k 個元素增加一個小數 h
        const partialDerivative = (f(p1) - f(p)) / h; // 計算函數 f 對第 k 個變數的偏導數
        gp.push(partialDerivative); // 將偏導數添加到梯度向量中
    }
    return gp; // 返回梯度向量
}
// 測試函數 gradient
function Q8_f(p) {
    const [x, y] = p;
    return x * x + y * y; //二元二次函數
}

const h = 0.01; // 定義一個小數 h，用於計算偏微分的增量大小

//自動產生陣列
function autoarr(x){
    var arr = [];
    for(var i=0;i<x;i++){
        arr.push(i+1);
    }
    return arr;
}
//顯示用
function cout(str){
    console.log(str);
}

//判斷 n 是否為質數
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


//Test autoarr
var b=autoarr(15);
cout("Test b[]:" + b);

//Q1
cout("1. min(a,b)函數傳回a,b裡較小的那個數字:min(10,5)")
cout(min(10,5));
//Q2
var a = [3,4,1,2,5];
cout("2. arrayMin(a) 函數傳回陣列a裡最小的那個數字:a=[3,4,1,2,5]")
cout(arrayMin(a));

//Q3
// 篩選出奇數
var oddNumbers = filter(b, function(x) {
    return x % 2 === 1;
});
// 篩選出偶數
var evenNumbers = filter(b, function(x) {
    return x % 2 === 0;
});
// 篩選出質數
var primeNumbers = filter(b , isPrime);
cout("3. filter(a,f)函數可以根據f成功或失敗過濾掉那些不合的內容，filter(b,function)");
cout("篩選出奇數:");
cout(oddNumbers);
cout("篩選出偶數:");
cout(evenNumbers);
cout("篩選出質數:");
cout(primeNumbers);

//Q4
var c = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Test"];
var c_1 = [] , c_2 = [];
for(var i=0;i<c.length;i++){
    c_1.push(weekday(c[i]));
    c_2.push(dayToIndex(c[i]));
}
cout("4. weekday(str)可以把星期幾的英文轉換成數字(0,1,2,3,4,5,6)(Sunday是0)，");
cout("case方式:");
cout(c_1);
cout("字典方式:");
cout(c_2);

//Q5
var Q5_var = "ahjklczxvpqwiouethasfhjgladadgnhvxcv";
cout("5. countChar(str) 可以算出一個字串中，每個字出現幾次。");
cout("Q5_var = ahjklczxvpqwiouethasfhjgladadgnhvxcv :");
cout(countChar(Q5_var));

//Q6
cout("6. gcd(a,b)傳回a,b兩數字的最大公因數。");
cout("gcd(48,18):");
cout(gcd(48, 18));
cout("gcd(102,68):");
cout(gcd(102,68));
cout("gcd(12,5):");
cout(gcd(12, 5));

//Q7
cout("7. lcm(a,b)傳回a,b兩數字的最小公倍數。")
cout("lcm(4,6):")
cout(lcm(4, 6));
cout("lcm(15,25):")
cout(lcm(15, 25));
cout("lcm(18,26):")
cout(lcm(18, 26));

//Q8
const Q8_p1 = [1, 3]; // 定義一個測試點
cout("8. gradient(f,p)可以計算f在p點的梯度");
cout("Q8_p1=[1,3]");
cout(gradient(Q8_f, Q8_p1));