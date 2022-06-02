// Code your solution in this file!

// Code your solution in this file!
function distanceFromHqInBlocks(num){
    
    if (num > 42)
         return num - 42;
     else (num < 42)
         return 42 - num;
 }
 function distanceFromHqInFeet(num){
    distanceFromHqInBlocks(num)
      return distanceFromHqInBlocks(num) * 264
}

function distanceTravelledInFeet(start, destination) {
    if(start > destination){
        return (start - destination) * 264
    }else{
        return (destination - start) * 264
    }
}

function caluatesFarePrice(start, destination){
        if(start > destination){
            if (((start - destination) * 264) > 400 )
                console.log ('your ride is free' );      
        }else if(s < destination > 2001){
        console.log (distanceTravelledInFeet() * .02)
    }
    else (2000 < destination > 2500 ); {
        console.log( '25 dollars' );       
    }
}
