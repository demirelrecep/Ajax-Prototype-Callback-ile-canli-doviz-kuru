//Euro için yapılan ajax işlemleri
function Eur (){
    this.xhr = new XMLHttpRequest;
}

Eur.prototype.eurPrice = function(callback) {
    const endpoint = "https://api.exchangeratesapi.io/latest?base=EUR";
    this.xhr.open("GET",endpoint);
    this.xhr.onload = () => {
        if(this.xhr.status === 200) {
            const json = JSON.parse(this.xhr.responseText);
            const TRY = json.rates.TRY;
            callback(null,TRY.toFixed(2)); //Euro kurunun virgülden sonraki değeri 2'ye düşürülüyor.
        }
        else {
            callback("Bir hata oluştu", null);
        }
    };
    this.xhr.send();
};

