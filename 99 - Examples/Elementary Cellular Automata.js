// @ts-check

class ElementaryCellularAutomataError extends Error { }

/**
 * @typedef {Object} Rule
 * @property {boolean} b000 000
 * @property {boolean} b001 001
 * @property {boolean} b010 010
 * @property {boolean} b011 011
 * @property {boolean} b100 100
 * @property {boolean} b101 101
 * @property {boolean} b110 110
 * @property {boolean} b111 111
 * @property {(left: boolean, middle: boolean, right: boolean) => boolean} isAlive Check if cell is alive.
 */

/**
 * @typedef {Object} ElementaryCellularAutomata
 * @property {() => void} reset
 * @property {(rule: Rule) => void} process
 * @property {(writer: (data: string) => void) => void} render
 * @property {(row: number, col: number, alive: boolean) => void} setCell
 * @property {(alive: string, dead: string) => void} setSymbols
 */

/**
 * Create rule.
 * @param {boolean} b000 The 000 result.
 * @param {boolean} b001 The 001 result.
 * @param {boolean} b010 The 010 result.
 * @param {boolean} b011 The 011 result.
 * @param {boolean} b100 The 100 result.
 * @param {boolean} b101 The 101 result.
 * @param {boolean} b110 The 110 result.
 * @param {boolean} b111 The 111 result.
 * @returns {Rule} Rule instance.
 */
const createRule = (b000, b001, b010, b011, b100, b101, b110, b111) => {
    const map = { b000, b001, b010, b011, b100, b101, b110, b111 }

    /**
     * Check if cell is alive based on the rule.
     * @param {boolean} left The left bit.
     * @param {boolean} middle The middle bit.
     * @param {boolean} right The right bit.
     * @returns {boolean} True if cell is alive based on the rule.
     */
    const isAlive = (left, middle, right) => {
        const leftBit = left ? '1' : '0'
        const middleBit = middle ? '1' : '0'
        const rightBit = right ? '1' : '0'
        return Reflect.get(map, 'b' + leftBit + middleBit + rightBit)
    }

    return {
        ...map,
        isAlive
    }
}

/**
 * Decodifies a rule number into bits.
 * @param {number} n Rule number.
 * @returns {Rule} Rule.
 */
const parseRule = n => {
    if (!Number.isInteger(n) || n < 0 || n >= 256) {
        throw new ElementaryCellularAutomataError('Invalid rule number: ' + n)
    }
    const binaryRepr = n.toString(2).padStart(8, '0')
    return createRule(
        binaryRepr[7] === '1',
        binaryRepr[6] === '1',
        binaryRepr[5] === '1',
        binaryRepr[4] === '1',
        binaryRepr[3] === '1',
        binaryRepr[2] === '1',
        binaryRepr[1] === '1',
        binaryRepr[0] === '1',
    )
}

/**
 * Create a new ElementaryCellularAutomata.
 * @param {number} width The grid width.
 * @param {number} height The grid height.
 * @returns {ElementaryCellularAutomata} A ElementaryCellularAutomata instance.
 */
const createElementaryCellularAutomata = (width, height) => {
    /**
     * The grid to process generation.
     * @type {boolean[][]}
     */
    let grid = []

    /**
     * Cell symbols.
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
     * Reset grid.
     */
    const reset = () => {
        grid = []
        for (let row = 0; row < height; row++) {
            const line = []
            for (let col = 0; col < width; col++) {
                line.push(false)
            }
            grid.push(line)
        }
    }

    /**
     * Check if coords are valid.
     * @param {number} row The row number.
     * @param {number} col The col number.
     * @returns {boolean} True if coords are valid.
     */
    const isValidCoords = (row, col) => row >= 0 && row < height && col >= 0 && col < width

    /**
     * Process celluar automata based on the rule.
     * @param {Rule} rule The rule to be used as base.
     */
    const process = rule => {
        for (let row = 1; row < height; row++) {
            for (let col = 0; col < width; col++) {
                const [left, middle, right] = getTopCellsState(row, col)
                const alive = rule.isAlive(left, middle, right)
                grid[row][col] = alive
            }
        }
    }

    /**
     * Render the result.
     * @param {(data: string) => void} writer the writer.
     */
    const render = writer => {
        for (let row = 0; row < height; row++) {
            let line = ''
            for (let col = 0; col < width; col++) {
                line += grid[row][col] ? symbols.alive : symbols.dead
            }
            writer(line)
        }
    }

    /**
     * Get top cells state.
     * @param {number} row The row number.
     * @param {number} col The col number.
     * @returns {[boolean, boolean, boolean]} Top cells state.
     */
    const getTopCellsState = (row, col) => {
        const left = isValidCoords(row - 1, col - 1) ? grid[row - 1][col - 1] : false
        const middle = isValidCoords(row - 1, col) ? grid[row - 1][col] : false
        const right = isValidCoords(row - 1, col + 1) ? grid[row - 1][col + 1] : false
        return [left, middle, right]
    }

    /**
     * Set cell state.
     * @param {number} row The row number.
     * @param {number} col The col number.
     * @param {boolean} alive True if alive.
     */
    const setCell = (row, col, alive) => {
        if (!isValidCoords(row, col)) {
            throw new ElementaryCellularAutomataError(`Invalid coords: ${row}/${col}`)
        }
        grid[row][col] = alive
    }

    reset()

    return {
        reset,
        process,
        render,
        setCell,
        setSymbols
    }
}

const game = createElementaryCellularAutomata(80, 30)
const rule = parseRule(30)
game.setCell(0, 40, true)
game.process(rule)
game.render(console.log)
