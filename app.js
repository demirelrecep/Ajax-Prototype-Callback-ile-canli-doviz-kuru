setInterval(usdPrice,60000); //usdPrice fonksiyonu 60 saniyede bir çalışır
setInterval(eurPrice,60000); //eurPrice fonksiyonu 60 saniyede bir çalışır

const usd = new Usd; //Usd için yapılan ajax işlemleri
const eur = new Eur; //Euro için yapılan ajax işlemleri
const ui = new Ui;

function usdPrice() {
    usd.usdPrice( function(err, USD) {
            if(err === null) {
                ui.writeUsd(USD);
            }
            else{
                console.log("Bir hata oluştu");
            }
        }
    );
};

function eurPrice() {
    eur.eurPrice( function(err, EUR) {
            if(err === null) {
                ui.writeEur(EUR);
            }
            else{
                console.log("Bir hata oluştu");
            }
        }
    );
};

//Sayfa yüklendiğinde 60 saniye beklememek için burada fonksiyonlar 1 kere çalıştırılıyor.
usdPrice(); 
eurPrice();
