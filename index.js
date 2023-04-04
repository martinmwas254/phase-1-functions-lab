const hq = 42;

function distanceFromHqInBlocks(block) {
  let distanceHq = block - hq;

  return Math.abs(distanceHq);
}

function distanceFromHqInFeet(distance) {
  const blockInFeet = 264;
  let distanceInFeet = (distance - 42) * blockInFeet;
  return Math.abs(distanceInFeet);
}
console.log(distanceFromHqInFeet(45));

function distanceTravelledInFeet(startBlock, endBlock) {
  const blockInFeet = 264;
  let distanceInFeet = (endBlock - startBlock) * blockInFeet;
  return Math.abs(distanceInFeet);
}
console.log(distanceTravelledInFeet(43, 48));

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let fare;

  if (distance <= 400) {
    fare = 0;
  } else if (distance <= 2000) {
    fare = (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    fare = 25;
  } else {
    return "cannot travel that far";
  }

  return fare;
}
