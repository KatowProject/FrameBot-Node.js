const { getVideoDurationInSeconds } = require('get-video-duration');
const extractFrames = require('ffmpeg-extract-frames');
const { config, frame } = require('./config.json');

// From a local path...
getVideoDurationInSeconds(config.video).then(async dur => {
    let array = [];
    let durLength = Math.floor(dur * 1000);

    for (let i = 0; i < durLength; i += 500) {
        array.push(i);
    }

    await extract(array);
})
async function extract(array) {

    await extractFrames({
        input: config.video,
        output: './assets/temp/%i' + frame.format,
        offsets: array
    })
}