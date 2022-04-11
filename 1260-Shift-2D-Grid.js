/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {

    var list = grid.flat()

    while (k--) {
        var lastOne = list.pop()
        list.unshift(lastOne)
    }




    let mm = grid.length
    let nn = grid[0].length
    let ans = []
    let cur = 0
    var inerArray = []
    while (cur < mm * nn) {


        inerArray.push(list[cur])


        if ((cur + 1) % nn == 0) {
            ans.push(inerArray)
            inerArray = []
        }


        cur++

    }

    return ans


};