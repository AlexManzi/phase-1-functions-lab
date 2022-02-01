const hq = 42

function distanceFromHqInBlocks(blocks) {
    if (hq < blocks) {
        return blocks - hq
    } else (hq > blocks) 
        return hq - blocks 
    }

const blockManhattan = 264

function distanceFromHqInFeet(blocks) {
    if (hq < blocks) {
        return ((blocks - hq) * blockManhattan);
    } else {
        return ((hq - blocks) * blockManhattan);
}
}

function distanceTravelledInFeet(start, stop) {
    if (stop > start) {
        return ((stop - start) * 264)
    } 
    if (start > stop) {
        return ((stop - start) * -264)
    }
}
function calculatesFarePrice(start, destination) {
    let distance = 0
    if (start > destination) {
        distance = (start - destination) * 264
    } else {
        distance = (destination - start) * 264
    }
    if (distance <= 400) {
        return 0 
    }
    if (distance > 400 && distance <= 2000) {
        return (distance - 400) * .02 
    }
    if (distance > 2000 && distance <= 2500) {
        return 25
    }
    if (distance > 2500) {
        return 'cannot travel that far'
    }

}
