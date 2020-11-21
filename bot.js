const FB = require('fb').default;
const fs = require('fs');
let { config, frame } = require('./config.json');


const FrameBot = async (start, finish) => {
    if (start > finish) {
        return;
    }
    setTimeout(() => {

        FB.setAccessToken(config.token);
        console.log(`Mengupload ${start} dari ${finish} foto dengan total 305 Frame!`);
        FB.options({ version: 'v9.0' });
        FB.api('/me/photos', 'POST', { source: fs.createReadStream(config.dir + start + frame.format), message: `Frame ${start} dari 405 Frame` }, async (res) => {
            if (!res || res.error) {
                console.log(!res ? 'error occurred' : res.error);
                return;
            }
            console.log('Berhasil terupload!\nPost ID: ' + res.post_id);
            await fs.unlinkSync(config.dir + start + frame.format);
        });
        FrameBot(start + 1, finish);
    }, frame.duration);
}

module.exports = FrameBot;

