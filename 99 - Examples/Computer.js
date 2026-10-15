const NAND_TRUTH_TABLE = {
    '00': 1,
    '01': 1,
    '10': 1,
    '11': 0
}

// 1 Bit Gates
const nand = (a, b) => Reflect.get(NAND_TRUTH_TABLE, a + '' + b)
const and = (a, b) => nand(nand(a, b), nand(a, b))
const or = (a, b) => nand(nand(a, a), nand(b, b))
const nor = (a, b) => nand(nand(nand(a, a), nand(b, b)), nand(nand(a, a), nand(b, b)))
const xor = (a, b) => nand(nand(a, nand(a, b)), nand(b, nand(a, b)))
const xnor = (a, b) => nand(nand(nand(a, a), nand(b, b)), nand(a, b))
const not = a => nand(a, a)

// Encoder & Decoder
const encoder = (bits) => parseInt(bits.join(''), 2)
const decoder = (byte) => byte.toString(2).padStart(8, '0').split('').map(char => parseInt(char))

// 8 Bit Gates
const nand8 = (a, b) => {
    const [a7, a6, a5, a4, a3, a2, a1, a0] = decoder(a)
    const [b7, b6, b5, b4, b3, b2, b1, b0] = decoder(b)
    const [c7, c6, c5, c4, c3, c2, c1, c0] = [
        nand(a7, b7), nand(a6, b6), nand(a5, b5), nand(a4, b4),
        nand(a3, b3), nand(a2, b2), nand(a1, b1), nand(a0, b0)
    ]
    return encoder([c7, c6, c5, c4, c3, c2, c1, c0])
}
const and8 = (a, b) => nand8(nand8(a, b), nand8(a, b))
const or8 = (a, b) => nand8(nand8(a, a), nand8(b, b))
const nor8 = (a, b) => nand8(nand8(nand8(a, a), nand8(b, b)), nand8(nand8(a, a), nand8(b, b)))
const xor8 = (a, b) => nand8(nand8(a, nand8(a, b)), nand8(b, nand8(a, b)))
const xnor8 = (a, b) => nand8(nand8(nand8(a, a), nand8(b, b)), nand8(a, b))
const not8 = a => nand8(a, a)

// Flip Flops
const createLatchD = () => {
    let value = 0

}
