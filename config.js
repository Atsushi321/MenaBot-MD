import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { load } from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.owner = [
['5493873655135', 'MBMD • PRINCIPAL', true], //no cambiar.
['51947454367'], //Pon tu numero aqui.
];
global.mods = [];
global.prems = [];
global.mods = [];
global.isBaileysFail = true;
global.baileys = '@whiskeysockets/baileys';
global.packname = 'MenaBot';
global.author = 'Atsushi';
global.creditoss = 'MBMD'
global.botNumberCode = "";
global.confirmCode = "";
global.official = [
['5493873655135', 'MBMD • PRINCIPAL', 1],
['5493873655168', 'MBMD • AI', 1]
];
global.multiplier = 60;
global.img = 'https://qu.ax/TdWdo.jpg';
global.img2 = 'https://qu.ax/QtptS.jpg';
global.img3 = 'https://qu.ax/ocKmv.jpg';
global.img4 = 'https://qu.ax/SHwpM.jpg';
global.img5 = 'https://qu.ax/hhRhu.jpg';

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.bold.greenBright('Se ha actualizado config.js con exito.'))
import(`${file}?update=${Date.now()}`)
})
