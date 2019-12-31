// Your code here
function mapToNegativize(srcArr) {
    let negArray = srcArr.map((num) => num*-1 );
    return negArray;
}

function mapToNoChange(srcArr) {
    let regArr = srcArr.map((num) => {return num})
    return regArr;
}

function mapToDouble(srcArr) {
    let doubled = srcArr.map((n) => n*2);
    return doubled;
}

function mapToSquare(srcArr) {
    let squared = srcArr.map((n) => n**2);
    return squared;
}

function reduceToTotal(srcArr, startingPoint=0) {
    let total = srcArr.reduce((acc, cv) => {return acc + cv}, startingPoint)
    return total;
} 

function reduceToAllTrue(srcArr) {
    let boo = srcArr.reduce((acc, cv) => { return acc + Boolean(cv) }, 0);
    return boo == srcArr.length ? true : false;
}

function reduceToAnyTrue(srcArr) {
    let boo = srcArr.reduce((acc, cv) => { return acc + Boolean(cv) }, 0);
    return boo > 0 ? true : false;
}
