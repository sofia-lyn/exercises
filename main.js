// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
const validateCred = array => {
  //console.log('original array is ' + array);
  const array2 = [];
  let sum = 0;

  // find the even position number from reverse order of the called array. double it's value and push into new array
  for (let i = array.length - 1; i >= 0; i -= 1 ){
    // find even position numbers
    if(i % 2 == 0){
      array2.push(array[i] * 2);
    }else {
      array2.push(array[i]);
    }
  }
  //console.log('array 2 is ' + array2);

  // find the value that's > 9. minus 9 if it is. 
  const array3 = array2.map(x => {
      if(x > 9){
        return x - 9;
      } else{
        return x;
      }
    
  });
  //console.log('array 3 is ' + array3);
  
  // sum up all the digits
  for(let number of array3){
    sum += number;
  }
  //console.log('sum is ' + sum);

  //checking sum retur 0 
  if (sum % 10 === 0){
    return 'valid';
  }else{
    //console.log('sum is ' + sum);
    return 'invalid';
  }
 
}// end of function

//console.log(validateCred(valid1));
//console.log(validateCred(invalid1));

function findInvalidCards(bulk){
  let invalidCard = [];
  for(let card of bulk){
    //console.log(validateCred(card));
    if(validateCred(card) === 'invalid'){
      invalidCard.push(card);
    }
  }
  return invalidCard;
}

findInvalidCards(batch);

const idInvalidCardCompanies = invalidList => {
  //console.log(invalidList);
  const cardCompanies = [];
  //loop thru array and identify credit card company from their unique first number
  for(let invalidCard of invalidList){
    //console.log(invalidCard[0]);
    if(invalidCard[0] === 3){
      cardCompanies.push('Amex');
    } else if (invalidCard[0] === 4){
      cardCompanies.push('Visa');
    } else if (invalidCard[0] === 5){
      cardCompanies.push('Mastercard');
    } else if (invalidCard[0] === 6){
      cardCompanies.push('Discover');
    } else {
      console.log('Company not found');
    }
  }
  const cardCompanies2 = cardCompanies.filter((element, index) => {
     //console.log(`${element} - ${index} - ${cardCompanies.indexOf(element)}`);
    return cardCompanies.indexOf(element) === index;
});
  console.log(cardCompanies2);
  
}

idInvalidCardCompanies(findInvalidCards(batch));



