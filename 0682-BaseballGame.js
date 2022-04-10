/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    let record = ops.reduce((board, op, index) => {
        let lastIndex = board.length
        switch (op) {
            case '+':
                console.log(board[lastIndex - 1]);
                board.push(board[lastIndex - 1] + board[lastIndex - 2]);
                break;
            case 'D':
                board.push(board[lastIndex - 1] * 2);
                break;
            case 'C':
                board.pop();
                break;
            default:
                board.push(Number(op));
                break;
        }
        return board;
    }, []);

    return record.reduce((acc, item) => acc + item, 0);
};
