// @ts-check

/**
 * @typedef {Object} Rule
 * @property {string} keep Neighbor counts required for a live cell to survive.
 * @property {string} born Neighbor counts required for a dead cell to become alive.
 */

/**
 * @typedef {Object} GameOfLife
 * @property {() => void} reset Reset game to the start.
 * @property {(write: (data: string) => void) => void} render Render grid to console.
 * @property {(row: number, col: number, alive: boolean) => void} setCell Set cell state in position.
 * @property {(alive: string, dead: string) => void} setCellSymbols Set cell symbols for rendering.
 * @property {(rule: Rule) => void} nextGeneration Process generation based on a rule.
 */

export class GameOfLifeError extends Error { }

/**
 * Create a rule object based on a notation.
 * @param {string} notation The rule notation as <keep>/<born> (ex: 23/3, /2, etc.)
 * @throws {GameOfLifeError} If the notation is invalid.
 * @returns {Rule} A rule object.
 */
export const parseRule = notation => {
    const parts = notation.split('/')
    if (parts.length !== 2) {
        throw new GameOfLifeError('Invalid notation: ' + notation)
    }
    const [keep, born] = parts
    return {
        keep, born
    }
}

/**
 * Create a GameOfLife object.
 * @param {number} width The grid width.
 * @param {number} height The grid height.
 * @returns {GameOfLife} A GameOfLife object.
 */
export const createGameOfLife = (width, height) => {
    /**
     * Grid to set buffered generation result.
     * @type {boolean[][]}
     */
    let grid = []

    /**
     * Buffer to process generations.
     * @type {boolean[][]}
     */
    let buffer = []

    /**
     * The cell symbols for rendering.
     */
    const symbols = {
        alive: '*',
        dead: ' '
    }

    /**
     * Set symbols for rendering.
     * @param {string} alive The alive symbol.
     * @param {string} dead The dead symbol.
     */
    const setSymbols = (alive = '*', dead = ' ') => {
        symbols.alive = alive
        symbols.dead = dead
    }

    /**
     * Reset game.
     */
    const reset = () => {
        for (let row = 0; row < height; row++) {
            const line = []
            for (let col = 0; col < width; col++) {
                line.push(false)
            }
            grid.push(line)
        }
        buffer = structuredClone(grid)
    }

    /**
     * Reutrn the alive neighbors count.
     * @param {number} row The row number.
     * @param {number} col The col number.
     * @returns {number} alive neighbors.
     */
    const getAliveNeighborsCount = (row, col) => {
        let count = 0
        count += isAlive(row - 1, col - 1) ? 1 : 0
        count += isAlive(row - 1, col - 0) ? 1 : 0
        count += isAlive(row - 1, col + 1) ? 1 : 0
        count += isAlive(row + 0, col - 1) ? 1 : 0
        count += isAlive(row + 0, col + 1) ? 1 : 0
        count += isAlive(row + 1, col - 1) ? 1 : 0
        count += isAlive(row + 1, col - 0) ? 1 : 0
        count += isAlive(row + 1, col + 1) ? 1 : 0
        return count
    }

    /**
     * Check if cell is alive.
     * @param {number} row The row number.
     * @param {number} col The col number.
     * @returns {boolean} True if cell is alive at position.
     */
    const isAlive = (row, col) => {
        if (!isValidCoords(row, col)) {
            return false
        }
        return grid[row][col]
    }

    /**
     * Check if coords aren't out of bounds.
     * @param {number} row The row number.
     * @param {number} col The col number.
     * @returns {boolean} True if coords are valid.
     */
    const isValidCoords = (row, col) => row >= 0 && row < height && col >= 0 && col < width

    /**
     * Render grid to console.
     * @param {(data: string) => void} writer The writer function.
     */
    const render = writer => {
        for (let row = 0; row < height; row++) {
            let line = ''
            for (let col = 0; col < width; col++) {
                const isAlive = grid[row][col]
                line += isAlive ? symbols.alive : symbols.dead
            }
            writer(line)
        }
    }

    /**
     * Set cell state in position.
     * @param {number} row The row number.
     * @param {number} col The col number.
     * @param {boolean} alive True if alive.
     */
    const setCell = (row, col, alive) => {
        if (!isValidCoords(row, col)) {
            throw new GameOfLifeError(`Invalid row/col: ${row}/${col}`)
        }
        grid[row][col] = alive
    }

    /**
     * Process next generation.
     * @param {Rule} rule The rule to be used as base.
     */
    const nextGeneration = rule => {
        for (let row = 0; row < height; row++) {
            for (let col = 0; col < width; col++) {
                const aliveCount = getAliveNeighborsCount(row, col)
                if (rule.born.includes(aliveCount.toString())) {
                    buffer[row][col] = true
                } else if (rule.keep.includes(aliveCount.toString())) {
                    buffer[row][col] = grid[row][col]
                } else {
                    buffer[row][col] = false
                }
            }
        }
        grid = structuredClone(buffer)
    }

    reset()

    return {
        reset,
        render,
        setCell,
        setCellSymbols: setSymbols,
        nextGeneration
    }
}

/**
 * Rule pre-defined notations.
 * @enum {string}
 * @readonly
 */
export const Notations = Object.freeze({
    GOL: '23/3',
    HIGH_LIFE: '23/36',
    ASSIMILATION: '4567/345',
    TWO_X_TWO: '125/36',
    DAY_AND_NIGHT: '34578/3678',
    AMOEBA: '1358/357',
    MOVE: '245/368',
    PSEUDO_LIFE: '238/357',
    DI_AMOEBA: '5678/35678',
    THREE_FOUR: '34/34',
    LONG_LIFE: '5/345',
    STAINS: '235678/3678',
    SEEDS: '/2',
    MAZE: '12345/3',
    COAGULATION: '235678/378',
    WALLED_CITIES: '2345/45678',
    GNARL: '1/1',
    REPLICATOR: '1357/1357',
    MYSTERY: '05678/3458'
})

const game = createGameOfLife(80, 20)
const offsetRows = 8;
const offsetCols = 35;
game.setCell(0 + offsetRows, 1 + offsetCols, true);
game.setCell(1 + offsetRows, 3 + offsetCols, true);
game.setCell(2 + offsetRows, 0 + offsetCols, true);
game.setCell(2 + offsetRows, 1 + offsetCols, true);
game.setCell(2 + offsetRows, 4 + offsetCols, true);
game.setCell(2 + offsetRows, 5 + offsetCols, true);
game.setCell(2 + offsetRows, 6 + offsetCols, true);

const rule = parseRule(Notations.GOL)
const maxGenerationCount = 1000
const renderDelay = 100

let currentGeneration = 0
const interval = setInterval(() => {
    console.clear();
    game.nextGeneration(rule)
    game.render(console.log)
    currentGeneration++
    if (currentGeneration == maxGenerationCount) {
        clearInterval(interval)
    }
}, renderDelay)
