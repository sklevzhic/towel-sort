
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newArr = [];


    if (matrix === undefined) {
        return []
    }
    matrix.forEach((el, i) => {
        if (i % 2 !== 0) {
            newArr.push(el.reverse())
        } else {
            newArr.push(el)
        }
    });


    return newArr.flat()

}
