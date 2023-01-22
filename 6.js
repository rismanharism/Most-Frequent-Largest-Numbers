//Instructor solution
 
function sorting(arrNumber) {
    let temp = 0, sorted = false;
  
    while (!sorted) {
      sorted = true;
      for (let i = 1; i < arrNumber.length; i++) {
        if (arrNumber[i - 1] > arrNumber[i]) {
          temp = arrNumber[i - 1];
          arrNumber[i - 1] = arrNumber[i];
          arrNumber[i] = temp;
          sorted = false;
        }
      }
    }
  
    return arrNumber;
  }
  
  function getTotal(arrNumber) {
    if (arrNumber.length) {
      let highestNumber = 0, highestNumberCount = 0;
  
      for (let i = 0; i < arrNumber.length; i++) {
        if(arrNumber[i] > highestNumber){
          highestNumberCount = 0;
          highestNumber = arrNumber[i];
          highestNumberCount++;
        } else {
          highestNumberCount++;
        }
      }
    
      return highestNumberCount;
    } else {
      return '';
    }
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    if(countHighest){
      return `angka paling besar adalah ${listSort[listSort.length -1]} dan jumlah kemunculan sebanyak ${countHighest} kali`;
    } else {
      return '';
    } 
  }

// ===============================================================================================


function sorting(arrNumber) {
  // code di sini
  let temp;
  for (let i = 0; i < arrNumber.length; i++) {
      for (let j = 0; j < arrNumber.length; j++) {
          if (arrNumber[j] > arrNumber[j + 1]) {
              temp = arrNumber[j];
              arrNumber[j] = arrNumber[j + 1];
              arrNumber[j + 1] = temp;
          }
      }
  }
  return arrNumber;
}

function getTotal(arrNumber) {
  // code di sini
  if (arrNumber.length === 0) return '';

  let highestNum = arrNumber[arrNumber.length - 1];
  let count = 0;
  for (let i = 0; i < arrNumber.length; i++) {
      if (arrNumber[i] === highestNum) {
          count++;
      }
  }
  return 'angka paling besar adalah ' + highestNum + ' dan jumlah kemunculan sebanyak ' + count + ' kali';
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

// ================================================================================================================

function sorting(arrNumber) {
  let tmp = '';
  for (let i = 0; i < arrNumber.length; i++) {
    for (let j = 0; j < arrNumber.length; j++) {
      if (arrNumber[i] < arrNumber[j]) {
        tmp = arrNumber[i];
        arrNumber[i] = arrNumber[j];
        arrNumber[j] = tmp;
      }
    }
  }

  return arrNumber;
}

function getTotal(arrNumber) {
  let total = 0;

  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] === arrNumber[i+1]) {
      total++;
    } else if (i === arrNumber.length - 1) {
      total++;
    } else {
      total = 0;
    }
  }

  return total;
}

function mostFrequentLargestNumbers(arrNumber) {
  if (arrNumber.length === 0) return '';

  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);

  return `angka paling besar adalah ${listSort[listSort.length - 1]} dan jumlah kemunculan sebanyak ${countHighest} kali`
}

let inputArr = [2, 8, 4, 6, 8, 5, 8, 4];
console.log(mostFrequentLargestNumbers(inputArr));

// ==========================================================================================================================

function sorting(array){
  for(let i=0;i<array.length;i++){
      for(let j=i+1; j<array.length;j++){
          let simpan;
          if(array[i]<array[j]){
              simpan = array[i];
              array[i]= array[j];
              array[j]=simpan;
          }
      }
  }

  return array
}