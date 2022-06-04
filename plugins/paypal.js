import Vue from 'vue'
import { loadScript } from '@paypal/paypal-js'

const init = async () => {
  try {
    paypal = await loadScript({ "client-id": "sb" });
    const PayPalButton = paypal.Buttons.driver("vue", Vue);
    Vue.component('PayPalButton', PayPalButton)
  } catch (error) {
    console.log(error);
  }
}

init()
