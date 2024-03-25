const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function pertanyaan(validationConfig, index, arrayJawaban, validator, callback) {
    //mengambil keys dari validationConfig (pertanyaan) menjadi sebuah array
    const kumpulanPertanyaan = Object.keys(validationConfig)
    if (index >= kumpulanPertanyaan.length) {
        rl.close()
        callback(arrayJawaban)
        return
    }

    //mengambil pertanyaan sesuai index
    const currentPertanyaan = kumpulanPertanyaan[index]

    rl.question(currentPertanyaan, (data) => {
        //validasi jawaban menggunakan validator yang berada di validationConfig menggunakan pertanyaan sebagai key
        const apakahValid = validationConfig[currentPertanyaan](data, validator)
        if (!apakahValid) {
            console.log("Format tidak sesuai, silahkan coba lagi\n")
            pertanyaan(validationConfig, index, arrayJawaban, validator, callback)
        } else {
            arrayJawaban.push(data)
            pertanyaan(validationConfig, index + 1, arrayJawaban, validator, callback)
        }
    })
}

module.exports = pertanyaan