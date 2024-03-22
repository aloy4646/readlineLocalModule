const validator = require("validator")
const pertanyaan = require('./tanyaMetode2')

const validationConfig = {
    "Siapa nama anda? ": (data, validator) => validator.isAlpha(data),
    "Berapa nomor handphone anda? ": (data, validator) => validator.isMobilePhone(data, "id-ID"),
    // "Apa nama email anda? ": (data, validator) => validator.isEmail(data)
    "Berapa umur anda? ": (data, validator) => validator.isNumeric(data),

}

pertanyaan(validationConfig, 0, [], validator, (jawaban) => {
    console.log("===========================\n" +
        "Berikut ini adalah data diri anda\n" +
        "Nama: " + jawaban[0] +
        "\nNomor handphone: " + jawaban[1] +
        // "\nEmail: " + jawaban[2])
        "\nUmur: " + jawaban[2])
})