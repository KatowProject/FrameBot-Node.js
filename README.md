# FrameBot-Node.js
<img src="https://cdn.discordapp.com/attachments/496983030993518592/781482735897542666/126317587_1046185755884637_3169277377187790580_o.png">
## Instalasi
1. Install Node.js
2. ketik `npm install` di console
3. edit file `config.json` untuk konfigurasi bot dan frame
4. jika ingin menggunakan yarn ketik `yarn install`
5. ketik `node index.js` untuk menjalankan botnya!

## Example Configuration
```js
{
    "config": {
        /* Frames location */
        "dir": "./assets/temp",
        /*Video Location*/
        "video": "./assets/example.mp4",
        /*shedule, empty it if not needed*/
        "schedule": {
            "hours": "",
            "minutes": "
        },
        /*FB Token*/
        "token": "insert token"
    },
    "frame": {
        /*total frames you want to send*/
        "times": "5",
        /*upload times per frame*/
        "duration": "30000",
        /*frame format*/
        "format": ".jpg"
    }
}
```

### Example schedule configuration
> click this <a href="https://www.npmjs.com/package/node-cron" target="_blank">redirect</a>
