<template>
    <div class="row pricing-table-two">
        <div class="pricing-table pricing-table--popular wow move-up">
            <div class="pricing-table__inner">
                <div class="pricing-table__header">
                    <div class="pricing-table__image">
                        <img src="../assets/img/pricing/aeroland-pricing-image-05.png" class="img-fluid">
                    </div>
                    <h5 class="pricing-table__title">Exchange</h5>
                </div>
                <div class="pricing-table__body">

                  <iframe id='iframe-widget' src='https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=true&amount=5000&amountFiat=1500&backgroundColor=FFFFFF&darkMode=false&from=usdcmatic&fromFiat=eur&horizontal=false&isFiat&lang=en-US&link_id=f4121a58c9de5d&locales=true&logo=false&primaryColor=5E61E7&to=btc&toFiat=eth&toTheMoon=true' style="height: 356px; width: 100%; border: none"></iframe>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Exchange',
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js')
      document.head.appendChild(recaptchaScript)
    },
    }
</script>
