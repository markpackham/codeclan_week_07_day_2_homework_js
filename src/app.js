import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      currency: 0,
      amount: 1,
      currencyFromEuro: 0,
      currencyToEuro: 0,
    },
    computed: {
      convertFromEuro: function () {
        return parseFloat(this.amount * this.currencyFromEuro).toFixed(2);
      },
      convertToEuro: function () {
        if (this.currencyToEuro != 0) {
          return parseFloat(this.amount / this.currencyToEuro).toFixed(2);
        }
      },
    },
    mounted() {
      this.getCurrencies();
      this.doubler();
    },
    methods: {
      getCurrencies: function () {
        fetch("https://api.exchangeratesapi.io/latest")
          .then((res) => res.json())
          .then((currencies) => (this.currencies = currencies.rates));
      },
    },
  });
});
