<template>
  <div class="py-24">
    <div class="w-full">
      <h2>Avax Address</h2>
      <p>Before you can buy Bend with Paypal, you need to provide your Avalanche C-Chain-Address</p>
      <input class="bg-transparent w-auto p-2 text-4xl text-center border-b border-white" v-model="avaxAddress" placeholder="0x...">
    </div>
    <div class="w-full flex flex-col justify-center items-center">
      <div class="w-full md:w-1/3 flex justify-center items-center p-4 border-b border-white mx-24 md:mx-32">
        <input class="bg-transparent w-auto p-2 text-4xl text-center"
        v-model="nativeAmount"
        type="number" min="0"
        placeholder="Amount">
        <select class="bg-blue-500 text-white px-2 py-4 rounded-full" v-model="currency">
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
        </select>
      </div>
    </div>
    <!-- <img class="w-12 m-2" src="~/assets/logos/avalanche.png" alt=""> -->
    <div class="w-full py-8">
      <p>You will receive</p>
      <div class="flex w-full justify-center items-center">
        <p>{{ numberWithCommas(stake) }}</p>
        <img class="w-12 m-2" src="~/assets/logos/bend_logo.png" alt="">
      </div>
    </div>
    <button class="bg-white btn text-gray-900 flex items-center" @click="buy()" v-if="!buying">Buy</button>
    <PayPalButton :on-approve="onApprove" :create-order="createOrder"  v-if="buying"/>
    <div class="w-auto p-4 bg-green-500 rounded-lg my-8" v-if="finallyBought">
      Congratulations, you bought {{ numberWithCommas(finallyBought) }} Bend
    </div>
  </div>
</template>

<script>

export default {
  props: {
    Moralis: Function,
    Buyer: Function,
    Sale: Function,
    bought: Number
  },
  data() {
    return {
      connected: false,
      finalized: false,
      finallyBought: 0,
      paypal: false,
      buying: false,
      web3: {},
      account: {},
      Vault: {},
      currency: 'USD',
      memo: '',
      price: 0,
      rate: 300000,
      supply: 4800000000,
      nativeAmount: 0,
      avaxAddress: '',
      successfullyBought: false
    }
  },
  async created() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=avalanche-2&vs_currencies=usd');
    console.log(response.body);
  },
  methods: {
    isLigit() {
      if (!this.nativeAmount) {
        alert('Enter Amount to buy/pay');
        return false;
      }
      if (!this.avaxAddress) {
        alert('Enter Avalanche C-Chain-Address (starting with 0x...)');
        return false;
      }
      if (!this.avaxAddress.startsWith('0x')) {
        alert('Enter Avalanche C-Chain-Address (starting with 0x...)')
        return false;
      }
      if (this.avaxAddress.length !== 42) {
        alert('Avalanche Wallet Address starting with 0x has a length of 42 character')
        return false;
      }
      const available = this.supply - this.bought;
      const amount = this.nativeAmount * this.rate;
      if (amount > available) {
        alert('Amount needs to be lower than left Bend');
        return false;
      }
      return true
    },
    buy() {
      if (this.isLigit()) {
        this.buying = true;
        // this.startBuy()
      }
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
    async startBuy() {
      const amount = this.nativeAmount * this.rate;

      const buyer = new this.Buyer();
      buyer.set('address', this.avaxAddress);
      buyer.set('amount', amount.toString());

      const query = new this.Moralis.Query(this.Sale);
      const res = await query.get('IummsrvpW2KLkW2x0QFXbVHT');
      const bought = Number(res.get('bought'));
      const totalBought = bought + amount;
      await res.set('bought', totalBought.toString())

      await res.save()
      await buyer.save();
    }
  },
  computed: {
    createOrder: function () {
      return (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                // currency_code: this.currency,
                value: this.nativeAmount,
              },
              invoice_id: `Wallet: ${this.avaxAddress} | Amount: ${this.nativeAmount * this.rate}`
            },
          ],
        });
      }
    },
    onApprove: function () {
        return async (data, actions) => {
          alert(data);
          await this.startBuy();
          this.successfullyBought = true;
          this.finallyBought = this.nativeAmount * this.rate;
          this.nativeAmount = 0;
          return actions.order.capture();
        }
    },
    stake() {
      return this.nativeAmount * this.rate
    },
  }
} // 203784000
</script>

<style lang="css" scoped>
</style>
