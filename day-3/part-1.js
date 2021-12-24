const input = require('./input');

const data = input.reduce((accumulator, value, index, list) => {
    const result = { ...accumulator };

    for (let i = 0; i < value.length; i++) {
        const previous0Count =
            (result[`bit-${i + 1}`] &&
                result[`bit-${i + 1}`].counts &&
                result[`bit-${i + 1}`] &&
                result[`bit-${i + 1}`].counts[0]) ||
            0;
        const previous1Count =
            (result[`bit-${i + 1}`] &&
                result[`bit-${i + 1}`].counts &&
                result[`bit-${i + 1}`] &&
                result[`bit-${i + 1}`].counts[1]) ||
            0;
        const current0Count =
            value[i] === "0" ? previous0Count + 1 : previous0Count;
        const current1Count =
            value[i] === "1" ? previous1Count + 1 : previous1Count;
        const common = current0Count > current1Count ? "0" : "1";
        result[`bit-${i + 1}`] = {
            counts: [current0Count, current1Count],
            common,
        };
    }

    return result;
}, {});

const gammaRate = Object.values(data)
    .map(({ common }) => common)
    .join("");
const epsilonRate = gammaRate
    .split("")
    .map((value) => (value === "1" ? "0" : "1"))
    .join("");

console.log({ result: parseInt(gammaRate, 2) * parseInt(epsilonRate, 2) });
