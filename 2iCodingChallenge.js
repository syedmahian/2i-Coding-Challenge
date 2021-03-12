// Itterates and prints multiples of 7,8 and 9 up to 300.
//If a number is not a multiple of these numbers it prints "Not a multiple of 7, 8 or 9"


for (let x=1; x < 300; x++){
  if( x < 100 && x % 7 == 0) {
      console.log(x);
  } else if( x < 200 && x % 8 ==0){
    console.log(x);
  } else if(x < 300 && x % 9 == 0){
    console.log(x);
  } else {
    console.log("not a mutiple of 7,8 or 9")
  }
}
   