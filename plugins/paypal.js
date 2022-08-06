import Vue from 'vue'
import { loadScript } from '@paypal/paypal-js'

const init = async () => {
  try {
    paypal = await loadScript({ "client-id": "AZFuO7oSGcQ6ADf8AirvahO67mXkRfRafwSM37MEHhpMk40PUj-imm5cnMCiG1iqJHLovsvX1oXSarzG" });
    const PayPalButton = paypal.Buttons.driver("vue", Vue);
    Vue.component('PayPalButton', PayPalButton)
  } catch (error) {
    console.log(error)
  }
}

init()
