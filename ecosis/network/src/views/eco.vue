<template>
    <div>
        <!-- Hero -->
        <div class="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
            <div class="relative py-24">
                <img src="/assets/images/banner-lefticon.png" alt="banner-lefticon" class="absolute left-0 top-20" />
                <img src="/assets/images/banner-rightIcon.png" alt="banner-rightIcon" class="absolute right-0 -top-4" />
                <div class="container">
                    <div class="flex flex-col items-center bg-[url('/assets/images/world-map.png')] bg-cover bg-top bg-no-repeat lg:py-9">
                      <div class="w-full">
                          <img
                              src="/assets/logos/eco.png"
                              class="rtl:rotate-y-0 mx-auto max-w-[560px]"
                              :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
                              data-aos-duration="1000"
                          />
                          <!-- <h2 class="text-white text-4xl font-extrabold leading-normal sm:text-6xl lg:text-[55px] lg:leading-[70px] pt-16 pb-24 text-center">
                            Eco
                          </h2> -->
                      </div>
                        <div class="w-full py-10 text-center text-white">
                            <h1 class="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[55px] lg:leading-[70px]">
                                Eco
                            </h1>
                            <h2 class="text-xl leading-normal sm:text-5xl lg:text-[34px] lg:leading-[70px]">
                                <span class="italic text-primary font-extrabold">Your</span> one and only <span class="italic text-secondary font-extrabold">Wallet</span>
                            </h2>
                            <div class="w-full flex justify-center pt-8">
                                <a href="https://kcha60ohz1u.typeform.com/to/ShJeY8a2" target="_blank" class="btn w-64 mx-auto mt-2 block bg-white py-[18px] px-8 rtl:ml-auto lg:mx-0">Waitlist</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- About -->
        <section class="relative pt-14 lg:pb-48 lg:pt-[100px]">
            <div class="container relative z-[1]">
                <div class="text-center lg:w-1/3 ltr:lg:text-left rtl:lg:text-right">
                    <div class="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right xl:w-[95%]">
                        <h6>About</h6>
                        <h4>Lift up Finance</h4>
                    </div>
                    <p class="pb-10 text-lg font-semibold leading-[30px]">
                        What you need is a simplified app that supports your purchasing power, so you can focus on the things that matter most.
                    </p>
                </div>
            </div>
            <div
                class="bottom-0 ltr:right-0 rtl:left-0 lg:absolute mt-32"
                :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
                data-aos-duration="1000"
            >
                <img src="/assets/images/screenshots/dev_desktop_dashboard2.png" class="rtl:rotate-y-180 md:w-3/5" />
            </div>
        </section>

        <!-- How it Works -->
        <section class="relative py-14 lg:py-[100px] xl:-mt-[100px]">
            <div class="absolute top-0 z-[1] h-full w-full bg-white ltr:left-0 rtl:right-0 dark:bg-black xl:w-[85%] xl:rounded-r-[32px]"></div>
            <div
                class="absolute -top-3 hidden h-full w-full rounded-r-[32px] bg-white/50 ltr:left-3 rtl:right-3 dark:bg-gray-dark xl:inline-block xl:w-[85%]"
            ></div>
            <div class="container relative z-[2] ltr:xl:pr-40 rtl:xl:pl-40">
                <div class="lg:w-2/3">
                    <div class="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                        <h6>How it works</h6>
                        <h4>Your gateway to turn transactions into opportunities!</h4>
                    </div>
                    <p class="pb-10 text-center text-lg font-semibold leading-[30px] ltr:lg:text-left rtl:lg:text-right">
                        Maximise financial opportunities by joining an economy that rewards you for holding a deposit and making purchases.
                    </p>
                </div>
                <div class="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="flex items-start gap-[10px] rounded-[10px] border border-transparent bg-secondary/10 py-6 px-5 transition hover:border-secondary hover:bg-transparent"
                        >
                            <span class="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-secondary text-lg text-white">01</span>
                            <div>
                                <h6 class="mb-1 font-bold text-secondary">Create Account</h6>
                                <p class="text-sm font-semibold text-black dark:text-gray">Login by simply using your social media accounts</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="flex items-start gap-[10px] rounded-[10px] border border-transparent bg-secondary/10 py-6 px-5 transition hover:border-secondary hover:bg-transparent"
                        >
                            <span class="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-secondary text-lg text-white">02</span>
                            <div>
                                <h6 class="mb-1 font-bold text-secondary">Deposit Funds</h6>
                                <p class="text-sm font-semibold text-black dark:text-gray">Use your preferred banking solution</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="flex items-start gap-[10px] rounded-[10px] border border-transparent bg-secondary/10 py-6 px-5 transition hover:border-secondary hover:bg-transparent"
                        >
                            <span class="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-secondary text-lg text-white">03</span>
                            <div>
                                <h6 class="mb-1 font-bold text-secondary">Transfer Funds</h6>
                                <p class="text-sm font-semibold text-black dark:text-gray">Make payments or go shopping</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="flex items-start gap-[10px] rounded-[10px] border border-transparent bg-secondary/10 py-6 px-5 transition hover:border-secondary hover:bg-transparent"
                        >
                            <span class="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-secondary text-lg text-white">04</span>
                            <div>
                                <h6 class="mb-1 font-bold text-secondary">Get rewarded</h6>
                                <p class="text-sm font-semibold text-black dark:text-gray">Auto-compound your rewards proportionally</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features -->
        <section class="py-12 lg:pt-24">
          <div class="container">
            <div class="flex flex-col gap-5 lg:flex-row lg:gap-24 py-16">
              <div class="mx-auto w-full max-w-[458px]">
                <img src="/assets/images/screenshots/dev_package3.png" alt="" />
              </div>
              <div class="heading flex-1">
                <div class="text-center ltr:lg:text-left rtl:lg:text-right">
                  <h6>Features</h6>
                  <h4>Everthing you need</h4>
                </div>
                <!-- <p class="mt-5 text-lg font-semibold">
                  Simply create an account with any of the social logins or e-mail.
                </p> -->
                <div class="mt-6 flex items-center gap-3">
                  <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" class="text-[#B476E5]" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                      d="M7.5 10.625L9.375 12.5L12.5 8.125M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                      stroke="currentcolor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-lg font-semibold" :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'" data-aos-duration="1000">
                      Seamless & hassle-free interface
                    </p>
                  </div>
                </div>
                <div class="mt-2.5 flex items-center gap-3">
                  <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" class="text-[#B476E5]" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                      d="M7.5 10.625L9.375 12.5L12.5 8.125M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                      stroke="currentcolor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-lg font-semibold" :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'" data-aos-duration="1000">
                      Rewards for payments & more
                    </p>
                  </div>
                </div>
                <div class="mt-2.5 flex items-center gap-3">
                  <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" class="text-[#B476E5]" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                      d="M7.5 10.625L9.375 12.5L12.5 8.125M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                      stroke="currentcolor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-lg font-semibold" :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'" data-aos-duration="1000">
                      Automated profit maximisation
                    </p>
                  </div>
                </div>
                <div class="mt-2.5 flex items-center gap-3">
                  <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" class="text-[#B476E5]" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                      d="M7.5 10.625L9.375 12.5L12.5 8.125M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                      stroke="currentcolor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-lg font-semibold" :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'" data-aos-duration="1000">
                      Complete control over your data
                    </p>
                  </div>
                </div>
                <div class="mt-2.5 flex items-center gap-3">
                  <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" class="text-[#B476E5]" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                      d="M7.5 10.625L9.375 12.5L12.5 8.125M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                      stroke="currentcolor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-lg font-semibold" :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'" data-aos-duration="1000">
                      Customisable to the core
                    </p>
                  </div>
                </div>
                <div class="mt-2.5 flex items-center gap-3">
                  <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" class="text-[#B476E5]" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                      d="M7.5 10.625L9.375 12.5L12.5 8.125M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                      stroke="currentcolor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-lg font-semibold" :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'" data-aos-duration="1000">
                      Risk-free & Transparent
                    </p>
                  </div>
                </div>
                <a href="https://kcha60ohz1u.typeform.com/to/ShJeY8a2" target="_blank" class="btn mt-6 py-[18px] px-8 text-base text-white">Waitlist</a>
              </div>
            </div>
          </div>
        </section>

        <!-- Stats -->
        <section class="pb-24">
            <div class="container">
                <div class="heading text-center ltr:lg:text-left rtl:lg:text-right">
                    <h6>Growth</h6>
                    <h4>Testnet Performance</h4>
                </div>
                <div class="flex flex-wrap justify-center grid gap-4 sm:grid-cols-3 md:gap-[30px]">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="group rounded-[32px] border border-transparent bg-white py-8 px-4 text-center transition hover:border-secondary hover:bg-secondary/10 dark:bg-gray-dark dark:hover:bg-secondary"
                        >
                            <div class="mx-auto xl:w-1/2">
                                <h2 class="mb-4 text-4xl font-black text-secondary dark:group-hover:text-black md:mb-0 md:text-4xl md:leading-[75px]">~14%</h2>
                                <p class="text-sm font-bold text-gray-dark line-clamp-2 dark:text-white dark:group-hover:text-black">
                                    APY
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="group rounded-[32px] border border-transparent bg-white py-8 px-4 text-center transition hover:border-secondary hover:bg-secondary/10 dark:bg-gray-dark dark:hover:bg-secondary"
                        >
                            <div class="mx-auto xl:w-1/2">
                                <h2 class="mb-4 text-4xl font-black text-secondary dark:group-hover:text-black md:mb-0 md:text-4xl md:leading-[75px]">+$100k</h2>
                                <p class="text-sm font-bold text-gray-dark line-clamp-2 dark:text-white dark:group-hover:text-black">
                                    Redistributed
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="group rounded-[32px] border border-transparent bg-white py-8 px-4 text-center transition hover:border-secondary hover:bg-secondary/10 dark:bg-gray-dark dark:hover:bg-secondary"
                        >
                            <div class="mx-auto xl:w-1/2">
                                <h2 class="mb-4 text-4xl font-black text-secondary dark:group-hover:text-black md:mb-0 md:text-4xl md:leading-[75px]">+$4.4M</h2>
                                <p class="text-sm font-bold text-gray-dark line-clamp-2 dark:text-white dark:group-hover:text-black">
                                    Transaction Volume
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- <Testimonial class="pb-[100px] pt-14 lg:pb-[250px] lg:pt-20"></Testimonial> -->
    </div>
</template>
<script setup lang="ts">
    import Testimonial from '@/components/Testimonial.vue';
    import Counter from '@/components/Counter.vue';
    import BlogSlider from '@/components/BlogSlider.vue';
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
</script>
