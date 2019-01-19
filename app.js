const span = document.getElementById("live");

setInterval(usdPrice,60000);
setInterval(eurPrice,60000);

const usd = new Usd;
const eur = new Eur;
const ui = new Ui;

function usdPrice() {
    usd.usdPrice( function(err, USD) {
            if(err === null) {
                ui.writeUsd(USD);
            }
        }
    );
};
function eurPrice() {
    eur.eurPrice( function(err, EUR) {
            if(err === null) {
                ui.writeEur(EUR);
            }
        }
    );
};

usdPrice();
eurPrice();
