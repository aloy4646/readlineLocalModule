const rl = require('./app.js');

const validator = require("validator")

function pertanyaan(listPertanyaan, index, mapVariable){
    rl.question(listPertanyaan[index], (data) =>{
        if(!apakahValid(listPertanyaan[index], data)){
            console.log("Format tidak sesuai, silahkan coba lagi\n");
            pertanyaan(listPertanyaan, index, mapVariable)
        }else{
            setMapValue(listPertanyaan[index], mapVariable, data)
            if(listPertanyaan.length > index+1){
                index = index + 1
                pertanyaan(listPertanyaan, index, mapVariable)
            }else{
                console.log("===========================\n" + 
                    "Berikut ini adalah data diri anda\n" + 
                    "Nama: " + mapVariable.get("nama") +
                    "\nNomor handphone: " + mapVariable.get("nomorHandphone") +
                    "\nEmail: " + mapVariable.get("email"))
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

function setMapValue(pertanyaan, mapVariable, data){
    if(pertanyaan == "Siapa nama anda? "){
        mapVariable.set("nama", data)
    }

    if(pertanyaan == "Berapa nomor handphone anda? "){
        mapVariable.set("nomorHandphone", data)
    }

    if(pertanyaan == "Apa nama email anda? "){
        mapVariable.set("email", data)
    } 
}

module.exports = pertanyaan