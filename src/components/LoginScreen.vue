<template>
    <div class="app-showcase-process-step__one">
        <div class="row">
            <div class="col-lg-5 col-md-5">
                <div class="app-showcase-process-step__media text-center wow move-up">
                    <img :src="img" class="img-fluid" style="width: 50%">
                </div>
            </div>
            <div class="col-lg-7 col-md-7">
                <div class="app-showcase-process-step__content section-space--mt_40">
                    <div class="app-showcase__inner">
                        <div class="sub__title mb-20 wow move-up">
                            <h6 class="font-weight--blod">{{ subtitle }}</h6>
                        </div>
                        <h4 class="font-weight--light wow move-up">{{ title }}</h4>
                        <div class="sub-text section-space--mb_40  wow move-up">
                            {{ desc }}
                        </div>
                        <div class="btn-sowcase section-space--mb_40 wow move-up">
                            <a href="https://kcha60ohz1u.typeform.com/to/ShJeY8a2" target="_blank" class="ht-btn ht-btn-md">Request</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'LoginScreen',
        data (){
            return {
                img: require("../assets/img/screenshots/dev_mobile_login.png"),
                subtitle: "01 – Create Account",
                title: "Register",
                desc: "Simply create an account and access the dashboard for free."
            }
        }
    };
</script>
