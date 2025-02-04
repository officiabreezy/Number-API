const axios = require('axios');

const isPrime = (num) =>{
   if (num < 2) 
      return false;
   for (let i = 2; i < num; i++){
     if (num % i === 0)
        return false;
   }
    return true;
};

const isPerfect = (num) => {
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) 
                sum += num / i;
        }
    }
    return sum === num && num !== 1;
};

const isArmstrong = (num) => {
    if(num < 0) return false;
    const digits = num.toString().split("").map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
    return sum === num;
};

const digitSum = (num) => Math.abs(num) 
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);


const getFunFact = async (num) => {
    try {
        const response = await axios.get(`http://numbersapi.com/${num}/math?json`);
        return response.data.text;
    } catch (error) {
        return  "No fun fact found.";
    }
};

const classifyNumber = async (num) => {
    const prime = isPrime(num);
    const perfect = isPerfect(num);
    const armstrong = isArmstrong(num);
    const odd = num % 2 !== 0;  
    const digitSumValue = digitSum(num);
    const funFact = await getFunFact(num);

    let properties  = [];
    if(armstrong) properties.push("armstrong");
    properties.push(odd? "odd" : "even");

    return {
        number: num,
        is_prime: prime,
        is_perfect: perfect,
        properties,
        digit_sum: digitSumValue,
        fun_fact: funFact,
    };
};

module.exports = classifyNumber;