function distanceFromHqInBlocks (block) {
    let headQuarters = 42;

     if (block > 42) {
    return block - headQuarters;
}
    if (block < 42) {
    return headQuarters - block;
}
}

function distanceFromHqInFeet(distance){
    let blocks = distanceFromHqInBlocks (distance);

    return blocks*264;
}

function distanceTravelledInFeet(start, destination) {

    const distance = Math.abs(destination - start) * 264;
    return distance;
}

function calculatesFarePrice(start, destination) {

      const distance = distanceTravelledInFeet(start, destination);
      
        if (distance <= 400) {
         
          return 0;
        } else if (distance > 2500) {
         
          return "cannot travel that far";
        } else if (distance <= 2000) {
         
          const fare = (distance - 400) * 0.02;
          return fare;
        } else {
         
          return 25;
        }
      }
     
      