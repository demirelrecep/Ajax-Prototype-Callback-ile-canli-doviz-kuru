function Ui() {
    this.usdSpan = document.getElementById("live-usd");
    this.eurSpan = document.getElementById("live-eur");
    this.usd;
    this.eur;
};

Ui.prototype.writeUsd = function(usd) {
    this.usd = usd;
    this.usdSpan.innerHTML = `Dolar = ${this.usd} TL`
};
Ui.prototype.writeEur = function(eur) {
    this.eur = eur;
    this.eurSpan.innerHTML = `Euro = ${this.eur} TL`
};

