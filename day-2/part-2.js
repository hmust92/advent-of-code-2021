const input = require("./input");

const FORWARD = "forward";
const DOWN = "down";
const UP = "up";
const HORIZONTAL = "horizontal";
const DEPTH = "depth";
const AIM = "aim";

const { [HORIZONTAL]: horizontal, [DEPTH]: depth } = input.reduce(
    (accumulator, data, index, originalList) => {
        const direction = data.split(" ")[0];
        const value = Number(data.split(" ")[1]);

        const result = { ...accumulator };

        if (direction === UP || direction === DOWN) {
            result[AIM] =
                direction === UP ? result[AIM] - value : result[AIM] + value;
            return result;
        }

        result[HORIZONTAL] = result[HORIZONTAL] + value;
        result[DEPTH] = result[DEPTH] + result[AIM] * value;

        return result;
    },
    {
        [HORIZONTAL]: 0,
        [DEPTH]: 0,
        [AIM]: 0,
    }
);

console.log({ answer: horizontal * depth });
