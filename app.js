const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

module.exports = rl
const pertanyaan = require('./tanya.js');

var listPertanyaan = ["Siapa nama anda? ", "Berapa nomor handphone anda? ", "Apa nama email anda? "]
var mapVariable = new Map()

pertanyaan(listPertanyaan, 0, mapVariable)