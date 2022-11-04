// Code your solution in this file!
// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    return Math.abs(distance - 42)
}


function distanceFromHqInFeet(distance) {

    return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(start, destination) {

    return (Math.abs(destination - start)) * 264
}

function calculatesFarePrice(start, destination) {

    const calDistance = distanceTravelledInFeet(start, destination)

    if (calDistance < 400) {
        return 0
    } else if ( calDistance >= 400 && calDistance <= 2000 ) {
        return (calDistance - 400) * 0.02
    } else if (calDistance >= 2000 && calDistance < 2500) {
        return 25
    } else if (calDistance >=2500) {
        return "cannot travel that far"
    }
}