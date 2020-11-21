const cron = require('node-cron');
const fs = require('fs');
const FrameBot = require('./bot.js');
let { config, frame } = require('./config.json');

if (!config.dir.endsWith('/')) {
    config.dir = config.dir + '/';
}

cron.schedule(config.schedule, async () => {

    //scan nama file dan jumlah file
    fs.readdir(config.dir, async (err, photo) => {
        let array = [];
        photo.forEach(a => {
            array.push(parseInt(a.replace(frame.format, '')));
        })
        array = array.sort((a, b) => a - b);
        console.log(`Ditemukan ${photo.length} Foto, akan mengupload 5 Foto kemudian menghapusnya! setelah itu bot akan kembali istirahat selama 30 menit`);
        await FrameBot(array[0], array[frame.times - 1] ? array[frame.times - 1] : array[array.length]);

    });
});