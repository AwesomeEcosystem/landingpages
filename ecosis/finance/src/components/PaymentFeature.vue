<template>
    <div class="row">
        <div v-for="item in items" :key="item.id" class="col-lg-6 col-md-12 mb-25 wow move-up">
            <div class="ht-service-box--three">
                <div class="service-box-wrap">
                    <div class="image__media">
                        <img :src="item.icon" class="img-fluid" alt="Icon">
                    </div>
                    <div class="content">
                        <h5 class="heading font-weight--light">{{ item.heading }}</h5>
                        <div class="service_text">{{ item.text }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PaymentFeature',
        data (){
            return {
                items: [
                    // {
                    //     icon: require('../assets/img/icons/aeroland-payment-box-icon-01.png'),
                    //      heading:'Simple order submit',
                    //     text:'Consider this app a platform for connecting people from everywhere based on their preferences.'
                    // },
                    {
                        icon: require('../assets/img/icons/aeroland-payment-box-icon-02.png'),
                        heading:'Payment Gateway',
                        text:'Use it with Paypal, Revolut, Bitcoin and more.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-payment-box-icon-03.png'),
                        heading:'Hassle-free payment',
                        text:'As easy as Paypal with more benefits.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-payment-box-icon-04.png'),
                        heading:'Digital Wallet',
                        text:'Manage your budget and analyze your performance.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-payment-box-icon-05.png'),
                        heading:'Secure',
                        text:'All your funds are managed by crypographical keys.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-payment-box-icon-06.png'),
                        heading:'Investment',
                        text:'Liquidity Providing and Lending enabled for extra profits on top of ecosis Network rewards.'
                    },
                ]
            }
        }
    }
</script>
