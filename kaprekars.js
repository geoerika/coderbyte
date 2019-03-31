function KaprekarsConstant(num) {

    let nrTimes = 1;

    let num1 = num.toString().split('');
    while (num1.length < 4)    {
      num1.push('0');
    }

    let numMin = parseInt(num1.sort().join(''));
    let numMax = parseInt(num1.sort( (a,b) => { return b - a}).join(''));

    num = numMax - numMin;

    if (num !== 6174) {
        nrTimes = 1 + KaprekarsConstant(num);
    }

    return nrTimes;

}

console.log(KaprekarsConstant(2111));