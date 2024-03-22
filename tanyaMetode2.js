const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function pertanyaan(validationConfig, index, arrayJawaban, validator, callback) {
    const pertanyaanKeys = Object.keys(validationConfig)
    if (index >= pertanyaanKeys.length) {
        rl.close()
        callback(arrayJawaban)
        return
    }

    const currentPertanyaan = pertanyaanKeys[index]

    rl.question(currentPertanyaan, (data) => {
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