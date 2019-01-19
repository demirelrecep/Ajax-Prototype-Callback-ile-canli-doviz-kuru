//Usd için yapılan ajax işlemleri
function Usd (){
    this.xhr = new XMLHttpRequest;
}

Usd.prototype.usdPrice = function(callback) {
    const endpoint = "https://api.exchangeratesapi.io/latest?base=USD";
    this.xhr.open("GET",endpoint);
    this.xhr.onload = () => {
        if(this.xhr.status === 200) {
            const json = JSON.parse(this.xhr.responseText);
            const TRY = json.rates.TRY;
            callback(null,TRY.toFixed(2)); //Dolar kurunun virgülden sonraki değeri 2'ye düşürülüyor.
        }
        else {
            callback("Bir hata oluştu", null);
        }
    };
    this.xhr.send();
};

