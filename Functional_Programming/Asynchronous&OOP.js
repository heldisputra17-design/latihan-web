//Asyncrhoronus Janji 
var isMomHappy = true

var willIGetNewPhone = new Promise (
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: "Samsung",
                tipe: "S25 Pro",
                color: "Black",
                harga: "Rp20000000"
            };
            resolve(phone);
        } else {
            var reason = new Error('mom is not happy')
            reject(reason);
        }    
    }

)

function askMom() {
    willIGetNewPhone
        .then(function (terpenuhi) {
            console.log(terpenuhi);
        })
        .catch(function (error) {
            console.log(error.message);
        });
}

askMom()
                                                     