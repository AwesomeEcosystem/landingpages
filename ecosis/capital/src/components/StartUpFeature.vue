<template>
    <div class="start-ups-feature-wrap">
        <div class="modern-grid center">
            <div v-for="iconbox in iconboxs" :key="iconbox.id" class="ht-box-icon style-02 wow move-up">
              <div class="icon-box-wrap">
                <div class="icon react" :class="{'java':iconbox.java, 'macos':iconbox.macos, 'window':iconbox.window, 'amazon':iconbox.amazon, 'shopify':iconbox.shopify}">
                  <i :class="iconbox.icon"></i>
                </div>
                <div class="content">
                  <h6 class="heading">{{ iconbox.heading }}</h6>
                </div>
              </div>
            </div>
        </div>

        <div class="section-title text-center section-space--mt_60">
            <span class="section-text wow move-up">Upcoming Integrations</span>
        </div>

        <div class="modern-grid center">
            <div v-for="iconbox in upcoming" :key="iconbox.id" class="ht-box-icon style-02 wow move-up">
              <div class="icon-box-wrap">
                <div class="icon react" :class="{'java':iconbox.java, 'macos':iconbox.macos, 'window':iconbox.window, 'amazon':iconbox.amazon, 'shopify':iconbox.shopify}">
                  <i :class="iconbox.icon"></i>
                </div>
                <div class="content">
                  <h6 class="heading">{{ iconbox.heading }}</h6>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'StartUpFeature',
        data (){
            return {
                iconboxs: [
                    {
                        icon: 'fab fa-shopify',
                        heading: 'Shopify',
                        shopify: true
                    },
                    {
                        icon: 'fab fa-paypal',
                        heading: 'Paypal',
                        paypal:true
                    },
                    {
                        icon: 'fab fa-revolut',
                        heading: 'Revolut',
                        macos:true
                    },
                ],
                upcoming: [
                    {
                        icon: 'fab fa-ethereum',
                        heading: 'Ethereum',
                        java:true
                    },
                    {
                        icon: 'fab fa-bitcoin',
                        heading: 'Bitcoin',
                        amazon:true
                    },
                    {
                        icon: 'fab fa-amazon',
                        heading: 'Amazon',
                        amazon:false
                    },
                ]
            }
        }
    }
</script>
