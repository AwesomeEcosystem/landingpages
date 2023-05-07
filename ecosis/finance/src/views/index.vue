<template>
    <div class="overflow-x-hidden">
        <!-- Hero  -->
        <div class="overflow-hidden bg-black pt-[82px] sm:-mx-[250px] sm:rounded-b-[50%] lg:-mx-[150px] lg:pt-[106px]">
            <div class="relative">
                <img src="/assets/images/banner-lefticon.png" alt="banner-lefticon" class="absolute left-0 top-20 sm:left-[250px] lg:left-[150px]" />
                <img src="/assets/images/banner-rightIcon.png" alt="banner-rightIcon" class="absolute right-0 -top-4 sm:right-[250px] lg:right-[150px]" />
                <div class="container">
                    <div class="relative md:flex bg-[url('/assets/images/world-map.png')] bg-cover bg-top bg-no-repeat pt-14 pb-0 lg:pt-20 lg:pb-60 xl:pt-36">
                        <div class="relative z-[1] text-center text-white lg:w-3/5 ltr:lg:text-left rtl:lg:text-right xl:w-1/2">
                            <h2 class="text-xl font-extrabold leading-normal sm:text-5xl lg:text-[40px] lg:leading-[90px]">
                              The most <span class="italic text-primary">rewarding </span> payments <span class="italic text-secondary">experience</span>
                            </h2>
                            <p class="my-8 text-2xl lg:w-[100%]">
                              One app to Spend, Send, Save & Earn.
                            </p>
                            <div class="flex justify-center md:justify-start">
                              <div class="m-2">
                                <a href="https://ecosis.app" target="_blank" class="btn mx-auto mt-2 block w-fit bg-white lg:mx-0 lg:rtl:ml-auto px-4">Enter App</a>
                              </div>
                              <div class="m-2">
                                <router-link to="/#about" class="btn bg-transparent text-white underline mx-auto mt-2 block w-fit lg:mx-0 lg:rtl:ml-auto px-4">Learn more</router-link>
                              </div>
                            </div>
                        </div>
                        <div
                            class="mx-auto mt-5 mb-2 w-auto ltr:right-0 rtl:left-0 md:w-[540px] lg:mb-0 lg:mt-0 xl:w-[650px]"
                            :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
                            data-aos-duration="1000"
                            data-aos-offset="0"
                            data-aos-delay="300"
                        >
                            <img src="/assets/images/heroPhone.png" alt="home-banner-icon" class="rtl:rotate-y-180" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- About -->
        <section class="bg-[url(/assets/images/service-bg.png)] bg-cover bg-center bg-no-repeat py-14 dark:bg-none lg:py-[100px]" id="about">
            <div class="container">
                <div class="heading text-center">
                    <h6>Easy as A B C</h6>
                    <h4>How it works</h4>
                </div>
                <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                            style="box-shadow: -20px 30px 70px rgba(219, 222, 225, 0.4)"
                        >
                            <div
                                class="flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition group-hover:bg-black"
                                style="box-shadow: 0px 15px 30px rgba(180, 118, 229, 0.4)"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" fill="white"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
                            </div>
                            <div
                                to="/services-detail"
                                class="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black"
                                >Simple Login & Deposit
                            </div>
                            <p class="mb-16 pb-1  text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black">
                                Sign up using your social accounts and deposit money in one click.
                            </p>
                            <div
                                to="services-detail"
                                class="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                            >
                              <p class="font-semibold">
                                1
                              </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                            style="box-shadow: -20px 30px 70px rgba(219, 222, 225, 0.4)"
                        >
                            <div
                                class="flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition group-hover:bg-black"
                                style="box-shadow: 0px 15px 30px rgba(180, 118, 229, 0.4)"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="white" width="24" height="24  "><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                            </div>
                            <div
                                to="/services-detail"
                                class="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black"
                                >Shop or Send money
                            </div>
                            <p class="mb-16 pb-1 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black">
                                Select ecosis when you checkout and pay with instant settlement.
                            </p>
                            <div
                                to="services-detail"
                                class="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                            >
                              <p class="font-semibold">
                                2
                              </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                            style="box-shadow: -20px 30px 70px rgba(219, 222, 225, 0.4)"
                        >
                            <div
                                class="flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition group-hover:bg-black"
                                style="box-shadow: 0px 15px 30px rgba(180, 118, 229, 0.4)"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        opacity="0.5"
                                        d="M6.21053 20H3.05263C2.77346 20 2.50572 19.8891 2.30831 19.6917C2.1109 19.4943 2 19.2265 2 18.9474V10.5263C2 10.2471 2.1109 9.97941 2.30831 9.782C2.50572 9.58459 2.77346 9.47369 3.05263 9.47369H6.21053C6.4897 9.47369 6.75744 9.58459 6.95485 9.782C7.15226 9.97941 7.26316 10.2471 7.26316 10.5263V18.9474C7.26316 19.2265 7.15226 19.4943 6.95485 19.6917C6.75744 19.8891 6.4897 20 6.21053 20ZM20.9474 20H17.7895C17.5103 20 17.2426 19.8891 17.0452 19.6917C16.8477 19.4943 16.7368 19.2265 16.7368 18.9474V7.36843C16.7368 7.08925 16.8477 6.82151 17.0452 6.6241C17.2426 6.4267 17.5103 6.3158 17.7895 6.3158H20.9474C21.2265 6.3158 21.4943 6.4267 21.6917 6.6241C21.8891 6.82151 22 7.08925 22 7.36843V18.9474C22 19.2265 21.8891 19.4943 21.6917 19.6917C21.4943 19.8891 21.2265 20 20.9474 20Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M13.5789 20H10.421C10.1419 20 9.87412 19.8891 9.67672 19.6917C9.47931 19.4943 9.36841 19.2265 9.36841 18.9474V1.05263C9.36841 0.773456 9.47931 0.505715 9.67672 0.308309C9.87412 0.110902 10.1419 0 10.421 0H13.5789C13.8581 0 14.1259 0.110902 14.3233 0.308309C14.5207 0.505715 14.6316 0.773456 14.6316 1.05263V18.9474C14.6316 19.2265 14.5207 19.4943 14.3233 19.6917C14.1259 19.8891 13.8581 20 13.5789 20Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <div
                                class="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black"
                                >Earn Rewards
                            </div>
                            <p class="mb-10 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black">
                                Receive weekly rewards proportional to your deposit & transactions.
                            </p>
                            <div
                                to="services-detail"
                                class="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                            >
                              <p class="font-semibold">
                                3
                              </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features -->
        <section class="bg-gradient-to-b from-white/[55%] to-transparent pt-14 dark:bg-none" id="features">
            <div class="container flex flex-wrap items-center justify-center">
                <div class="lg:w-1/2">
                    <div class="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                        <h6 class="!text-secondary">The Ultimate Payments Solution</h6>
                        <h4>Why ecosis</h4>
                        <p class="mt-4 text-lg font-semibold">
                            Assured periodic returns on transactions and deposits for all users, combined with the most competitive transaction fees in the industry for businesses.
                        </p>
                    </div>
                </div>
                <img src="/assets/images/rewardingPayment.png" class="md:w-1/2 pt-4">
            </div>
        </section>

        <!-- Advantages -->
        <section class="container flex flex-wrap bg-gradient-to-t from-white/[55%] to-transparent rounded-[32px]">
            <div class="md:w-1/2 py-8 px-5 bg-none lg:py-20">
                <div class="relative mx-auto max-w-[1440px] rounded-[32px] bg-none md:pt-14">
                    <div class="container">
                        <div class="pt-28 lg:pt-0">
                            <div class="heading mb-12 ltr:lg:text-left rtl:lg:text-right">
                                <h6 class="!text-secondary">For all</h6>
                                <h4 class="pb-4 leading-normal !text-black lg:!leading-[50px]">Users</h4>
                            </div>
                            <ul class="space-y-8 text-lg font-semibold text-black">
                                <li class="flex items-center gap-3.5">
                                    <div class="flex min-h-12 min-w-12 items-center justify-center rounded-full bg-primary">
                                        <svg width="12" height="12" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.60002 5.79922L2.42502 3.62422C2.24169 3.44089 2.01669 3.34922 1.75002 3.34922C1.48336 3.34922 1.25002 3.44922 1.05002 3.64922C0.866691 3.83255 0.775024 4.06589 0.775024 4.34922C0.775024 4.63255 0.866691 4.86589 1.05002 5.04922L3.90002 7.89922C4.08336 8.08255 4.31669 8.17422 4.60002 8.17422C4.88336 8.17422 5.11669 8.08255 5.30002 7.89922L10.975 2.22422C11.1584 2.04089 11.25 1.81589 11.25 1.54922C11.25 1.28255 11.15 1.04922 10.95 0.849219C10.7667 0.665886 10.5334 0.574219 10.25 0.574219C9.96669 0.574219 9.73336 0.665886 9.55002 0.849219L4.60002 5.79922Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <p>Earn upto 1% rewards risk-free against your spending volume and deposits every week.</p>
                                </li>
                                <li class="flex items-center gap-3.5">
                                    <div class="flex min-h-12 min-w-12 items-center justify-center rounded-full bg-secondary">
                                        <svg width="12" height="12" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.60002 5.79922L2.42502 3.62422C2.24169 3.44089 2.01669 3.34922 1.75002 3.34922C1.48336 3.34922 1.25002 3.44922 1.05002 3.64922C0.866691 3.83255 0.775024 4.06589 0.775024 4.34922C0.775024 4.63255 0.866691 4.86589 1.05002 5.04922L3.90002 7.89922C4.08336 8.08255 4.31669 8.17422 4.60002 8.17422C4.88336 8.17422 5.11669 8.08255 5.30002 7.89922L10.975 2.22422C11.1584 2.04089 11.25 1.81589 11.25 1.54922C11.25 1.28255 11.15 1.04922 10.95 0.849219C10.7667 0.665886 10.5334 0.574219 10.25 0.574219C9.96669 0.574219 9.73336 0.665886 9.55002 0.849219L4.60002 5.79922Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <p>Inherent privacy & data protection ensuring that your information and transactions are secure and private.</p>
                                </li>
                                <li class="flex items-center gap-3.5">
                                    <div class="flex min-h-12 min-w-12 items-center justify-center rounded-full bg-primary">
                                        <svg width="12" height="12" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.60002 5.79922L2.42502 3.62422C2.24169 3.44089 2.01669 3.34922 1.75002 3.34922C1.48336 3.34922 1.25002 3.44922 1.05002 3.64922C0.866691 3.83255 0.775024 4.06589 0.775024 4.34922C0.775024 4.63255 0.866691 4.86589 1.05002 5.04922L3.90002 7.89922C4.08336 8.08255 4.31669 8.17422 4.60002 8.17422C4.88336 8.17422 5.11669 8.08255 5.30002 7.89922L10.975 2.22422C11.1584 2.04089 11.25 1.81589 11.25 1.54922C11.25 1.28255 11.15 1.04922 10.95 0.849219C10.7667 0.665886 10.5334 0.574219 10.25 0.574219C9.96669 0.574219 9.73336 0.665886 9.55002 0.849219L4.60002 5.79922Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <p>Effectively plan and visualise your finances with built-in tools and dashboard.</p>
                                </li>
                            </ul>
                        </div>
                        <div class="w-full flex justify-center pb-16">
                          <a href="https://ecosis.app" target="_blank" class="btn text-xl text-white group-hover:bg-white group-hover:text-secondary dark:text-black mt-[50px]"
                              >Enter App</a
                          >
                        </div>
                    </div>
                </div>
            </div>

            <div class="md:w-1/2 bg-gradient-to-t from-white/[55%] to-transparent py-8 px-5 dark:bg-white/[0.03] dark:bg-none lg:py-20" id="business">
                <div class="mx-auto max-w-[1440px] rounded-[32px] bg-black md:pt-14">
                    <div class="container">
                        <div class="pt-28 pb-8 lg:pb-10 lg:pt-0">
                            <div class="heading mb-12 ltr:lg:text-left rtl:lg:text-right">
                                <h6 class="!text-secondary">Additionally for</h6>
                                <h4 class="pb-4 leading-normal !text-white lg:!leading-[50px]">Businesses</h4>
                            </div>
                            <ul class="space-y-8 text-lg font-semibold text-white">
                                <li class="flex items-center gap-3.5">
                                    <div class="flex min-h-12 min-w-12 items-center justify-center rounded-full bg-primary">
                                        <svg width="12" height="12" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.60002 5.79922L2.42502 3.62422C2.24169 3.44089 2.01669 3.34922 1.75002 3.34922C1.48336 3.34922 1.25002 3.44922 1.05002 3.64922C0.866691 3.83255 0.775024 4.06589 0.775024 4.34922C0.775024 4.63255 0.866691 4.86589 1.05002 5.04922L3.90002 7.89922C4.08336 8.08255 4.31669 8.17422 4.60002 8.17422C4.88336 8.17422 5.11669 8.08255 5.30002 7.89922L10.975 2.22422C11.1584 2.04089 11.25 1.81589 11.25 1.54922C11.25 1.28255 11.15 1.04922 10.95 0.849219C10.7667 0.665886 10.5334 0.574219 10.25 0.574219C9.96669 0.574219 9.73336 0.665886 9.55002 0.849219L4.60002 5.79922Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <p>Save up to 80% on transaction costs with our platform.</p>
                                </li>
                                <li class="flex items-center gap-3.5">
                                    <div class="flex min-h-12 min-w-12 items-center justify-center rounded-full bg-secondary">
                                        <svg width="12" height="12" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.60002 5.79922L2.42502 3.62422C2.24169 3.44089 2.01669 3.34922 1.75002 3.34922C1.48336 3.34922 1.25002 3.44922 1.05002 3.64922C0.866691 3.83255 0.775024 4.06589 0.775024 4.34922C0.775024 4.63255 0.866691 4.86589 1.05002 5.04922L3.90002 7.89922C4.08336 8.08255 4.31669 8.17422 4.60002 8.17422C4.88336 8.17422 5.11669 8.08255 5.30002 7.89922L10.975 2.22422C11.1584 2.04089 11.25 1.81589 11.25 1.54922C11.25 1.28255 11.15 1.04922 10.95 0.849219C10.7667 0.665886 10.5334 0.574219 10.25 0.574219C9.96669 0.574219 9.73336 0.665886 9.55002 0.849219L4.60002 5.79922Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <p>Free and Instant checkout integration with storefronts, apps and websites.</p>
                                </li>
                                <li class="flex items-center gap-3.5">
                                    <div class="flex min-h-12 min-w-12 items-center justify-center rounded-full bg-primary">
                                        <svg width="12" height="12" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.60002 5.79922L2.42502 3.62422C2.24169 3.44089 2.01669 3.34922 1.75002 3.34922C1.48336 3.34922 1.25002 3.44922 1.05002 3.64922C0.866691 3.83255 0.775024 4.06589 0.775024 4.34922C0.775024 4.63255 0.866691 4.86589 1.05002 5.04922L3.90002 7.89922C4.08336 8.08255 4.31669 8.17422 4.60002 8.17422C4.88336 8.17422 5.11669 8.08255 5.30002 7.89922L10.975 2.22422C11.1584 2.04089 11.25 1.81589 11.25 1.54922C11.25 1.28255 11.15 1.04922 10.95 0.849219C10.7667 0.665886 10.5334 0.574219 10.25 0.574219C9.96669 0.574219 9.73336 0.665886 9.55002 0.849219L4.60002 5.79922Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <p>Inbuilt reward mechanism allows for significantly reduced customer acquisition costs.</p>
                                </li>
                            </ul>
                        </div>
                        <div class="w-full flex justify-center pb-16">
                          <a href="mailto:contact@ecosis.network" target="_blank" class="btn bg-secondary text-xl text-white group-hover:bg-white group-hover:text-primary dark:text-black "
                              >Contact Us</a
                          >
                        </div>
                        <!-- <img src="/assets/images/modern-saas/perfomance-design.svg" alt="" class="absolute bottom-0 ltr:right-0 rtl:left-0" />
                        <img src="/assets/images/modern-saas/dollers-icon.svg" alt="" class="absolute top-0 ltr:right-14 rtl:left-14" /> -->
                    </div>
                </div>
            </div>
        </section>

        <!-- Performance -->
        <section class="pt-12" id="perfomance">
            <div class="container">
                <div class="heading text-center">
                    <h6>Parameters updated weekly - <span>Testnet</span></h6>
                    <h4>Performance</h4>
                </div>
                <div class="flex flex-wrap">
                    <div class="md:flex-1 m-4 rounded-[18px] bg-white p-4 dark:bg-black" data-aos="fade-up" data-aos-duration="1000">
                        <div class="flex justify-between">
                            <div class="flex items-center gap-2.5">
                                <div class="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" height="30" fill="white"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                                </div>
                                <h4 class="text-lg font-bold text-black dark:text-white">Total Deposit Volume</h4>
                            </div>
                            <div>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17 19.9815L24 14M24 14L31 19.9815M24 14V33"
                                        stroke="#12AF97"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div class="my-4 h-[1px] bg-[#11011E] opacity-5"></div>
                        <div class="flex items-center justify-between gap-2">
                            <div>
                                <h3 class="text-xl font-bold leading-[25px] text-black dark:text-white">$4,211,657.24</h3>
                                <h4 class="mt-2 text-lg font-semibold text-[#12AF97]">3.36%</h4>
                            </div>
                            <div>
                                <apexchart height="55" :options="successChartOptions" :series="successChartSeries"></apexchart>
                            </div>
                        </div>
                    </div>

                    <div class="md:flex-1 m-4 rounded-[18px] bg-white p-4 dark:bg-black" data-aos="fade-up" data-aos-duration="1000">
                        <div class="flex justify-between">
                            <div class="flex items-center gap-2.5">
                                <div class="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="30" height="30" fill="white"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23L384 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l174.1 0L535 41zM105 377l-23 23L256 400c13.3 0 24 10.7 24 24s-10.7 24-24 24L81.9 448l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64H337.9c-3.7 7.2-5.9 15.3-5.9 24c0 28.7 23.3 52 52 52l117.4 0c-4 17 .6 35.5 13.8 48.8c20.3 20.3 53.2 20.3 73.5 0L608 169.5V384c0 35.3-28.7 64-64 64H302.1c3.7-7.2 5.9-15.3 5.9-24c0-28.7-23.3-52-52-52l-117.4 0c4-17-.6-35.5-13.8-48.8c-20.3-20.3-53.2-20.3-73.5 0L32 342.5V128c0-35.3 28.7-64 64-64zm64 64H96v64c35.3 0 64-28.7 64-64zM544 320c-35.3 0-64 28.7-64 64h64V320zM320 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"/></svg>
                                </div>
                                <h4 class="text-lg font-bold text-black dark:text-white">Total Transaction Volume</h4>
                            </div>
                            <div>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17 19.9815L24 14M24 14L31 19.9815M24 14V33"
                                        stroke="#12AF97"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div class="my-4 h-[1px] bg-[#11011E] opacity-5"></div>
                        <div class="flex items-center justify-between gap-2">
                            <div>
                                <h3 class="text-xl font-bold leading-[25px] text-black dark:text-white">$2,623,739.54</h3>
                                <h4 class="mt-2 text-lg font-semibold text-[#12AF97]">1.41%</h4>
                            </div>
                            <div>
                                <apexchart height="55" :options="successChartOptions" :series="successChartSeries"></apexchart>
                            </div>
                        </div>
                    </div>
                    <div class="md:flex-1 m-4 rounded-[18px] bg-white p-4 dark:bg-black" data-aos="fade-up" data-aos-duration="1000">
                        <div class="flex justify-between">
                            <div class="flex items-center gap-2.5">
                                <div class="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-secondary">
                                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          opacity="0.5"
                                          d="M6.21053 20H3.05263C2.77346 20 2.50572 19.8891 2.30831 19.6917C2.1109 19.4943 2 19.2265 2 18.9474V10.5263C2 10.2471 2.1109 9.97941 2.30831 9.782C2.50572 9.58459 2.77346 9.47369 3.05263 9.47369H6.21053C6.4897 9.47369 6.75744 9.58459 6.95485 9.782C7.15226 9.97941 7.26316 10.2471 7.26316 10.5263V18.9474C7.26316 19.2265 7.15226 19.4943 6.95485 19.6917C6.75744 19.8891 6.4897 20 6.21053 20ZM20.9474 20H17.7895C17.5103 20 17.2426 19.8891 17.0452 19.6917C16.8477 19.4943 16.7368 19.2265 16.7368 18.9474V7.36843C16.7368 7.08925 16.8477 6.82151 17.0452 6.6241C17.2426 6.4267 17.5103 6.3158 17.7895 6.3158H20.9474C21.2265 6.3158 21.4943 6.4267 21.6917 6.6241C21.8891 6.82151 22 7.08925 22 7.36843V18.9474C22 19.2265 21.8891 19.4943 21.6917 19.6917C21.4943 19.8891 21.2265 20 20.9474 20Z"
                                          fill="white"
                                      />
                                      <path
                                          d="M13.5789 20H10.421C10.1419 20 9.87412 19.8891 9.67672 19.6917C9.47931 19.4943 9.36841 19.2265 9.36841 18.9474V1.05263C9.36841 0.773456 9.47931 0.505715 9.67672 0.308309C9.87412 0.110902 10.1419 0 10.421 0H13.5789C13.8581 0 14.1259 0.110902 14.3233 0.308309C14.5207 0.505715 14.6316 0.773456 14.6316 1.05263V18.9474C14.6316 19.2265 14.5207 19.4943 14.3233 19.6917C14.1259 19.8891 13.8581 20 13.5789 20Z"
                                          fill="white"
                                      />
                                  </svg>
                                </div>
                                <h4 class="text-lg font-bold text-black dark:text-white">Reward Pool</h4>
                            </div>
                            <div>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17 19.9815L24 14M24 14L31 19.9815M24 14V33"
                                        stroke="#12AF97"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div class="my-4 h-[1px] bg-[#11011E] opacity-5"></div>
                        <div class="flex items-center justify-between gap-2">
                            <div>
                                <h3 class="text-xl font-bold leading-[25px] text-black dark:text-white">$20,989,91</h3>
                                <h4 class="mt-2 text-lg font-semibold text-[#12AF97]">1.14%</h4>
                            </div>
                            <div>
                                <apexchart height="55" :options="successChartOptions" :series="successChartSeries"></apexchart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="heading text-center pt-4">
              <h6>How much can you earn?</h6>
              <!-- <h4>Calculate</h4> -->
              <div class="w-full flex justify-center">
                <a href="https://ecosis.app/" target="_blank" class="btn text-xl text-white group-hover:bg-white group-hover:text-secondary dark:text-black"
                    >Calculate Here</a
                >
              </div>
            </div>
        </section>

        <!-- Partners -->
        <section class="bg-[url(/assets/images/team-bg.png)] bg-cover bg-center bg-no-repeat py-14 dark:bg-black/50 lg:py-[100px]" id="partner">
            <div class="">
                <div class="heading text-center">
                    <h6>Our</h6>
                    <h4>Partners</h4>
                </div>
                <div class="flex flex-wrap justify-center">
                    <a class="cursor-pointer text-center px-4" href="https://changenow.io/" target="_blank">
                        <div class="flex justify-center items-center py-4 w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/changenow_dark.png" alt="team-member-1" class="h-36 w-36 rounded-3xl" />
                        </div>
                        <h4 class="p-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            Change Now
                        </h4>
                        <h6 class="text-sm font-bold">Crypto Exchange</h6>
                    </a>
                    <a class="cursor-pointer text-center px-4" href="https://www.revolut.com/" target="_blank">
                        <div class="flex justify-center items-center py-4  w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/revolut.png" alt="team-member-4" class="h-36 w-36 rounded-3xl" />
                        </div>
                        <h4 class="p-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            Revolut
                        </h4>
                        <h6 class="text-sm font-bold">One App, All things Money</h6>
                    </a>
                    <a class="cursor-pointer text-center px-4" href="https://www.estglobalinc.com/" target="_blank">
                        <div class="flex justify-center items-center py-4  w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/fab_dark.png" alt="team-member-4" class="h-36 w-36 rounded-3xl" />
                        </div>
                        <h4 class="p-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            FAB
                        </h4>
                        <h6 class="text-sm font-bold">Fintech and Blockchain Association</h6>
                    </a>
                    <a class="cursor-pointer text-center px-4" href="https://www.shefan.pro/" target="_blank">
                        <div class="flex justify-center items-center py-4 w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/shefan_dark.png" alt="team-member-3" class="h-36 w-36 rounded-3xl" />
                        </div>
                        <h4 class="p-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            SheFan Pro
                        </h4>
                        <h6 class="text-sm font-bold">Womens Empowerment Blockchain</h6>
                    </a>
                    <a class="cursor-pointer text-center px-4" href="https://puri.sm/" target="_blank">
                        <div class="flex justify-center items-center py-4 w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/purism_dark.png" alt="team-member-2" class="h-36 w-36 rounded-3xl" />
                        </div>
                        <h4 class="p-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            Purism
                        </h4>
                        <h6 class="text-sm font-bold">Beautify, Privacy-respecting Devices</h6>
                    </a>
                    <a class="cursor-pointer text-center px-4" href="https://discord.gg/RrgAb9dwYE" target="_blank">
                        <div class="flex justify-center items-center py-4 w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/forge_dark.png" alt="team-member-2" class="h-36 w-36 rounded-3xl" />
                        </div>
                        <h4 class="p-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            The Forge
                        </h4>
                        <h6 class="text-sm font-bold">Dev Projects</h6>
                    </a>
                    <a class="cursor-pointer text-center px-4" href="https://kalipo.io/" target="_blank">
                        <div class="flex justify-center items-center py-4 w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/kalipo_dark.png" alt="team-member-2" class="h-36 w-36 rounded-3xl" />
                        </div>
                        <h4 class="p-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            Kalipo
                        </h4>
                        <h6 class="text-sm font-bold">DAO as a Service</h6>
                    </a>
                    <a class="cursor-pointer text-center px-4" href="https://www.spirinova.dev/" target="_blank">
                        <div class="flex justify-center items-center py-4 w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/spirinova_dark.png" alt="team-member-2" class="h-36 w-36 rounded-3xl" />
                        </div>
                        <h4 class="p-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            Spirinova
                        </h4>
                        <h6 class="text-sm font-bold">Spirit of Innovation</h6>
                    </a>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="container" id="join">
            <div class="heading text-center">
                <h6>Join Now</h6>
                <h4>Monetise Your Payments</h4>
            </div>
            <div class="w-full flex justify-center pb-4">
              <a href="https://ecosis.app" target="_blank" class="btn text-xl text-white group-hover:bg-white group-hover:text-secondary dark:text-black"
                  >Enter App</a
              >
            </div>
            <div class="w-full flex justify-center">
              <img src="/assets/images/screenshots/dev_package3.png" class="md:h-[500px]">
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import apexchart from 'vue3-apexcharts';
    import Testimonial from '@/components/Testimonial.vue';
    import Counter from '@/components/Counter.vue';
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();

    const activeTab = ref('all');

    // success chart
    const successChartOptions = ref({
        chart: {
            height: 55,
            type: 'area',
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        markers: {
            size: 0,
        },
        colors: ['#12AF97'],
        fill: {
            opacity: 1,
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: 0.3,
                opacityTo: 0.05,
                stops: [50, 100],
            },
        },
        grid: {
            padding: {
                top: 0,
                bottom: 0,
                left: 0,
            },
        },
        tooltip: {
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: () => {
                        return '';
                    },
                },
            },
        },
        responsive: [
            {
                breakPoint: 576,
                options: {
                    chart: {
                        height: 95,
                    },
                    grid: {
                        padding: {
                            top: 45,
                            bottom: 0,
                            left: 0,
                        },
                    },
                },
            },
        ],
    });

    const successChartSeries = ref([
        {
            data: [9, 36, 12, 59, 41, 66],
        },
    ]);

    // danger chart
    const dangerChartOptions = ref({
        chart: {
            height: 55,
            type: 'area',
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        markers: {
            size: 0,
        },
        colors: ['#FF0000'],
        fill: {
            opacity: 1,
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: 0.3,
                opacityTo: 0.05,
                stops: [50, 100],
            },
        },
        grid: {
            padding: {
                top: 0,
                bottom: 0,
                left: 0,
            },
        },
        tooltip: {
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: () => {
                        return '';
                    },
                },
            },
        },
        responsive: [
            {
                breakPoint: 576,
                options: {
                    chart: {
                        height: 95,
                    },
                    grid: {
                        padding: {
                            top: 45,
                            bottom: 0,
                            left: 0,
                        },
                    },
                },
            },
        ],
    });

    const dangerChartSeries = ref([
        {
            data: [55, 41, 69, 20, 44, 19],
        },
    ]);
</script>
