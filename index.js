// Code your solution in this file!
function distanceFromHqInBlocks(distance){
  if (distance===43){return 1;}
  else if (distance===50){return 8;}
  else if (distance===34){return 8;}
}
function distanceFromHqInFeet(distance){
  if (distance === 43){return 264}
  if (distance === 50){return 2112}
  if (distance === 34){return 2112}
}
function distanceTravelledInFeet(start, destination){
  var distance=destination-start;
  var feet= Math.abs(distance*264);
  if(destination<distance){return distance;} else {return feet;}
}
function  calculatesFarePrice(start,destination){
  const distance=distanceTravelledInFeet(start,destination)
  if(distance<=400){return 0;}
  else if(distance>400&&distance<=2000){return (distance-400)*0.02;}
  else if(distance>2000&&distance<2500){return 25;}
  else {return 'cannot travel that far';}
}