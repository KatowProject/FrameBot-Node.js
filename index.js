const fs = require('fs');
const cron = require('node-cron');
const { frameBot, arrayChunk } = require('./bot.js');
let { config, frame } = require('./config.json');
let times = config.schedule;

console.log('Bot akan memulai upload ' + (times.hours || 0) + ' jam ' + (times.minutes || 0) + ' menit ');

cron.schedule(`*/${times.minutes} */${times.hours} * * *`, () => {
    fs.readdir(config.dir, async (err, photo) => {
        let array = [];
        photo.forEach(a => {
            array.push(parseInt(a.replace(frame.format, '')));
        })
        array = arrayChunk(array, frame.times);
        console.log(`Ditemukan ${photo.length} Foto, akan mengupload ${array.length} Foto kemudian menghapusnya`);
        await frameBot(array);

    });
})
