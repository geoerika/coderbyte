function AlphabetSoup(str) {

  let sortString = str.split('').sort().join('');
  return sortString;

}


console.log(AlphabetSoup('unbelievable'));