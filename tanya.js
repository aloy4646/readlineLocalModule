const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const validator = require("validator")

function pertanyaan(listPertanyaan, index, arrayJawaban){
    rl.question(listPertanyaan[index], (data) =>{
        if(!apakahValid(listPertanyaan[index], data)){
            console.log("Format tidak sesuai, silahkan coba lagi\n");
            pertanyaan(listPertanyaan, index, arrayJawaban)
        }else{
            arrayJawaban.push(data)
            if(listPertanyaan.length > index+1){
                index = index + 1
                pertanyaan(listPertanyaan, index, arrayJawaban)
            }else{
                console.log("===========================\n" + 
                    "Berikut ini adalah data diri anda\n" + 
                    "Nama: " + arrayJawaban[0] +
                    "\nNomor handphone: " + arrayJawaban[1] +
                    "\nEmail: " + arrayJawaban[2])
                rl.close()
                return
            }
        }
    })
}

function apakahValid(pertanyaan, data){
    if(pertanyaan == "Siapa nama anda? "){
        return validator.isAlpha(data)
    }

    if(pertanyaan == "Berapa nomor handphone anda? "){
        return validator.isMobilePhone(data, "id-ID")
    }

    if(pertanyaan == "Apa nama email anda? "){
        return validator.isEmail(data)
    }    

    return false
}

module.exports = pertanyaan