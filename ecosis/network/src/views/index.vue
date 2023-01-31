<template>
    <div class="overflow-x-hidden">
        <div class="overflow-hidden bg-black pt-[82px] sm:-mx-[250px] sm:rounded-b-[50%] lg:-mx-[150px] lg:pt-[106px]">
            <div class="relative">
                <img src="/assets/images/banner-lefticon.png" alt="banner-lefticon" class="absolute left-0 top-20 sm:left-[250px] lg:left-[150px]" />
                <img src="/assets/images/banner-rightIcon.png" alt="banner-rightIcon" class="absolute right-0 -top-4 sm:right-[250px] lg:right-[150px]" />
                <div class="container">
                    <div class="relative bg-[url('/assets/images/world-map.png')] bg-cover bg-top bg-no-repeat pt-14 pb-0 lg:pt-20 lg:pb-60 xl:pt-36">
                        <div class="relative z-[1] text-center text-white lg:w-3/5 ltr:lg:text-left rtl:lg:text-right xl:w-1/2">
                            <h2 class="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[70px] lg:leading-[90px]">
                                The <span class="italic text-primary">Ultimate </span> <span class="italic text-secondary">Win-Win</span> Economy
                            </h2>
                            <p class="my-8 text-lg lg:w-[90%]">
                                Streamline your economy. Simplify your transactions. Connect the world.
                            </p>
                            <div class="flex">
                              <router-link to="/about-us" class="btn mx-auto mt-2 block w-fit bg-white lg:mx-0 lg:rtl:ml-auto">Enter Demo</router-link>
                              <router-link to="/about-us" class="btn bg-transparent text-white underline mx-auto mt-2 block w-fit lg:mx-0 lg:rtl:ml-auto">Start here</router-link>
                            </div>
                        </div>
                        <div
                            class="bottom-0 mx-auto mt-5 mb-2 w-auto ltr:right-0 rtl:left-0 md:w-[540px] lg:absolute lg:mb-0 lg:mt-0 xl:w-[650px]"
                            :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
                            data-aos-duration="1000"
                            data-aos-offset="0"
                            data-aos-delay="300"
                        >
                            <img src="/assets/images/home-banner-icon.svg" alt="home-banner-icon" class="rtl:rotate-y-180" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="bg-gradient-to-b from-white/[55%] to-transparent py-14 dark:bg-none lg:py-20">
            <div class="container">
                <div class="lg:w-1/2">
                    <div class="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                        <h6 class="!text-secondary">FEATURES</h6>
                        <h4>A robust digitized economy</h4>
                        <p class="mt-4 text-lg font-semibold">
                            It's a B2B2C SaaS providing the most degitized and rewarding infrastructure to support the cash-flow between businesses, consumers, and investors.
                        </p>
                    </div>
                </div>
                <div class="mt-16 grid gap-x-7 gap-y-12 text-lg font-semibold sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-20">
                    <div class="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                        <div class="h-10 w-10 flex-none text-black dark:text-white">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.25175 22.8926H2.67813C1.58662 22.8926 0.701782 23.7774 0.701782 24.8689V36.8477C0.701782 37.9392 1.58662 38.8241 2.67813 38.8241H9.25175C10.3433 38.8241 11.2281 37.9392 11.2281 36.8477V24.8689C11.2281 23.7774 10.3433 22.8926 9.25175 22.8926Z"
                                    fill="#47BDFF"
                                />
                                <path
                                    d="M22.936 12.0098H16.3623C15.2708 12.0098 14.386 12.8946 14.386 13.9861V36.8482C14.386 37.9397 15.2708 38.8245 16.3623 38.8245H22.936C24.0275 38.8245 24.9123 37.9397 24.9123 36.8482V13.9861C24.9123 12.8946 24.0275 12.0098 22.936 12.0098Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M36.6202 0.929688H30.0465C28.955 0.929688 28.0702 1.81453 28.0702 2.90604V36.8481C28.0702 37.9396 28.955 38.8244 30.0465 38.8244H36.6202C37.7117 38.8244 38.5965 37.9396 38.5965 36.8481V2.90604C38.5965 1.81453 37.7117 0.929688 36.6202 0.929688Z"
                                    fill="#B476E5"
                                />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <h3 class="mb-6 text-[22px] font-extrabold text-black dark:text-white">Realtime analytics</h3>
                            <p class="line-clamp-3">Real-time analytics is the discipline that applies logic and mathematics to data....</p>
                        </div>
                    </div>
                    <div class="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                        <div class="h-10 w-10 flex-none text-black dark:text-white">
                            <svg width="34" height="37" viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.01127 0.318359H0.938767C0.4203 0.318359 0 0.738659 0 1.25713V35.0798C0 35.5983 0.4203 36.0186 0.938767 36.0186H5.01127C5.52973 36.0186 5.95003 35.5983 5.95003 35.0798V1.25713C5.95003 0.738659 5.52973 0.318359 5.01127 0.318359Z"
                                    fill="#B476E5"
                                />
                                <mask id="mask0_733_15588" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="7" y="0" width="28" height="23">
                                    <path
                                        d="M31.1839 0.318359H10.4664C8.91096 0.318359 7.65005 1.57926 7.65005 3.13466V19.6022C7.65005 21.1576 8.91096 22.4185 10.4664 22.4185H31.1839C32.7393 22.4185 34.0002 21.1576 34.0002 19.6022V3.13466C34.0002 1.57926 32.7393 0.318359 31.1839 0.318359Z"
                                        fill="#01B969"
                                    />
                                </mask>
                                <g mask="url(#mask0_733_15588)">
                                    <path
                                        d="M31.1839 0.318359H10.4664C8.91096 0.318359 7.65005 1.57926 7.65005 3.13466V19.6022C7.65005 21.1576 8.91096 22.4185 10.4664 22.4185H31.1839C32.7393 22.4185 34.0002 21.1576 34.0002 19.6022V3.13466C34.0002 1.57926 32.7393 0.318359 31.1839 0.318359Z"
                                        fill="#47BDFF"
                                    />
                                    <path d="M34.2428 10.6993L22.2819 22.6602L34.2428 34.621L46.2036 22.6602L34.2428 10.6993Z" fill="currentColor" />
                                </g>
                            </svg>
                        </div>
                        <div class="flex-1">
                            <h3 class="mb-6 text-[22px] font-extrabold text-black dark:text-white">User journey</h3>
                            <p class="line-clamp-3">A customer journey map is a visual representation of a customer’s experience with a company.</p>
                        </div>
                    </div>
                    <div class="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                        <div class="h-10 w-10 flex-none text-black dark:text-white">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.1366 3.02539C22.5757 3.02539 22.9135 3.38362 22.9135 3.8101V9.30304C22.9135 12.4248 25.4639 14.9836 28.5547 15.0007C29.8384 15.0007 30.8518 15.0178 31.6287 15.0178L31.9165 15.0165C32.4357 15.0125 33.1347 15.0007 33.7399 15.0007C34.1622 15.0007 34.5 15.3418 34.5 15.7683V29.4836C34.5 33.7142 31.1051 37.143 26.9164 37.143H13.4721C9.08067 37.143 5.5 33.5436 5.5 29.1083V10.7189C5.5 6.48833 8.91173 3.02539 13.1173 3.02539H22.1366ZM23.9438 25.0312H14.7557C14.0632 25.0312 13.4889 25.5942 13.4889 26.2936C13.4889 26.993 14.0632 27.573 14.7557 27.573H23.9438C24.6363 27.573 25.2105 26.993 25.2105 26.2936C25.2105 25.5942 24.6363 25.0312 23.9438 25.0312ZM20.4645 16.5018H14.7557C14.0632 16.5018 13.4889 17.0818 13.4889 17.7812C13.4889 18.4807 14.0632 19.0436 14.7557 19.0436H20.4645C21.1569 19.0436 21.7312 18.4807 21.7312 17.7812C21.7312 17.0818 21.1569 16.5018 20.4645 16.5018ZM25.3747 4.57092C25.3747 3.83568 26.2581 3.47062 26.7631 4.00116C28.5889 5.91856 31.7794 9.27064 33.5629 11.1437C34.0561 11.6606 33.6947 12.5186 32.9836 12.5203C31.5953 12.5254 29.9587 12.5203 28.7814 12.5084C26.9134 12.5084 25.3747 10.9543 25.3747 9.06764V4.57092Z"
                                    fill="#B476E5"
                                />
                                <path
                                    d="M20.4648 16.502H14.756C14.0635 16.502 13.4893 17.082 13.4893 17.7814C13.4893 18.4808 14.0635 19.0438 14.756 19.0438H20.4648C21.1573 19.0438 21.7315 18.4808 21.7315 17.7814C21.7315 17.082 21.1573 16.502 20.4648 16.502Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M23.9441 25.0312H14.756C14.0635 25.0312 13.4893 25.5942 13.4893 26.2937C13.4893 26.9931 14.0635 27.573 14.756 27.573H23.9441C24.6366 27.573 25.2109 26.9931 25.2109 26.2937C25.2109 25.5942 24.6366 25.0312 23.9441 25.0312Z"
                                    fill="currentColor"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M26.7627 4.00153C26.2577 3.471 25.3743 3.83606 25.3743 4.57129V9.068C25.3743 10.9547 26.913 12.5087 28.7811 12.5087C29.9583 12.5207 31.5949 12.5258 32.9833 12.5207C33.6943 12.519 34.0558 11.6609 33.5626 11.1441C32.6721 10.2089 31.4309 8.905 30.1839 7.59513C28.9333 6.28142 27.6769 4.96162 26.7627 4.00153Z"
                                    fill="#47BDFF"
                                />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <h3 class="mb-6 text-[22px] font-extrabold text-black dark:text-white">Automated reports</h3>
                            <p class="line-clamp-3">Let’s take a deeper look into what report automation is, why your agency should automate its..</p>
                        </div>
                    </div>
                    <div class="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                        <div class="h-10 w-10 flex-none">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M35.4885 2.06836H5.20114C3.85481 2.06836 2.75861 3.16457 2.75861 4.51089V7.52888C2.75861 9.7887 3.77665 11.8864 5.5509 13.2844L14.8765 20.6316H25.8122L35.1378 13.2844C36.9129 11.8864 37.931 9.78774 37.931 7.52888V4.51089C37.931 3.16457 36.8348 2.06836 35.4885 2.06836Z"
                                    fill="#47BDFF"
                                />
                                <path
                                    d="M15.46 23.5625V35.7752C15.46 36.3242 15.7668 36.8274 16.2543 37.0785C16.4664 37.187 16.696 37.2407 16.9255 37.2407C17.2255 37.2407 17.5244 37.1488 17.7775 36.9681L24.6166 32.0831C25.0015 31.8075 25.2302 31.363 25.2302 30.8901V23.5625H15.46Z"
                                    fill="#B476E5"
                                />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <h3 class="mb-6 text-[22px] font-extrabold text-black dark:text-white">Funnel optimization</h3>
                            <p class="line-clamp-3">Real-time analytics is the discipline that applies logic and mathematics to data....</p>
                        </div>
                    </div>
                    <div class="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                        <div class="h-10 w-10 flex-none text-black dark:text-white">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.0335 14.25H7.50748C4.44768 14.25 1.96722 16.7305 1.96722 19.7903V32.3163C1.96722 35.3761 4.44768 37.8566 7.50748 37.8566H20.0335C23.0933 37.8566 25.5738 35.3761 25.5738 32.3163V19.7903C25.5738 16.7305 23.0933 14.25 20.0335 14.25Z"
                                    fill="#B476E5"
                                />
                                <path
                                    d="M31.8368 2.44531H19.3108C16.251 2.44531 13.7705 4.92577 13.7705 7.98557V20.5116C13.7705 23.5714 16.251 26.0519 19.3108 26.0519H31.8368C34.8966 26.0519 37.3771 23.5714 37.3771 20.5116V7.98557C37.3771 4.92577 34.8966 2.44531 31.8368 2.44531Z"
                                    fill="#47BDFF"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M25.5738 26.0533H19.3108C16.251 26.0533 13.7705 23.5728 13.7705 20.513V14.25H20.0335C23.0933 14.25 25.5738 16.7305 25.5738 19.7903V26.0533Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <h3 class="mb-6 text-[22px] font-extrabold text-black dark:text-white">A/B Testing</h3>
                            <p class="line-clamp-3">A customer journey map is a visual representation of a customer’s experience with a company.</p>
                        </div>
                    </div>
                    <div class="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                        <div class="h-10 w-10 flex-none text-black dark:text-white">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M23.5351 15.8717C23.2033 15.3029 22.5943 14.9531 21.9358 14.9531H11.102C10.4434 14.9531 9.83448 15.3029 9.50267 15.8717L4.10235 25.1294C3.76606 25.706 3.76606 26.4188 4.10235 26.9953L9.50267 36.253C9.83448 36.8218 10.4434 37.1716 11.102 37.1716H21.9358C22.5943 37.1716 23.2033 36.8218 23.5351 36.253L28.9354 26.9953C29.2717 26.4188 29.2717 25.706 28.9354 25.1294L23.5351 15.8717ZM16.5189 31.2741C19.4351 31.2741 21.7992 28.91 21.7992 25.9938C21.7992 23.0776 19.4351 20.7135 16.5189 20.7135C13.6027 20.7135 11.2386 23.0776 11.2386 25.9938C11.2386 28.91 13.6027 31.2741 16.5189 31.2741Z"
                                    fill="#47BDFF"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M30.6374 3.67673C30.386 3.25889 29.9245 3.00195 29.4255 3.00195H21.2154C20.7164 3.00195 20.2549 3.25889 20.0034 3.67673L15.911 10.4771C15.6561 10.9006 15.6561 11.4242 15.911 11.8477L20.0034 18.6481C20.2549 19.066 20.7164 19.3229 21.2154 19.3229H29.4255C29.9245 19.3229 30.386 19.066 30.6374 18.6481L34.7299 11.8477C34.9847 11.4242 34.9847 10.9006 34.7299 10.4771L30.6374 3.67673ZM25.3205 14.9908C27.5304 14.9908 29.3219 13.2542 29.3219 11.1121C29.3219 8.96989 27.5304 7.23331 25.3205 7.23331C23.1105 7.23331 21.3189 8.96989 21.3189 11.1121C21.3189 13.2542 23.1105 14.9908 25.3205 14.9908Z"
                                    fill="#B476E5"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M25.5491 19.3244L23.5351 15.8717C23.2032 15.3029 22.5943 14.9531 21.9358 14.9531H17.7791L20.0036 18.6496C20.255 19.0675 20.7165 19.3244 21.2155 19.3244H25.5491Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <h3 class="mb-6 text-[22px] font-extrabold text-black dark:text-white">Integrations</h3>
                            <p class="text-lg font-semibold line-clamp-3">
                                Let’s take a deeper look into what report automation is, why your agency should automate its..
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-14 dark:!bg-none lg:py-[100px]" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 54.69%)">
            <!-- <counter></counter> -->

            <div
                class="relative m-14 mx-auto border-[10px] border-transparent bg-black py-14 dark:border-black dark:bg-gray-dark lg:my-[100px] lg:py-[100px] xl:max-w-[1440px] xl:rounded-3xl"
            >
                <div class="container">
                    <div class="items-end gap-4 lg:flex xl:gap-0">
                        <div class="lg:w-1/2">
                            <div class="heading mb-16 text-center ltr:lg:text-left rtl:lg:text-right">
                                <h6>Ecosystem as a Service</h6>
                                <h4 class="leading-normal !text-white lg:!leading-[50px]">We provide an automated economy infrastructure the world needs a long time ago.</h4>
                            </div>
                            <div
                                class="grid gap-x-7 gap-y-12 sm:grid-cols-2"
                                :data-aos="store.direction === 'rtl' ? 'fade-left' : 'fade-right'"
                                data-aos-duration="1000"
                            >
                                <div class="flex transition">
                                    <div>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_36_337)">
                                                <path
                                                    opacity="0.5"
                                                    d="M19.2867 23.9285V25.119C19.2867 25.7505 19.0358 26.3561 18.5893 26.8027C18.1427 27.2492 17.5371 27.5001 16.9056 27.5001H12.1435C11.512 27.5001 10.9063 27.2492 10.4598 26.8027C10.0133 26.3561 9.76239 25.7505 9.76239 25.119V23.9285H19.2867Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    d="M9.69213 21.5473C9.33855 20.0318 7.74323 18.7924 7.08844 17.9757C5.96718 16.5748 5.26448 14.8857 5.06127 13.1028C4.85807 11.32 5.16263 9.51606 5.93988 7.89876C6.71712 6.28146 7.93542 4.91663 9.45445 3.96148C10.9735 3.00632 12.7314 2.49971 14.5258 2.5C16.3202 2.50029 18.078 3.00746 19.5967 3.9631C21.1154 4.91874 22.3333 6.28396 23.11 7.90151C23.8867 9.51906 24.1907 11.3231 23.9869 13.1059C23.7831 14.8886 23.0799 16.5776 21.9582 17.9781C21.3034 18.7936 19.7105 20.033 19.3569 21.5473H9.69094H9.69213ZM15.715 12.029V7.26094L10.3576 14.4101H13.334V19.1722L18.6914 12.029H15.715Z"
                                                    fill="#B476E5"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_36_337">
                                                    <rect width="30" height="30" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="ltr:pl-3 rtl:pr-3">
                                        <h4 class="mb-2 text-lg font-bold text-white">Creativity</h4>
                                        <p class="font-semibold">Curabitur blandit lacus porttitor ridiculus mus.</p>
                                    </div>
                                </div>
                                <div class="flex transition">
                                    <div>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_36_379)">
                                                <path
                                                    d="M7.38901 21.9074C8.8422 21.9074 10.0284 20.7213 10.0284 19.268C10.0284 17.8148 8.84225 16.6287 7.38901 16.6287C5.93576 16.6287 4.74963 17.8148 4.74963 19.268C4.74963 20.7212 5.90621 21.9074 7.38901 21.9074Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    d="M9.64281 22.5896C8.99038 23.0344 8.21938 23.2717 7.38902 23.2717C6.55865 23.2717 5.78771 23.0048 5.13522 22.5896C3.86013 23.3014 3 24.6655 3 26.2372V26.7709C3 27.364 3.47454 27.8386 4.06761 27.8386H9.73188V27.6013C9.73188 26.2075 10.2656 24.9324 11.0962 23.9537C10.7104 23.3901 10.2062 22.9158 9.64276 22.5896L9.64281 22.5896Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    d="M20.9714 19.268C20.9714 20.7212 22.1575 21.9074 23.6107 21.9074C25.064 21.9074 26.2501 20.7213 26.2501 19.268C26.2501 17.8148 25.064 16.6287 23.6107 16.6287C22.128 16.6287 20.9714 17.815 20.9714 19.268Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    d="M25.8646 22.5893C25.2122 23.0341 24.4412 23.2714 23.6109 23.2714C22.7805 23.2714 21.9797 23.0045 21.3571 22.5596C20.764 22.8858 20.2894 23.3306 19.9039 23.894C20.7638 24.8727 21.2681 26.1478 21.2681 27.5416V27.7789H26.9324C27.5255 27.7789 28 27.3044 28 26.7113V26.1776C27.9998 24.6652 27.1397 23.3308 25.8646 22.5894L25.8646 22.5893Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    d="M12.8456 20.6318C12.8456 22.085 14.0318 23.2712 15.485 23.2712C16.9383 23.2712 18.1244 22.085 18.1244 20.6318C18.1244 19.1786 16.9383 17.9924 15.485 17.9924C14.0318 17.9924 12.8456 19.1786 12.8456 20.6318Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    d="M17.7388 23.9536C17.0864 24.3984 16.3154 24.6356 15.485 24.6356C14.6547 24.6356 13.8837 24.3688 13.2312 23.9536C11.9561 24.6654 11.096 26.0295 11.096 27.6012V28.1349C11.096 28.728 11.5706 29.2025 12.1636 29.2025H18.8065C19.3996 29.2025 19.8741 28.728 19.8741 28.1349V27.6012C19.8739 26.0295 19.014 24.6654 17.7387 23.9536H17.7388Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    opacity="0.5"
                                                    d="M11.0663 9.15515C11.3036 10.6379 12.5787 11.7945 14.1209 11.7945C14.625 11.7945 15.07 11.676 15.4852 11.4683C15.9003 11.676 16.3451 11.7945 16.8495 11.7945C18.3916 11.7945 19.6965 10.6676 19.904 9.15515C20.9123 8.65103 21.5945 7.613 21.5945 6.39726C21.5945 5.18132 20.9125 4.17307 19.904 3.63937C19.6667 2.15658 18.3916 1 16.8495 1C16.3453 1 15.9004 1.11853 15.4852 1.32623C15.07 1.11853 14.6253 1 14.1209 1C12.5787 1 11.2738 2.12698 11.0663 3.63937C10.0581 4.1435 9.37585 5.18153 9.37585 6.39726C9.37606 7.613 10.0581 8.65106 11.0663 9.15515ZM18.5989 5.3888C19.1625 5.3888 19.6072 5.83356 19.6072 6.39705C19.6072 6.96055 19.1624 7.4053 18.5989 7.4053C18.0354 7.4053 17.5907 6.96055 17.5907 6.39705C17.5907 5.83356 18.0354 5.3888 18.5989 5.3888ZM15.485 5.3888C16.0485 5.3888 16.4933 5.83356 16.4933 6.39705C16.4933 6.96055 16.0485 7.4053 15.485 7.4053C14.9215 7.4053 14.4768 6.96055 14.4768 6.39705C14.4768 5.83356 14.9215 5.3888 15.485 5.3888ZM12.3711 5.3888C12.9346 5.3888 13.3793 5.83356 13.3793 6.39705C13.3793 6.96055 12.9346 7.4053 12.3711 7.4053C11.8076 7.4053 11.3629 6.96055 11.3629 6.39705C11.3629 5.83356 11.8076 5.3888 12.3711 5.3888Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    d="M9.25737 15.9762C9.73192 15.9762 10.1173 15.5906 10.1173 15.1163C10.1173 14.6417 9.7317 14.2563 9.25737 14.2563C8.78283 14.2563 8.39746 14.6419 8.39746 15.1163C8.39746 15.5908 8.78305 15.9762 9.25737 15.9762Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    opacity="0.5"
                                                    d="M11.3036 12.0911C10.7105 12.0911 10.2064 12.5656 10.2064 13.1883C10.2064 13.7813 10.6809 14.2855 11.3036 14.2855C11.9265 14.2855 12.4008 13.811 12.4008 13.1883C12.3712 12.5656 11.8967 12.0911 11.3036 12.0911Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    d="M20.8527 15.1163C20.8527 15.5908 21.2383 15.9762 21.7126 15.9762C22.1872 15.9762 22.5726 15.5906 22.5726 15.1163C22.5726 14.6417 22.187 14.2563 21.7126 14.2563C21.2383 14.2563 20.8527 14.6417 20.8527 15.1163Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    opacity="0.5"
                                                    d="M19.6665 12.0911C19.0734 12.0911 18.5693 12.5656 18.5693 13.1883C18.5693 13.7813 19.0438 14.2855 19.6665 14.2855C20.2596 14.2855 20.7637 13.811 20.7637 13.1883C20.7637 12.5656 20.2892 12.0911 19.6665 12.0911Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    opacity="0.5"
                                                    d="M15.4851 12.5063C14.892 12.5063 14.3879 12.9809 14.3879 13.6036C14.3879 14.1966 14.8624 14.7008 15.4851 14.7008C16.0782 14.7008 16.5823 14.2262 16.5823 13.6036C16.5823 13.0105 16.0782 12.5063 15.4851 12.5063Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    d="M15.485 15.353C15.0105 15.353 14.6251 15.7386 14.6251 16.2129C14.6251 16.6875 15.0107 17.0729 15.485 17.0729C15.9596 17.0729 16.345 16.6873 16.345 16.2129C16.345 15.7386 15.9596 15.353 15.485 15.353Z"
                                                    fill="#B476E5"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_36_379">
                                                    <rect width="30" height="30" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="ltr:pl-3 rtl:pr-3">
                                        <h4 class="mb-2 text-lg font-bold text-white">Innovative Thinking</h4>
                                        <p class="font-semibold">There are many variations of passages of Lorem Ipsum available</p>
                                    </div>
                                </div>
                                <div class="flex transition">
                                    <div>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_36_392)">
                                                <path
                                                    opacity="0.5"
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M14.2364 27.9997V24.9966C12.4567 25.1078 11.1218 23.6617 11.1218 21.9935C11.1218 20.3249 12.4567 18.9904 14.2364 19.1015V16.0984H8.67477C8.89731 15.6535 9.3422 15.0973 9.3422 14.5412C9.3422 12.3167 6.00534 12.3167 6.00534 14.5412C6.00534 15.0975 6.33905 15.6535 6.56161 16.0984H1V27.1102C1 27.5551 1.44487 27.9999 1.88974 27.9999H14.2365L14.2364 27.9997Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M28.6959 16.0981H25.2477C25.3588 17.8778 24.0242 19.3238 22.3557 19.3238C20.576 19.3238 19.2412 17.8778 19.3526 16.0981H15.4595V20.7698C15.0146 20.6586 14.4584 20.3249 14.0135 20.3249C11.9001 20.3249 11.9001 23.6618 14.0135 23.6618C14.4584 23.6618 15.0146 23.4392 15.4595 23.2169V27.9997H27.8063C28.2511 27.9997 28.696 27.5549 28.696 27.11V16.0982L28.6959 16.0981Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M28.6731 14.9015V3.88974C28.6731 3.44487 28.2283 3 27.672 3H15.4367V5.89196C17.1052 5.66942 18.6624 7.00423 18.6624 8.78392C18.6624 10.5636 17.1052 11.8985 15.4367 11.6759V14.9016H20.9983C20.8871 15.3464 20.5534 15.9027 20.5534 16.3476C20.5534 18.5722 24.0017 18.5722 24.0017 16.3476C24.0017 15.9027 23.668 15.3465 23.4454 14.9016L28.6731 14.9015Z"
                                                    fill="#B476E5"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_36_392">
                                                    <rect width="30" height="30" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="ltr:pl-3 rtl:pr-3">
                                        <h4 class="mb-2 text-lg font-bold text-white">Rapid Solutions</h4>
                                        <p class="font-semibold">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                    </div>
                                </div>
                                <div class="flex transition">
                                    <div>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_36_401)">
                                                <path
                                                    opacity="0.5"
                                                    d="M9.68219 19.8007L10.8868 17.8733C11.9699 18.5518 13.2226 18.9106 14.5006 18.9086C15.7787 18.9106 17.0313 18.5518 18.1144 17.8733L19.319 19.8007C17.8749 20.7054 16.2047 21.184 14.5006 21.1814C12.7965 21.184 11.1263 20.7054 9.68219 19.8007Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    d="M24.7284 10.9537C25.3312 10.9537 25.9093 11.1932 26.3355 11.6194C26.7618 12.0457 27.0012 12.6238 27.0012 13.2265V17.7722C27.0012 18.375 26.7618 18.9531 26.3355 19.3794C25.9093 19.8056 25.3312 20.0451 24.7284 20.0451H23.5215C23.2445 22.2421 22.1752 24.2625 20.5143 25.7272C18.8534 27.1918 16.715 28 14.5006 28V25.7272C16.309 25.7272 18.0433 25.0088 19.322 23.7301C20.6007 22.4513 21.3191 20.717 21.3191 18.9086V12.0901C21.3191 10.2817 20.6007 8.54743 19.322 7.26871C18.0433 5.98999 16.309 5.27162 14.5006 5.27162C12.6922 5.27162 10.9579 5.98999 9.67919 7.26871C8.40047 8.54743 7.6821 10.2817 7.6821 12.0901V20.0451H4.27284C3.67004 20.0451 3.09194 19.8056 2.6657 19.3794C2.23946 18.9531 2 18.375 2 17.7722V13.2265C2 12.6238 2.23946 12.0457 2.6657 11.6194C3.09194 11.1932 3.67004 10.9537 4.27284 10.9537H5.47972C5.75704 8.75689 6.82646 6.73677 8.48733 5.27238C10.1482 3.808 12.2864 3 14.5006 3C16.7149 3 18.853 3.808 20.5139 5.27238C22.1748 6.73677 23.2442 8.75689 23.5215 10.9537H24.7284Z"
                                                    fill="#B476E5"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_36_401">
                                                    <rect width="30" height="30" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="ltr:pl-3 rtl:pr-3">
                                        <h4 class="mb-2 text-lg font-bold text-white">Top-Notch Support</h4>
                                        <p class="font-semibold">It has survived not only five centuries, but also the leap into electronic typesetting</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="top-1/2 mx-auto mt-10 ltr:right-5 rtl:left-5 md:w-[45%] lg:mt-0 xl:absolute xl:-translate-y-1/2">
                            <img src="/assets/images/box-img.png" alt="box-img" class="w-full rtl:rotate-y-180" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
                    <div class="heading text-center ltr:lg:text-left rtl:lg:text-right">
                        <h6>Awesome</h6>
                        <h4>Ecosystem</h4>
                    </div>
                    <!-- <div class="flex items-center justify-end gap-4">
                            <div class="text-sm font-extrabold text-black dark:text-white">View All</div>
                            <button type="button" class="bg-black/5 dark:bg-white/5 w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary dark:hover:bg-secondary transition">
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black dark:text-white">
                                    <path d="M5.95007 1.2002L1.48924 5.3424C1.06317 5.73803 1.06317 6.41236 1.48924 6.80799L5.95007 10.9502" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                            </button>
                            <button type="button" class="bg-black/5 dark:bg-white/5 text-p w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary dark:hover:bg-secondary transition">
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black dark:text-white">
                                    <path d="M1.05005 10.7998L5.51089 6.6576C5.93695 6.26197 5.93695 5.58764 5.51089 5.19201L1.05005 1.0498" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                            </button>
                        </div> -->
                </div>
                <!-- <div class="mb-7">
                    <ul class="filters home-filter mt-10 flex gap-8 overflow-x-auto whitespace-nowrap pb-3 font-bold lg:mt-0 lg:gap-10">
                        <li class="filter" :class="{ active: activeTab === 'all' }">
                            <button type="button" class="transition hover:text-secondary" @click="activeTab = 'all'">All Work</button>
                        </li>
                        <li class="filter" :class="{ active: activeTab === 'design' }">
                            <button type="button" class="transition hover:text-secondary" @click="activeTab = 'design'">Design</button>
                        </li>
                        <li class="filter" :class="{ active: activeTab === 'website' }">
                            <button type="button" class="transition hover:text-secondary" @click="activeTab = 'website'">Website</button>
                        </li>
                        <li class="filter" :class="{ active: activeTab === 'app' }">
                            <button type="button" class="transition hover:text-secondary" @click="activeTab = 'app'">Mobile App</button>
                        </li>
                        <li class="filter" :class="{ active: activeTab === 'web' }">
                            <button type="button" class="transition hover:text-secondary" @click="activeTab = 'web'">Web Application</button>
                        </li>
                        <li class="filter" :class="{ active: activeTab === 'ecommerce' }">
                            <button type="button" class="transition hover:text-secondary" @click="activeTab = 'ecommerce'">Ecommerce</button>
                        </li>
                    </ul>
                </div> -->
                <div class="projects grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div class="project" :class="activeTab === 'all' || activeTab === 'web' ? 'block' : 'hidden'">
                        <div
                            class="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none"
                        >
                            <router-link to="/portfolio-detail" class="absolute top-0 left-0 h-full w-full"></router-link>
                            <img src="/assets/images/project-1.png" alt="project-1" class="h-52 w-full rounded-t-3xl object-cover" />
                            <div class="p-5 text-sm font-bold">
                                <h6 class="mb-1 text-black dark:text-white">eLabs</h6>
                                <p>ecosis Laboratories</p>
                            </div>
                        </div>
                    </div>
                    <div class="project" :class="activeTab === 'all' || activeTab === 'ecommerce' ? 'block' : 'hidden'">
                        <div
                            class="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none"
                        >
                            <router-link to="/portfolio-detail" class="absolute top-0 left-0 h-full w-full"></router-link>
                            <img src="/assets/images/project-2.png" alt="project-2" class="h-52 w-full rounded-t-3xl object-cover" />
                            <div class="p-5 text-sm font-bold">
                                <h6 class="mb-1 text-black dark:text-white">ecosis Finance</h6>
                                <p>Rewarding Finance Gateway</p>
                            </div>
                        </div>
                    </div>
                    <div class="project" :class="activeTab === 'all' || activeTab === 'app' ? 'block' : 'hidden'">
                        <div
                            class="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none"
                        >
                            <router-link to="/portfolio-detail" class="absolute top-0 left-0 h-full w-full"></router-link>
                            <img src="/assets/images/project-3.png" alt="project-3" class="h-52 w-full rounded-t-3xl object-cover" />
                            <div class="p-5 text-sm font-bold">
                                <h6 class="mb-1 text-black dark:text-white">ecosis Shop</h6>
                                <p>Rewarding Shopping Experience</p>
                            </div>
                        </div>
                    </div>
                    <div class="project" :class="activeTab === 'all' || activeTab === 'design' ? 'block' : 'hidden'">
                        <div
                            class="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none"
                        >
                            <router-link to="/portfolio-detail" class="absolute top-0 left-0 h-full w-full"></router-link>
                            <img src="/assets/images/project-4.png" alt="project-4" class="h-52 w-full rounded-t-3xl object-cover" />
                            <div class="p-5 text-sm font-bold">
                                <h6 class="mb-1 text-black dark:text-white">ecosis Pro</h6>
                                <p>More soon</p>
                            </div>
                        </div>
                    </div>
                    <div class="project" :class="activeTab === 'all' || activeTab === 'app' ? 'block' : 'hidden'">
                        <div
                            class="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none"
                        >
                            <router-link to="/portfolio-detail" class="absolute top-0 left-0 h-full w-full"></router-link>
                            <img src="/assets/images/project-6.png" alt="project-6" class="h-52 w-full rounded-t-3xl object-cover" />
                            <div class="p-5 text-sm font-bold">
                                <h6 class="mb-1 text-black dark:text-white">ecosis Dev</h6>
                                <p>More soon</p>
                            </div>
                        </div>
                    </div>
                    <div class="project" :class="activeTab === 'all' || activeTab === 'website' ? 'block' : 'hidden'">
                        <div
                            class="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none"
                        >
                            <router-link to="/portfolio-detail" class="absolute top-0 left-0 h-full w-full"></router-link>
                            <img src="/assets/images/project-5.png" alt="project-5" class="h-52 w-full rounded-t-3xl object-cover" />
                            <div class="p-5 text-sm font-bold">
                                <h6 class="mb-1 text-black dark:text-white">ecosis Capital</h6>
                                <p>More soon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-14 dark:bg-gradient-to-t dark:from-white/[0.02] dark:to-transparent lg:py-20">
            <div class="container">
                <div class="relative">
                    <div class="lg:w-2/3">
                        <div class="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h6 class="!text-secondary">THOUSANDS OF BENIFITS</h6>
                            <h4 class="">We make it easy to track all user analytics</h4>
                            <p class="mt-4 text-lg font-semibold">
                                We analyze step wise for your every platform. You will get best reports and analytics. We helping to client with our talented
                                expert.
                            </p>
                        </div>
                        <ul class="mt-14 space-y-14 lg:w-2/3">
                            <li class="flex gap-5 sm:gap-8">
                                <div class="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-primary p-2 sm:h-[72px] sm:w-[72px]">
                                    <img src="/assets/images/modern-saas/tracking-icon.svg" alt="" />
                                </div>
                                <div class="flex-1">
                                    <h4 class="text-[22px] font-extrabold text-black dark:text-white">Advanced tracking</h4>
                                    <p class="pt-4 text-lg font-semibold">
                                        Use our analytics, reporting, and AI-assisted optimization tools to monitor trends, track.
                                    </p>
                                </div>
                            </li>
                            <li class="flex gap-5 sm:gap-8">
                                <div class="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-secondary p-2 sm:h-[72px] sm:w-[72px]">
                                    <img src="/assets/images/modern-saas/monitoring-icon.svg" alt="" />
                                </div>
                                <div class="flex-1">
                                    <h4 class="text-[22px] font-extrabold text-black dark:text-white">In-depth monitoring</h4>
                                    <p class="pt-4 text-lg font-semibold">Time Tracking is never been easier. Just let the stopwatch run.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <img
                        src="/assets/images/modern-saas/benifits-img.png"
                        alt=""
                        class="top-0 mx-auto mt-10 h-full ltr:-right-[125px] rtl:-left-[125px] lg:absolute lg:mt-0"
                    />
                </div>
            </div>
        </section>

        <section class="py-14 lg:py-20">
            <div class="container">
                <div class="relative grid items-center gap-y-10 lg:grid-cols-2 lg:gap-4">
                    <img
                        src="/assets/images/modern-saas/analysis-icon.svg"
                        alt=""
                        class="absolute top-0 block w-32 ltr:right-0 rtl:left-0 dark:hidden sm:w-72 lg:-top-16 lg:ltr:right-36 lg:rtl:left-36"
                    />
                    <img
                        src="/assets/images/modern-saas/analysis-icon-dark.svg"
                        alt=""
                        class="absolute top-0 hidden w-32 ltr:right-0 rtl:left-0 dark:block sm:w-72 lg:-top-16 lg:ltr:right-36 lg:rtl:left-36"
                    />
                    <div class="ltr:pr-24 rtl:pl-24 sm:ltr:pr-60 sm:rtl:pl-60 lg:ltr:pr-24 lg:rtl:pl-24" data-aos="fade-up" data-aos-duration="1000">
                        <img src="/assets/images/modern-saas/integration-img.png" alt="" />
                    </div>
                    <div class="heading mb-5 text-center ltr:lg:text-right rtl:lg:text-left">
                        <h6 class="!text-secondary">INTEGRATIONS</h6>
                        <h4 class="">Interoperable with platforms you already know and love</h4>
                        <p class="mt-4 text-lg font-semibold">
                            Leverage your existing accounts and bundle them into a powerful tool to get the most out of your data and finance!
                        </p>
                        <a
                            href="javascript:"
                            class="mt-8 inline-flex items-center gap-4 text-lg font-extrabold text-primary transition hover:text-secondary md:mt-12"
                        >
                            <span>Learn More</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.0398 3.96094C18.4495 2.36891 16.4227 1.28435 14.2158 0.844459C12.0089 0.404569 9.7212 0.629129 7.64196 1.48972C5.56274 2.35031 3.7855 3.80827 2.53506 5.67914C1.28462 7.55001 0.617188 9.7497 0.617188 12C0.617188 14.2503 1.28462 16.45 2.53506 18.3209C3.7855 20.1917 5.56274 21.6497 7.64196 22.5103C9.7212 23.3709 12.0089 23.5954 14.2158 23.1556C16.4227 22.7157 18.4495 21.6311 20.0398 20.0391C21.0961 18.9837 21.934 17.7305 22.5057 16.3511C23.0775 14.9717 23.3717 13.4932 23.3717 12C23.3717 10.5068 23.0775 9.0283 22.5057 7.64891C21.934 6.26952 21.0961 5.01632 20.0398 3.96094ZM15.9382 14.1875C15.9382 14.4196 15.8461 14.6421 15.682 14.8062C15.5179 14.9703 15.2953 15.0625 15.0632 15.0625C14.8312 15.0625 14.6086 14.9703 14.4445 14.8062C14.2804 14.6421 14.1882 14.4196 14.1882 14.1875V11.0484L9.5617 15.6859C9.3925 15.8446 9.1702 15.9344 8.9382 15.9375C8.7059 15.9365 8.4828 15.8465 8.3148 15.6859C8.1505 15.52 8.0583 15.296 8.0583 15.0625C8.0583 14.829 8.1505 14.605 8.3148 14.4391L12.9523 9.8125H9.8132C9.5812 9.8125 9.3586 9.7203 9.1945 9.5562C9.0304 9.3921 8.9382 9.1696 8.9382 8.9375C8.9382 8.7054 9.0304 8.4829 9.1945 8.3188C9.3586 8.1547 9.5812 8.0625 9.8132 8.0625H15.0632C15.1759 8.0622 15.2875 8.0845 15.3914 8.1281C15.6074 8.2155 15.7803 8.3845 15.8726 8.5984C15.9155 8.7064 15.9377 8.8214 15.9382 8.9375V14.1875Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-white/50 py-14 dark:bg-white/[0.03] lg:py-20">
            <div class="container">
                <div class="heading mb-5 text-center">
                    <h6 class="!text-secondary">Products</h6>
                    <h4 class="">Everything you need to live the life of tomorrow today!</h4>
                </div>
                <div
                    class="mt-14 grid gap-4 rounded-2xl py-8 px-4 sm:p-10 lg:mt-20 lg:grid-cols-2"
                    style="background: radial-gradient(193.33% 779.99% at 81.67% -6.05%, rgba(71, 189, 255, 0.3) 0%, rgba(71, 189, 255, 0) 100%)"
                >
                    <div class="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                        <h4 class="">Eco</h4>
                        <p class="mt-6 text-lg font-semibold">
                            The most easiest to use Cross-platform Account incl a Wallet on the world!
                        </p>
                        <a
                            href="javascript:"
                            class="mt-8 inline-flex items-center gap-4 text-lg font-extrabold text-primary transition hover:text-secondary lg:mt-14"
                        >
                            <span>Learn More</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.0398 3.96094C18.4495 2.36891 16.4227 1.28435 14.2158 0.844459C12.0089 0.404569 9.7212 0.629129 7.64196 1.48972C5.56274 2.35031 3.7855 3.80827 2.53506 5.67914C1.28462 7.55001 0.617188 9.7497 0.617188 12C0.617188 14.2503 1.28462 16.45 2.53506 18.3209C3.7855 20.1917 5.56274 21.6497 7.64196 22.5103C9.7212 23.3709 12.0089 23.5954 14.2158 23.1556C16.4227 22.7157 18.4495 21.6311 20.0398 20.0391C21.0961 18.9837 21.934 17.7305 22.5057 16.3511C23.0775 14.9717 23.3717 13.4932 23.3717 12C23.3717 10.5068 23.0775 9.0283 22.5057 7.64891C21.934 6.26952 21.0961 5.01632 20.0398 3.96094ZM15.9382 14.1875C15.9382 14.4196 15.8461 14.6421 15.682 14.8062C15.5179 14.9703 15.2953 15.0625 15.0632 15.0625C14.8312 15.0625 14.6086 14.9703 14.4445 14.8062C14.2804 14.6421 14.1882 14.4196 14.1882 14.1875V11.0484L9.5617 15.6859C9.3925 15.8446 9.1702 15.9344 8.9382 15.9375C8.7059 15.9365 8.4828 15.8465 8.3148 15.6859C8.1505 15.52 8.0583 15.296 8.0583 15.0625C8.0583 14.829 8.1505 14.605 8.3148 14.4391L12.9523 9.8125H9.8132C9.5812 9.8125 9.3586 9.7203 9.1945 9.5562C9.0304 9.3921 8.9382 9.1696 8.9382 8.9375C8.9382 8.7054 9.0304 8.4829 9.1945 8.3188C9.3586 8.1547 9.5812 8.0625 9.8132 8.0625H15.0632C15.1759 8.0622 15.2875 8.0845 15.3914 8.1281C15.6074 8.2155 15.7803 8.3845 15.8726 8.5984C15.9155 8.7064 15.9377 8.8214 15.9382 8.9375V14.1875Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </div>
                    <div class="lg:ltr:pl-24 lg:rtl:pr-24">
                        <img src="/assets/images/modern-saas/optimization.png" alt="" class="rounded-2xl" />
                    </div>
                </div>
                <div
                    class="mt-10 grid gap-4 rounded-2xl py-8 px-4 sm:p-10 lg:mt-16 lg:grid-cols-2"
                    style="background: radial-gradient(193.33% 779.99% at 81.67% -6.05%, rgba(180, 118, 229, 0.3) 0%, rgba(180, 118, 229, 0) 100%)"
                >
                    <div class="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                        <h4 class="">Nomics</h4>
                        <p class="mt-6 text-lg font-semibold">
                            The world most advanced Smart Contract Platform connected to the real world.
                        </p>
                        <a
                            href="javascript:"
                            class="mt-8 inline-flex items-center gap-4 text-lg font-extrabold text-secondary transition hover:text-primary lg:mt-14"
                        >
                            <span>Learn More</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.0398 3.96094C18.4495 2.36891 16.4227 1.28435 14.2158 0.844459C12.0089 0.404569 9.7212 0.629129 7.64196 1.48972C5.56274 2.35031 3.7855 3.80827 2.53506 5.67914C1.28462 7.55001 0.617188 9.7497 0.617188 12C0.617188 14.2503 1.28462 16.45 2.53506 18.3209C3.7855 20.1917 5.56274 21.6497 7.64196 22.5103C9.7212 23.3709 12.0089 23.5954 14.2158 23.1556C16.4227 22.7157 18.4495 21.6311 20.0398 20.0391C21.0961 18.9837 21.934 17.7305 22.5057 16.3511C23.0775 14.9717 23.3717 13.4932 23.3717 12C23.3717 10.5068 23.0775 9.0283 22.5057 7.64891C21.934 6.26952 21.0961 5.01632 20.0398 3.96094ZM15.9382 14.1875C15.9382 14.4196 15.8461 14.6421 15.682 14.8062C15.5179 14.9703 15.2953 15.0625 15.0632 15.0625C14.8312 15.0625 14.6086 14.9703 14.4445 14.8062C14.2804 14.6421 14.1882 14.4196 14.1882 14.1875V11.0484L9.5617 15.6859C9.3925 15.8446 9.1702 15.9344 8.9382 15.9375C8.7059 15.9365 8.4828 15.8465 8.3148 15.6859C8.1505 15.52 8.0583 15.296 8.0583 15.0625C8.0583 14.829 8.1505 14.605 8.3148 14.4391L12.9523 9.8125H9.8132C9.5812 9.8125 9.3586 9.7203 9.1945 9.5562C9.0304 9.3921 8.9382 9.1696 8.9382 8.9375C8.9382 8.7054 9.0304 8.4829 9.1945 8.3188C9.3586 8.1547 9.5812 8.0625 9.8132 8.0625H15.0632C15.1759 8.0622 15.2875 8.0845 15.3914 8.1281C15.6074 8.2155 15.7803 8.3845 15.8726 8.5984C15.9155 8.7064 15.9377 8.8214 15.9382 8.9375V14.1875Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </div>
                    <div class="lg:ltr:pl-24 lg:rtl:pr-24">
                        <img src="/assets/images/modern-saas/migrate-modernize.png" alt="" class="rounded-2xl" />
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-[url(/assets/images/team-bg.png)] bg-cover bg-center bg-no-repeat py-14 dark:bg-black/50 lg:py-[100px]">
            <div class="container">
                <div class="heading text-center">
                    <h6>Our</h6>
                    <h4>Partners</h4>
                </div>
                <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div class="group cursor-pointer text-center">
                        <div class="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/team-member-1.png" alt="team-member-1" class="h-full w-full rounded-3xl object-cover object-top" />
                        </div>
                        <h4 class="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            Change Now
                        </h4>
                        <h6 class="text-sm font-bold">Crypto Exchange</h6>
                    </div>
                    <div class="group cursor-pointer text-center">
                        <div class="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/team-member-2.png" alt="team-member-2" class="h-full w-full rounded-3xl object-cover object-top" />
                        </div>
                        <h4 class="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            Purism
                        </h4>
                        <h6 class="text-sm font-bold">Beautify, Privacy-respecting Devices</h6>
                    </div>
                    <div class="group cursor-pointer text-center">
                        <div class="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/team-member-3.png" alt="team-member-3" class="h-full w-full rounded-3xl object-cover object-top" />
                        </div>
                        <h4 class="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            SheFan Pro
                        </h4>
                        <h6 class="text-sm font-bold">Womens Empowerment Blockchain</h6>
                    </div>
                    <div class="group cursor-pointer text-center">
                        <div class="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/team-member-4.png" alt="team-member-4" class="h-full w-full rounded-3xl object-cover object-top" />
                        </div>
                        <h4 class="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            Revolut
                        </h4>
                        <h6 class="text-sm font-bold">One App, All things Money</h6>
                    </div>

                    <div class="group cursor-pointer text-center">
                        <div class="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/team-member-4.png" alt="team-member-4" class="h-full w-full rounded-3xl object-cover object-top" />
                        </div>
                        <h4 class="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            FAB
                        </h4>
                        <h6 class="text-sm font-bold">Fintech and Blockchain Association</h6>
                    </div>
                </div>
            </div>
        </section>

        <!-- <Testimonial class="py-14 lg:py-[100px]"></Testimonial> -->

        <section class="py-14 dark:bg-gray-dark lg:py-[100px]">
            <div class="container">
                <div class="relative z-10 lg:flex">
                    <div class="heading text-center lg:mb-0 lg:w-1/3 ltr:lg:pr-10 ltr:lg:text-left rtl:lg:pl-10 rtl:lg:text-right">
                        <h6>Want to become a partner?</h6>
                        <h4 class="sm:!leading-[50px]">Let's get started!</h4>
                        <img
                            src="/assets/images/form-img.png"
                            alt="form-img"
                            class="mx-auto"
                            :data-aos="store.direction === 'rtl' ? 'fade-left' : 'fade-right'"
                            data-aos-duration="1000"
                        />
                    </div>
                    <form action="" class="rounded-3xl bg-white px-4 py-12 dark:bg-[#101626] lg:w-2/3 lg:px-8">
                        <div class="grid gap-10 sm:grid-cols-2">
                            <div class="relative">
                                <input
                                    type="text"
                                    name="name"
                                    class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                />
                                <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                                    >Full Name</label
                                >
                                <svg
                                    width="20"
                                    height="22"
                                    viewBox="0 0 20 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                >
                                    <path
                                        d="M5.42855 5.57875C5.42855 8.10348 7.47525 10.1502 9.99998 10.1502C12.5247 10.1502 14.5714 8.10348 14.5714 5.57875C14.5714 3.05402 12.5247 1.00732 9.99998 1.00732"
                                        stroke="currentColor"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M2 16.9328C2 15.9495 2.61812 15.0724 3.5441 14.7417V14.7417C7.71891 13.2507 12.2811 13.2507 16.4559 14.7417V14.7417C17.3819 15.0724 18 15.9495 18 16.9328V18.7014C18 19.9185 16.922 20.8535 15.7172 20.6813L13.8184 20.4101C11.2856 20.0483 8.71435 20.0483 6.18162 20.4101L4.28284 20.6813C3.07798 20.8535 2 19.9185 2 18.7014V16.9328Z"
                                        stroke="currentColor"
                                        stroke-width="1.8"
                                    />
                                </svg>
                            </div>
                            <div class="relative">
                                <input
                                    type="email"
                                    name="email"
                                    class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                />
                                <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                                    >Email Address</label
                                >
                                <svg
                                    width="22"
                                    height="21"
                                    viewBox="0 0 22 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                >
                                    <path
                                        d="M1 8.00732V7.00732C1 4.2459 3.23858 2.00732 6 2.00732H16C18.7614 2.00732 21 4.2459 21 7.00732V13.0073C21 15.7687 18.7614 18.0073 16 18.0073H6C3.23858 18.0073 1 15.7687 1 13.0073V12.0073"
                                        stroke="currentColor"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M5 7.00732L9.8 10.6073C10.5111 11.1407 11.4889 11.1407 12.2 10.6073L17 7.00732"
                                        stroke="currentColor"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <div class="relative">
                                <input
                                    type="text"
                                    name="mobile"
                                    class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                />
                                <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                                    >Mobile Number</label
                                >
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                >
                                    <path
                                        d="M6.45241 1.40806C5.45292 0.783702 4.14202 0.887138 3.2983 1.73086L1.86856 3.1606C-0.302899 5.33207 1.73747 10.8931 6.42586 15.5815C11.1142 20.2699 16.6753 22.3102 18.8467 20.1388L20.2765 18.709C21.2635 17.722 21.2374 16.0956 20.2182 15.0764L18.0036 12.8619C16.9844 11.8426 15.358 11.8165 14.371 12.8036L14.0639 13.1107C13.531 13.6436 12.6713 13.6957 12.0713 13.2005C11.4925 12.7229 10.9159 12.208 10.3576 11.6497C9.79933 11.0914 9.28441 10.5149 8.80678 9.93607C8.31161 9.33601 8.36374 8.47631 8.89666 7.9434L9.20375 7.63631C9.98187 6.85819 10.1303 5.68271 9.65898 4.72062"
                                        stroke="currentColor"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </div>
                            <div class="relative">
                                <input
                                    type="text"
                                    name="city"
                                    class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                />
                                <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                                    >City</label
                                >
                                <svg
                                    width="20"
                                    height="22"
                                    viewBox="0 0 20 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                >
                                    <path
                                        d="M5.89416 2.31259C7.20149 1.48625 8.75475 1.00732 10.4211 1.00732C15.0719 1.00732 18.8421 4.73828 18.8421 9.34066C18.8421 15.0541 12.1053 21.0073 10.4211 21.0073C8.73684 21.0073 2 15.0541 2 9.34066C2 7.87581 2.38193 6.49924 3.05263 5.30315"
                                        stroke="currentColor"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M13.4571 9.77392C13.5365 9.49702 13.579 9.20456 13.579 8.90216C13.579 7.15811 12.1651 5.74427 10.4211 5.74427C8.67702 5.74427 7.26318 7.15811 7.26318 8.90216C7.26318 10.6462 8.67702 12.0601 10.4211 12.0601C10.6633 12.0601 10.8991 12.0328 11.1256 11.9812"
                                        stroke="currentColor"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div class="relative mt-10">
                            <input
                                type="text"
                                name="message"
                                class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                            />
                            <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                                >Message</label
                            >
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                            >
                                <path
                                    d="M1 11.467V18.9267C1 19.7652 1.96993 20.2314 2.6247 19.7076L5.45217 17.4456C5.8068 17.1619 6.24742 17.0073 6.70156 17.0073H16C18.7614 17.0073 21 14.7687 21 12.0073V6.00732C21 3.2459 18.7614 1.00732 16 1.00732H6C3.23858 1.00732 1 3.2459 1 6.00732V7.62225"
                                    stroke="currentColor"
                                    stroke-width="1.8"
                                    stroke-linecap="round"
                                />
                                <circle cx="6.05005" cy="9.05713" r="1.25" fill="currentColor" />
                                <circle cx="11.05" cy="9.05713" r="1.25" fill="currentColor" />
                                <circle cx="16.05" cy="9.05713" r="1.25" fill="currentColor" />
                            </svg>
                        </div>
                        <div class="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                            <button type="button" class="btn bg-gray px-12 capitalize text-white dark:bg-white dark:text-black dark:hover:bg-secondary">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import Testimonial from '@/components/Testimonial.vue';
    import Counter from '@/components/Counter.vue';
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();

    const activeTab = ref('all');
</script>
