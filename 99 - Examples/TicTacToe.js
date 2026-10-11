import { createInterface } from 'node:readline/promises'

const createTicTacToe = () => {
    const players = Object.freeze({
        X: 'X',
        O: 'O'
    })
    const winPatterns = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]],
    ]
    const initialBoard = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
    ]
    let board = structuredClone(initialBoard)
    let currentPlayer = players.X
    return {
        players,
        getCurrentPlayer: () => currentPlayer,
        swapCurrentPlayer: () => currentPlayer = currentPlayer == players.X
            ? players.O
            : players.X,
        reset: () => {
            board = structuredClone(initialBoard)
            currentPlayer = players.X
        },
        render: () => {
            console.log(board[0][0], '|', board[0][1], '|', board[0][2])
            console.log(board[1][0], '|', board[1][1], '|', board[1][2])
            console.log(board[2][0], '|', board[2][1], '|', board[2][2])
        },
        play: (player, position) => {
            if (!Number.isInteger(parseInt(position))) {
                return false
            }
            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board[i].length; j++) {
                    if (board[i][j] === position.toString()) {
                        board[i][j] = player
                        return true
                    }
                }
            }
            return false
        },
        isVictory: player => {
            for (const pattern of winPatterns) {
                const [row1, col1] = pattern[0]
                const [row2, col2] = pattern[1]
                const [row3, col3] = pattern[2]
                if (board[row1][col1] === player
                    && board[row1][col1] === board[row2][col2]
                    && board[row2][col2] === board[row3][col3]) {
                    return true;
                }
            }
            return false
        },
        isTicTacToe: () => {
            for (const row of board) {
                for (const col of row) {
                    if (col !== players.X && col !== players.O) {
                        return false
                    }
                }
            }
            return true
        }
    }
}

try {
    const rl = createInterface(process.stdin, process.stdout)
    const game = createTicTacToe()
    while (true) {
        while (true) {
            while (true) {
                game.render()
                const position = await rl.question(
                    `Enter a board position (Player ${game.getCurrentPlayer()}): `
                )
                const ok = game.play(game.getCurrentPlayer(), position)
                if (ok) {
                    break
                }
                console.log('Invalid position:', position)
            }
            if (game.isVictory(game.getCurrentPlayer())) {
                game.render()
                console.log('Player', game.getCurrentPlayer(), 'won!')
                break
            }
            if (game.isTicTacToe()) {
                game.render()
                console.log('Tic Tac Toe!')
                break
            }
            game.swapCurrentPlayer()
        }
        const again = await rl.question('Play again (y/n)? ')
        if (again !== 'y') {
            rl.close()
            break
        }
        game.reset()
    }
} catch (err) {
    if (err.code === 'ABORT_ERR') {
        console.log('\nAborted')
        process.exit(0)
    }
    throw err
}
