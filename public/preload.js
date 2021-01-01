console.log('Preloading')

const { Titlebar, Color } = require('custom-electron-titlebar')

window.addEventListener('DOMContentLoaded', () => {
    console.log('Creating titlebar')

    new Titlebar({
        backgroundColor: Color.fromHex('#262626')
    });
})