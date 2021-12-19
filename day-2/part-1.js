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

        const result = { ...accumulator };

        if (direction === FORWARD) {
            result[HORIZONTAL] = result[HORIZONTAL] + value;
        } else {
            result[DEPTH] =
                direction === UP ? result[DEPTH] - value : result[DEPTH] + value;
        }

        return result;
    },
    {
        [HORIZONTAL]: 0,
        [DEPTH]: 0,
    }
);

console.log({ answer: horizontal * depth });
