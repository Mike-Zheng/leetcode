/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {


    var symbol = [
        ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        ['', 'M', 'MM', 'MMM']

    ]

    let output = ""
    let digit = 0
    while (num > 0) {
        let val = num % 10

        output = symbol[digit][val] + output
        num = Math.floor(num / 10)
        digit++

    }

    return output

};