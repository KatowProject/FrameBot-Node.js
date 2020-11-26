const FB = require('fb').default;
const fs = require('fs');
let { config, frame } = require('./config.json');

if (!config.dir.endsWith('/')) {
    config.dir = config.dir + '/';
};

const frameBot = (picture, i = 0) => {
    setTimeout(() => {
        if (picture[i] === undefined) return;
        console.log(`Mengupload ${picture[i]} dari ${picture[picture.length - 1]} foto dengan total 305 Frame!`);

        FB.setAccessToken(config.token);
        FB.options({ version: 'v9.0' });
        FB.api('/me/photos', 'POST', { source: fs.createReadStream(config.dir + picture[i] + frame.format), message: `Frame ${picture[i]} dari 405 Frame` }, async (res) => {
            if (!res || res.error) {
                console.log(!res ? 'error occurred' : res.error);
                process.exit(0);
            }
            console.log('Berhasil terupload!\nPost ID: ' + res.post_id);
            await fs.unlinkSync(config.dir + picture[i] + frame.format);
        });

        frameBot(picture, i + 1);
    }, frame.duration)

}

const arrayChunk = (array, chunkSize) => {
    let temp = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        temp.push(array.slice(i, i + chunkSize));
    }
    return temp[0];
};
module.exports = { frameBot, arrayChunk };