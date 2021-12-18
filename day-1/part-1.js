const depths = require("./input");

const numberOfLargerMeasurements = depths.reduce(
    (accumulator, depth, index, depths) =>
        index > 0 && depth > depths[index - 1] ? accumulator + 1 : accumulator,
    0
);

console.log({ numberOfLargerMeasurements });
