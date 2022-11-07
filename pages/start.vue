<template>
  <div class="py-24">
    <div
      class="h-full md:px-64 flex flex-wrap justify-around items-center w-full"
    >
      <!--Left Col-->
      <div
        class="flex flex-col w-full md:w-2/5 justify-center items-center md:items-start text-center md:text-right"
      >
        <div class="flex flex-col justify-center">
          <h2 class="my-4 font-normal">
            User Traffic Generated Revenues
          </h2>
          <h1 class="font-bold">
            are redistributed by our revolutionary rewards mechanism!
          </h1>
        </div>
      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 p-6 text-center flex justify-center items-center">
        <img class="w-full md:flex-1" src="~/assets/imgs/network.png" alt="">
      </div>
    </div>

    <Wave align="top" color="#fff"/>
    <div class="bg-white text-gray-900 pb-12">
      <div class="text-center py-8">
        <h1>How it works</h1>
      </div>
      <div class="container mx-auto flex flex-wrap justify-center items-center tetx-center pb-12">
        <div class="w-full md:flex-1 flex p-4">
          <div class="flex justify-center items-center p-4 h-24">
            <Credit class="w-24"/>
          </div>
          <div class="">
            <h3>Deposit Money</h3>
            <p>and hold this deposit for upcoming rewards.</p>
          </div>
        </div>
        <div class="w-full md:flex-1 flex p-4">
          <div class="flex justify-center items-center p-4 h-24">
            <Chart class="w-24"/>
          </div>
          <div class="">
            <h3>Get rewarded</h3>
            <p>from the redistribution of fees.</p>
          </div>
        </div>
        <div class="w-full md:flex-1 flex p-4">
          <div class="flex justify-center items-center p-4 h-24">
            <Spending class="w-24"/>
          </div>
          <div class="">
            <h3>Make Payments</h3>
            <p>or share your funds with friends and family.</p>
          </div>
        </div>
      </div>
    </div>
    <Wave align="bottom" color="#fff"/>

    <div class="flex flex-wrap justify-center items-center text-center">
      <div class="py-24">
        <h2>Purchasing Power to the People!</h2>
        <p>Make your money work for you</p>
      </div>
    </div>

    <Wave align="top" color="#fff" id="getstarted"/>
    <div class="bg-white text-gray-900">
      <div class="text-center py-8">
        <h1>Get Started</h1>
      </div>
      <div class="container mx-auto">

        <!-- Left -->
        <div class="flex flex-wrap justify-right w-full sm:flex-row">
          <div class="flex flex-wrap w-full md:w-1/2 p-6 mt-6">
            <div class="flex flex-wrap justify-center items-center text-center">
              <div class="flex justify-center items-center w-full my-8">
                <img class="md:w-1/3"src="~/assets/logos/one_logo.png"/>
              </div>
              <h3 class="w-full text-3xl font-bold leading-none mb-3">Eco</h3>
              <p>The wallet to receive rewards</p>
              <div class="w-full flex flex-wrap justify-center items-center pb-8">
                <a class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg" href="https://kcha60ohz1u.typeform.com/to/ShJeY8a2" target="_blank">
                  Request
                </a>
              </div>
            </div>
          </div>
          <div class="h-auto flex justify-right items-center w-full md:w-1/2 p-6 mt-6">
            <div class="align-middle text-center md:text-left">
              <h3 class="text-3xl font-bold leading-none mb-3">
                Open an Account in the Eco Wallet App
              </h3>
              <p class="mb-8 h-auto">
                Simply open the app, and create a free account!
              </p>
            </div>
          </div>
        </div>

        <!-- Right -->
        <div class="flex flex-wrap flex-col-reverse md:flex-row w-full my-16 h-auto justify-left items-center md:text-right">
          <div class="w-full md:w-1/2 p-6 text-center md:text-right">
            <h3 class="text-3xl font-bold leading-none mb-3">
              Deposit Money
            </h3>
            <p class="mb-8">
              Simply deposit some funds from your bank account - Paypal or Revolut. You will see all your funds instantly. No hidden fees. We have a money back guarantee!
            </p>
          </div>
          <div class="flex flex-wrap w-full md:w-1/2 p-6 mt-6">
            <div class="flex justify-center md:justify-start w-full mx-8">
              <img src="~/assets/imgs/screenshots/screen_deposit.png" alt="">
            </div>
          </div>
        </div>

        <!-- Left -->
        <div class="flex flex-wrap justify-right w-full sm:flex-row">
          <div class="flex flex-wrap w-full md:w-1/2 p-6 mt-6">
            <div class="flex justify-center md:justify-end w-full mx-8">
              <img src="~/assets/imgs/screenshots/ecophone1.png" alt="">
            </div>
          </div>
          <div class="h-auto flex justify-right items-center w-full md:w-1/2 p-6 mt-6">
            <div class="align-middle text-center md:text-left">
              <h3 class="text-3xl font-bold leading-none mb-3">
                Get rewarded!
              </h3>
              <p class="mb-8 h-auto">
                Receive your passive rewards weekly!
              </p>
            </div>
          </div>
        </div>

        <!-- Right -->
        <div class="flex flex-wrap flex-col-reverse md:flex-row w-full py-16 h-auto justify-left items-center md:text-right">
          <div class="w-full md:w-1/2 p-6 text-center md:text-right">
            <h3 class="text-3xl font-bold leading-none mb-3">
              Go shopping
            </h3>
            <p class="mb-8">
              Go to our shopping partners and make payments directly from your wallet.
            </p>
          </div>
          <div class="flex flex-wrap w-full md:w-1/2 p-6 mt-6">
            <div class="flex justify-center md:justify-start w-full mx-8">
              <img src="~/assets/imgs/screenshots/checkout.png" alt="">
            </div>
          </div>
        </div>

        <!-- Left -->
        <div class="flex flex-wrap justify-right w-full sm:flex-row">
          <div class="flex flex-wrap w-full md:w-1/2 p-6 mt-6">
            <div class="flex justify-center md:justify-end w-full mx-8">
              <img src="~/assets/imgs/screenshots/ecosendFund.png" alt="">
            </div>
          </div>
          <div class="h-auto flex justify-right items-center w-full md:w-1/2 p-6 mt-6">
            <div class="align-middle text-center md:text-left">
              <h3 class="text-3xl font-bold leading-none mb-3">
                Send Funds
              </h3>
              <p class="mb-8 h-auto">
                Payments without borders! Transfer some funds to your friends and family globally.
              </p>
            </div>
          </div>
        </div>

      </div>


      <div class="w-full pt-8 text-center">
        <h1
          class="w-full my-2 text-5xl font-bold leading-tight text-center"
        >
          Join Today
        </h1>
        <div class="w-full mb-4">
          <div
            class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>

        <h3 class="my-4 text-3xl leading-tight">
          and earn Passive Income!
        </h3>
        <div class="w-full flex justify-center text-gray-800">
          <Caret class="w-12 h-12"/>
        </div>
        <div class="flex w-full justify-center py-8">
          <a class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full py-4 px-8 shadow-lg" href="https://kcha60ohz1u.typeform.com/to/ShJeY8a2" target="_blank">
            Request
          </a>
        </div>
      </div>
    </div>
    <Wave align="bottom" color="#fff"/>

    <div class="w-full flex flex-wrap justify-center text-center">
      <div class="w-full text-center pt-12">
        <h3>You have your own Business?</h3>
        <h2>Become a Partner!</h2>
      </div>
      <div class="flex w-full justify-center">
        <a
          class="w-auto hover:underline hot text-white font-bold rounded-full py-4 px-8 shadow-lg flex items-center text-center" href="mailto:contact@ecosis.network">
          Contact Us!
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Wave from '@/components/Wave'

import Credit from '@/assets/svg/credit-card-solid.svg'
import Chart from '@/assets/svg/chart-line-solid.svg'
import Spending from '@/assets/svg/hand-holding-dollar-solid.svg'
import Caret from '@/assets/svg/caret-down-solid.svg'

export default {
  components: {
    Wave,
    Credit,
    Chart,
    Spending,
    Caret
  }
}
</script>

<style lang="css" scoped>
</style>
