function knightMoves(start, end) {
    // Visited array that stores the previous square to
    // get to the current square
    let board = [];
    for(let i=0; i<8; i++) {
        const row = new Array(8).fill([]);
        board.push(row);
    }
    const dirs = [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]];
    let queue = [];
    queue.push(start);
    board[start[0]][start[1]] = "start";
    while(queue.length !== 0) {
        const curr = queue.shift();
        if(curr[0] === end[0] && curr[1] === end[1]) {
            return generatePath(end, board);
        }
        for(let dir of dirs) {
            const next = [curr[0] + dir[0], curr[1]+dir[1]];
            if(next[0] > 7) continue;
            if(next[0] < 0) continue;
            if(next[1] > 7) continue;
            if(next[1] < 0) continue;
            if(board[next[0]][next[1]].length !== 0) continue;
            board[next[0]][next[1]] = curr;
            queue.push([next[0], next[1]]);
        }
    }
}

function generatePath(curr, board) {
    let ans = [curr];
    while(board[curr[0]][curr[1]] !== "start") {
        ans.push(board[curr[0]][curr[1]]);
        curr = board[curr[0]][curr[1]];
    }
    return ans.reverse();
}

console.log(knightMoves([0,0], [2,1]));
console.log(knightMoves([0,0], [3,3]));
console.log(knightMoves([3,3], [0,0]));
console.log(knightMoves([0,0], [7,7]));
