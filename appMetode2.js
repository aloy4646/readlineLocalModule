const validator = require("validator")
const pertanyaan = require('./tanyaMetode2')
const fs = require("fs")


// membuat objek validationConfig yang berisi pertanyaan dan validator yang sesuai dengan pertanyaan tersebut
const validationConfig = {
    "Siapa nama anda? ": (data, validator) => validator.isAlpha(data),
    "Berapa nomor handphone anda? ": (data, validator) => validator.isMobilePhone(data, "id-ID"),
    "Apa nama email anda? ": (data, validator) => validator.isEmail(data)
}

pertanyaan(validationConfig, 0, [], validator, (jawaban) => {
    console.log("===========================\n" +
        "Berikut ini adalah data diri anda\n" +
        "Nama: " + jawaban[0] +
        "\nNomor handphone: " + jawaban[1] +
        "\nEmail: " + jawaban[2])

    // membuat object contact berisi nama, nomorHandphone dan email
    const contact = {nama: jawaban[0], 
                    nomorHandphone: jawaban[1], 
                    email: jawaban[2]}

    const file = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(file)
    contacts.push(contact)
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

    console.log("Terima kasih sudah memasukkan data!")
})