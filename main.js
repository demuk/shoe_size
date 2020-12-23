
const inputSize = [23.5, 24.1, 24.4, 24.8, 25.4, 25.7, 26, 26.7, 27, 27.3, 27.9, 28.3, 28.6, 29.4, 30.2, 31, 31.8 ];
const outputSize = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14, 15 , 16];

function checkTheSizeOfTheShoe() {
  let sizeOfFoot = parseFloat(document.getElementById("lengthOfFoot").value, 10);
  let result = (sizeOfFoot ?sizeOfFoot : 0) + ' is an Invalid Input Size';
  if(inputSize.includes(sizeOfFoot)) {
    result = outputSize[inputSize.indexOf(sizeOfFoot)];
  } else if( ( !inputSize.includes(sizeOfFoot) ) && ( sizeOfFoot >= inputSize[0] && sizeOfFoot <= inputSize[inputSize.length - 1]) ) {
    for(let i = 0; i < inputSize.length; i++) {
      let currentValue = inputSize[i];
      let nextValue = inputSize[i + 1];
      if(sizeOfFoot > currentValue && sizeOfFoot < nextValue) {
          result = outputSize[inputSize.indexOf(inputSize[i + 1])];
      }
    }
  }
  document.getElementById("shoesize").innerHTML = result;
}


