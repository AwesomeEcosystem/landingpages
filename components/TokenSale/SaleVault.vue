<template>
  <div class="w-full">
    <div class="w-full">
      <h1>Bend Sale Vault</h1>
      <p>Buy the Bend Token with Avax out of the Soft Launch Presale Vault</p>
      <h2 class="font-bold">{{ numberWithCommas(rate) }} Bend/Avax</h2>
      <p>{{ numberWithCommas(leftBend) }} Bend left for sale</p>
    </div>
    <div class="w-full">
      <button class="btn hot" @click="" v-if="!connected && !finalized" @click="connect()">
        Connect
      </button>
      <button class="btn hot" v-if="finalized">
        Sold Out!
      </button>
    </div>
    <div class="w-full flex flex-col justify-center items-center" v-if="connected">
      <div class="w-full md:w-1/3 flex justify-center items-center p-4 border-b border-white mx-24 md:mx-32">
        <input class="bg-transparent w-1/4 p-2 text-4xl text-center"
          v-model="nativeAmount"
          type="number" min="0"
          placeholder="Amount">
          <img class="w-12 m-2" src="~/assets/logos/avalanche.png" alt="">
      </div>
      <div class="w-full pt-8">
        <p>You will receive</p>
        <div class="flex w-full justify-center items-center">
          <p>{{ numberWithCommas(stake) }}</p>
          <img class="w-12 m-2" src="~/assets/logos/bend_logo.png" alt="">
        </div>
        <div class="w-full flex flex-col justify-center items-center pt-8">
          <p>Bend Token is claimable in</p>
          <CountDown :date="new Date('2022-05-20 21:00')"/>
        </div>
      </div>
      <div class="w-full pt-12">
        <button class="btn hot" @click="buy()" v-if="!finalized">
          Buy
        </button>
        <button class="btn hot" v-if="finalized">
          Sold Out!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Moralis from 'moralis'

/* Moralis init code */
const serverUrl = "https://yzixmn7rbnkf.usemoralis.com:2053/server";
const appId = "gJuKDA01bw0r5Y7h84IS90bnMHUOr4j8lsLJGOlG";
Moralis.start({ serverUrl, appId });

// Simple syntax to create a new subclass of Moralis.Object.
const Sale = Moralis.Object.extend("Sale");

// Create a new instance of that class.
const sale = new Sale();

export default {
  data() {
    return {
      connected: false,
      finalized: false,
      web3: {},
      account: {},
      Vault: {},
      rate: 1000000,
      supply: 2400000000,
      nativeAmount: 0,
      bought: 0
    }
  },
  async mounted() {
    try {
      // Moralis.enableWeb3();
      console.log(Moralis);

      const query = new Moralis.Query(Sale)
      const res = await query.get('IummsrvpW2KLkW2x0QFXbVHT')
      const bought = res.get('bought')
      this.bought = bought

      if (bought >= this.supply) {
        this.finalized = true
      }

    } catch (e) {
      console.log(e)
    }

  },
  methods: {
    async connect() {
      try {
        let user = await Moralis.authenticate();
        // Moralis.switchNetwork("0xa869")
        Moralis.switchNetwork("0xa86a")

        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
        this.account = user
        this.connected = true

        const query = new Moralis.Query(Sale)
        const res = await query.get('IummsrvpW2KLkW2x0QFXbVHT')
        const bought = res.get('bought')
        this.bought = bought
      } catch (e) {
        console.log(e)
        alert(e.data.message || e)
      }
    },
    async rate() {
      try {
      } catch (e) {
        alert(e)
      }
    },
    async buy() {
      try {
        const amount = this.nativeAmount * this.rate;

        const isAllowed = () => {
          if (this.nativeAmount > 0) {
            const available = this.supply - this.bought
            console.log(available);
            if (amount <= available) {
              return true
            } else {
              alert('Avax Amount needs to be lower than Available')
              return false
            }
          } else {
            alert('Avax Amount needs to be higher than 0')
            return false
          }
        }

        if (isAllowed()) {
          const options = {
            type: "native",
            amount: Moralis.Units.ETH(this.nativeAmount.toString()),
            // receiver: "0x98484b0BdBb0a12caC0cB266eD13cbC546D9928f",
            receiver: "0x813C38214799535c1375606188aD7E8Fd1762651",
          };
          let result = await Moralis.transfer(options);

          const query = new Moralis.Query(Sale)
          const res = await query.get('IummsrvpW2KLkW2x0QFXbVHT')
          const bought = Number(res.get('bought'))

          const totalBought = bought + amount;

          this.bought = totalBought;
          //
          await res.set('bought', totalBought.toString())
          await res.save()
        } else {
        }
      } catch (e) {
        console.log(e)
        alert(e.data.message || e)
      }
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  computed: {
    stake() {
      return this.nativeAmount * this.rate
    },
    leftBend() {
      return this.supply - this.bought
    }
  }
}
</script>

<style lang="css" scoped>
</style>
