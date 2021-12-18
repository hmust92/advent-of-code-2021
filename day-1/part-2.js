const depths = require("./input");

const { numberOfLargerSums } = depths.reduce(
    (accumulator, depth, index, depths) => {
        if (index === depths.length - 1 || index === depths.length - 2) {
            return accumulator;
        }

        const result = { ...accumulator };
        const sum = depth + depths[index + 1] + depths[index + 2];
        result.sums.push(sum);
        if (
            index > 0 &&
            sum > result.sums[result.sums.length - 2]
        ) {
            result.numberOfLargerSums += 1;
        }
        return result;
    },
    { numberOfLargerSums: 0, sums: [] }
);

console.log({ numberOfLargerSums });
