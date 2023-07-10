// Code your solution in this file!

const hqLocation = 42;
const blockLengthInFeet = 264;

function distanceFromHqInBlocks(street) {
    return(Math.abs(street - hqLocation));
}

function distanceFromHqInFeet(street) {
    return(distanceFromHqInBlocks(street) * blockLengthInFeet);
}

function distanceTravelledInFeet(origin, destination) {
    return(Math.abs(destination - origin) * blockLengthInFeet);
}

function calculatesFarePrice(origin, destination) {
    const rideLength = distanceTravelledInFeet(origin, destination);
    if (rideLength < 400) {
        return 0;
    }
    else if (rideLength > 2500) {
        return 'cannot travel that far';
    }
    else if (rideLength > 2000 && rideLength < 2500) {
        return 25;
    }
    else {
        return (rideLength - 400) * 0.02;
    }
}