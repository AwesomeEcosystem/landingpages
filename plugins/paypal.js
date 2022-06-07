import Vue from 'vue'
import { loadScript } from '@paypal/paypal-js'

const init = async () => {
  try {
    paypal = await loadScript({ "client-id": "AX1lJd60YfYz_u2UbOPHICBujSAEsyB0pW23TuLfKPXZypU3mH2oc6QxAZ-Amt7Jk0qwtae1CVl7fDCb" });
    // paypal = await loadScript({ "client-id": "sb" });
    const PayPalButton = paypal.Buttons.driver("vue", Vue);
    Vue.component('PayPalButton', PayPalButton)
  } catch (error) {
    console.log(error);
  }
}

init()
