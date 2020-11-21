# FrameBot-Node.js

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
        "dir": "./assets/temp", //dir frames
        "video": "./assets/example.mp4", //video
        "schedule": "* * * * *", //scedule
        "token": "insert token" // fb token
    },
    "frame": {
        "times": "5", //frame length for upload to Facebook
        "duration": "30000", //upload times per frame
        "format": ".jpg" //format frame
    }
}
```

### Example schedule configuration
> click this <a href="https://www.npmjs.com/package/node-cron" target="_blank">redirect</a>
