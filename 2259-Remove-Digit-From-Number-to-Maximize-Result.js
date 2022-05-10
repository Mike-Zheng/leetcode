/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
    let numberList = number.split('');
    let length = numberList.length;
    let waitDelete = 0;
    for (let i = 0; i < length; i++) {
        if (numberList[i] == digit) {
            if (i < length - 1 && Number(numberList[i + 1]) > Number(numberList[i])) {
                waitDelete = i;
                break;
            }
            waitDelete = i;
        }
    }
    return numberList.filter((item, index) => index != waitDelete).join('');
};
