// take user size of leg as a Number

function checkTheSizeOfTheShoe() {
    let sizeOfFoot = parseFloat(document.getElementById("lengthOfFoot").value, 10);

    let inputSize = [23.5, 24.1, 24.4, 24.8, 25.4, 25.7, 26, 26.7, 27, 27.3, 27.9, 28.3, 28.6, 29.4, 30.2, 31, 31.8 ];
  
  const outputSize = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14, 15 , 16];
  
  let result = 'Invalid Input Size';
  if(inputSize.includes(sizeOfFoot)) {
    result = outputSize[inputSize.indexOf(sizeOfFoot)]
  }
  
    document.getElementById("shoesize").innerHTML = result;
}
