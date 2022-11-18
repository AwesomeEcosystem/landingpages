<template>
    <div class="app-showcase-process-step__three section-space--pt_60">
        <div class="row">
            <div class="col-lg-6">
                <div class="app-showcase-process-step__media text-center wow move-up">
                    <img src="../assets/img/screenshots/dev_mobile_shop.png" class="img-fluid" style="width: 50%">
                </div>
            </div>
            <div class="col-lg-5 offset-lg-1">
                <div class="app-showcase-process-step__content section-space--pt_90">
                    <div class="app-showcase__inner">
                        <div class="sub__title mb-20">
                            <h6 class="font-weight--blod wow move-up">{{ subtitle }}</h6>
                        </div>
                        <h4 class="font-weight--light wow move-up">{{ title }}</h4>
                        <div class="sub-text section-space--mb_40 wow move-up">
                            {{ desc }}
                        </div>
                        <div class="btn-sowcase section-space--mb_40 wow move-up">
                            <a href="#" class="ht-btn ht-btn-md">Request</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'CreativeAppDisplay',
        data(){
            return {
                subtitle: "03 - Checkout",
                title: "Make Payments",
                desc: "Go shopping and make payents with your rewards or share with your friends and family."
            }
        }
    };
</script>

<style lang="scss">

</style>
