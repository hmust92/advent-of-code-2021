const input = require("./input");

const FORWARD = "forward";
const DOWN = "down";
const UP = "up";
const HORIZONTAL = "horizontal";
const DEPTH = "depth";

const { [HORIZONTAL]: horizontal, [DEPTH]: depth } = input.reduce(
    (accumulator, data, index, originalList) => {
        const direction = data.split(" ")[0];
        const value = Number(data.split(" ")[1]);
        const type = direction === FORWARD ? HORIZONTAL : DEPTH;

        const result = { ...accumulator };

        if (type === HORIZONTAL) {
            result[type] = result[type] + value;
        } else {
            result[type] =
                direction === UP ? result[type] - value : result[type] + value;
        }

        return result;
    },
    {
        [HORIZONTAL]: 0,
        [DEPTH]: 0,
    }
);

console.log({ answer: horizontal * depth });
