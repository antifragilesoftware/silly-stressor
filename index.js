const uuidv4 = require('uuid/v4');

let stressorParameters = {};

if (process.env.stressor) {
    stressorParameters = JSON.parse(process.env.stressor);
}

const event = {
    id : uuidv4(),
    name : "silly-stressor",
    timestamp : new Date(),
    payload : {
        parameters : stressorParameters,
    },
}

console.log(JSON.stringify(event))