<template>
  <div class="w-full">
    <h1>Bend Sale Vault</h1>
    <div class="w-full" v-if="!finalized">
      <p>Buy the Bend Token with Avax out of the Soft Launch Presale Vault.</p>
      <p class="font-italic">New Hot Price with 10x Bonus for all contributors!</p>
      <h2 class="font-bold">{{ numberWithCommas(rate) }} Bend/Avax</h2>
      <p>{{ numberWithCommas(leftBend) }} Bend left for sale</p>
      <div class="w-full">
        <button class="btn hot" @click="" v-if="!connected && !finalized" @click="connect()">
          Connect
        </button>
      </div>
    </div>
    <div class="w-full flex flex-col" v-if="finalized">
    <div class="flex flex-col justify-center items-center w-full text-center py-8">
    <p class="font-italic">Final Sale Vault opens soon!</p>
      <CountDown date="Fri 3 June 2022"/>
    </div>
      <p>Bend Token PreSale ended! Liquidity Pool will be listed here.</p>
      <div class="flex flex-wrap justify-center items-center py-16">
        <div class="w-full">
          <h1>Presale Result</h1>
        </div>
        <div class="m-4">
          <h3>Sold</h3>
          <div class="flex">
            <h2 class="font-bold">{{ numberWithCommas(bought) }}</h2><img src="~/assets/logos/bend_logo.png" class=" m-2 w-8 h-8" alt="Bend">
          </div>
        </div>
        <div class="m-4">
          <h3>Redistributed</h3>
          <div class="flex">
            <h2 class="font-bold">{{ numberWithCommas(54565000) }}</h2><img src="~/assets/logos/bend_logo.png" class=" m-2 w-8 h-8" alt="Bend">
          </div>
        </div>
        <div class="m-4">
          <h3>Burned</h3>
          <div class="flex">
            <h2 class="font-bold">{{ numberWithCommas(2160529500) }}</h2><img src="~/assets/logos/bend_logo.png" class=" m-2 w-8 h-8" alt="Bend">
          </div>
        </div>
      </div>
      <p class="italic">Tokens are distributed to all contributors. Redistribution after sale to all investors additionally to bought amount.</p>
      <p>Add the Bend token to your Metamask (Only Desktop) or open ecosis Native One Wallet (Desktop and Mobile)</p>
      <div class="w-full hidden md:block">
        <div class="w-full flex justify-center py-4">
          <img src="~/assets/logos/metamask.png" class="w-32">
        </div>
        <button class="btn hot" @click="addTokenToMetamask()">
          Add Bend to Metamask
        </button>
      </div>
      <div class="w-full flex justify-center py-4">
        <img src="~/assets/logos/one_logo.png" class="w-32">
      </div>
      <a class="btn hot" href="https://one.ecosis.network" target="_blank">
        Open <b>One</b> Wallet
      </a>
      <div class="w-full pt-16">
        <h2>Special Give-aways</h2>
        <p>Stay tuned for upcoming Discount Sales with Extras and additional Airdrops!</p>
        <div class="flex justify-center w-full">
          <a
            class="mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-2 py-4 px-2 flex items-center"
            href="https://www.linkedin.com/company/ecosiss/"
            target="_blank"
            >
            <Linkedin class="mr-4"/>
          </a>
          <a
            class="mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-2 py-4 px-2 flex items-center"
            href="https://discord.gg/9xejeEcH3N"
            target="_blank"
            >
            <Discord class="mr-4"/>
          </a>
          <a
            class="mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-2 py-4 px-2 flex items-center"
            href="https://t.co/kCfN6RJKr5"
            target="_blank"
            >
            <Telegram class="mr-4"/>
          </a>
          <a
            class="mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-2 py-4 px-2 flex items-center"
            href="https://twitter.com/ecosisnetwork"
            target="_blank"
            >
            <Twitter class="mr-4"/>
          </a>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col justify-center items-center" v-if="connected && !finalized">
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
          <CountDown :date="new Date('2022-05-23 20:00')"/>
        </div>
      </div>
      <div class="w-full pt-12">
        <button class="btn hot" @click="buy()" v-if="!finalized">
          Buy
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Moralis from 'moralis'

import Discord from '~/assets/logos/discord.svg'
import Telegram from '~/assets/logos/telegram.svg'
import Linkedin from '~/assets/logos/linkedin.svg'
import Twitter from '~/assets/logos/twitter.svg'

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
      finalized: true,
      web3: {},
      account: {},
      Vault: {},
      rate: 10000000,
      supply: 2400000000,
      nativeAmount: 0,
      bought: 0
    }
  },
  async mounted() {
    try {
      Moralis.enableWeb3();

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
    async addTokenToMetamask() {
      const tokenAddress = '0x3160591776e34C319F2Ad28Ba8c1F4829adc3907';
      const tokenSymbol = 'Bend';
      const tokenDecimals = 3;
      const tokenImage = 'https://ecosis.network/_nuxt/img/bend_logo.8387551.png';

      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0xa86a' }], // chainId must be in hexadecimal numbers
        });

        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await window.ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20', // Initially only supports ERC20, but eventually more!
            options: {
              address: tokenAddress, // The address that the token is at.
              symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
              decimals: tokenDecimals, // The number of decimals in the token
              image: tokenImage, // A string url of the token logo
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    async connect() {
      try {
        let user = await Moralis.authenticate();
        // Moralis.switchNetwork("0xa869")
        Moralis.switchNetwork("0xa86a")

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
  },
  components: {
    Discord,
    Telegram,
    Linkedin,
    Twitter
  }
}
</script>

<style lang="css" scoped>
</style>
