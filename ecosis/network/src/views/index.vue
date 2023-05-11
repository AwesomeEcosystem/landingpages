<template>
    <div class="overflow-x-hidden bg-black">

        <!-- Hero  -->
        <section class="overflow-hidden pt-[82px] sm:-mx-[250px] sm:rounded-b-[50%]">
            <div class="relative">
                <div class="container">
                    <div class="relative md:flex bg-[url('/assets/images/world-map.png')] bg-cover bg-top bg-no-repeat pt-14 pb-0 lg:pt-20 lg:pb-60 xl:pt-36">
                        <div class="relative z-[1] text-center text-white lg:w-3/5 ltr:lg:text-left rtl:lg:text-right xl:w-1/2">
                            <h2 class="text-xl font-bold leading-normal sm:text-5xl lg:text-[50px]">
                              Built <span class="italic text-primary">to save money </span> and <span class="italic text-secondary"> boost earnings</span>
                            </h2>
                            <p class="my-8 text-lg lg:w-[100%]">
                              The world’s first decentralised payment solution that significantly reduces transaction costs for businesses.
                            </p>
                            <div class="flex justify-center md:justify-start">
                                <div class="m-2">
                                    <a href="https://airtable.com/shruP2nuVOBvsktsf" target="_blank" class="btn bg-white mx-auto mt-2 block w-fit lg:mx-0 lg:rtl:ml-auto px-4">Get Early Access</a>
                                </div>
                                <div class="m-2">
                                    <router-link to="/#about" class="btn bg-transparent text-white underline mx-auto mt-2 block w-fit lg:mx-0 lg:rtl:ml-auto px-4">Learn more</router-link>
                                </div>
                            </div>
                        </div>
                        <div
                            class="mx-auto mt-5 mb-2 w-auto ltr:right-0 rtl:left-0 md:w-[540px] lg:mb-0 lg:mt-0 xl:w-[650px]"
                            data-aos-duration="1000"
                            data-aos-offset="0"
                            data-aos-delay="300"
                        >
                            <img src="/assets/images/screenshots/dev_package_alt.png" alt="" class="relative bottom-0" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About -->
        <section class="bg-[#1E2532] py-14 lg:py-[100px]" id="about">
            <div class="heading text-center !text-white pt-8">
                <h6>Why</h6>
                <h3 class="!text-white text-2xl">Legacy payment solution costs are a major burden on business revenue.</h3>
            </div>
            <div class="container">
                <div class="heading text-center !text-white">
                    <h6>Features</h6>
                    <h4 class="!text-white">How it works</h4>
                </div>
                <div class="mt-16 grid gap-x-7 gap-y-12 text-lg font-semibold sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-20">
                    <div class="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                        <div class="h-10 w-10 flex-none text-white">
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
                            <h3 class="mb-6 text-[22px] font-extrabold text-white">Smart</h3>
                            <p class="!text-white">Inbuilt smart asset management utilises deposit tokens to reduce third-party transaction costs.</p>
                        </div>
                    </div>
                    <div class="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                        <div class="h-10 w-10 flex-none text-white">
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
                            <h3 class="mb-6 text-[22px] font-extrabold text-white">Rewarding</h3>
                            <p class="!text-white">Retain your customers and increase your sales with our inbuilt rewards system at no additional cost.</p>
                        </div>
                    </div>
                    <div class="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                        <div class="h-10 w-10 flex-none text-white">
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
                            <h3 class="mb-6 text-[22px] font-extrabold text-white">Efficient</h3>
                            <p class="!text-white">Leverages a dedicated decentralised infrastructure for security, scalability and efficiency.</p>
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
                            <h3 class="mb-6 text-[22px] font-extrabold text-white">Interoperable</h3>
                            <p class="!text-white">Interoperable with common banking & e-commerce solutions.</p>
                        </div>
                    </div>

                </div>

                <div class="flex flex-col items-center justify-center pt-16">
                    <div class="flex justify-center md:justify-start">
                        <div class="m-2">
                            <a href="https://airtable.com/shruP2nuVOBvsktsf" target="_blank" class="btn bg-white mx-auto mt-2 block w-fit lg:mx-0 lg:rtl:ml-auto px-4">Get Early Access</a>
                        </div>
                        <div class="m-2">
                            <router-link to="/#guide" class="btn bg-transparent text-white underline mx-auto mt-2 block w-fit lg:mx-0 lg:rtl:ml-auto px-4">Learn more</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Guide -->
        <section class="bg-black py-14 lg:py-[100px]" id="guide">
            <div class="container pt-8">
                <div class="heading text-center !text-white">
                    <h6>Guide</h6>
                    <h4 class="!text-white">How to use it</h4>
                </div>
                <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="group rounded-3xl border-2 border-[#1B222F] p-6 transition duration-500 h"
                            style="box-shadow: -20px 30px 70px rgba(219, 222, 225, 0.1)"
                        >
                            <div
                                class="flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition"
                                style="box-shadow: 0px 15px 30px rgba(180, 118, 229, 0.4)"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" fill="white"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
                            </div>
                            <!-- <div
                                to="/services-detail"
                                class="my-8 inline-block text-[22px] font-extrabold text-white"
                                >Simple Login & Deposit
                            </div> -->
                            <p class="!text-white my-12 pb-1 text-lg font-semibold transition line-clamp-3">
                                Create an account with social media, or e-mail
                            </p>
                            <div
                                to="services-detail"
                                class="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition rtl:rotate-180 dark:bg-gray-dark"
                            >
                              <p class="font-semibold">
                                1
                              </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="group rounded-3xl border-2 border-[#1B222F] p-6 transition duration-500 h"
                            style="box-shadow: -20px 30px 70px rgba(219, 222, 225, 0.1)"
                        >
                            <div
                                class="flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition"
                                style="box-shadow: 0px 15px 30px rgba(180, 118, 229, 0.4)"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="white" width="24" height="24  "><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                            </div>
                            <!-- <div
                                to="/services-detail"
                                class="my-8 inline-block text-[22px] font-extrabold text-white"
                                >Shop or Send money
                            </div> -->
                            <p class="!text-white my-12 pb-1 text-lg font-semibold transition line-clamp-3">
                                Integrate checkout into your storefront easily
                            </p>
                            <div
                                to="services-detail"
                                class="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition rtl:rotate-180 dark:bg-gray-dark"
                            >
                              <p class="font-semibold">
                                2
                              </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="group rounded-3xl border-2 border-[#1B222F] p-6 transition duration-500 h"
                            style="box-shadow: -20px 30px 70px rgba(219, 222, 225, 0.1)"
                        >
                            <div
                                class="flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition"
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
                            <!-- <div
                                class="my-8 inline-block text-[22px] font-extrabold text-white"
                                >Earn Rewards
                            </div> -->
                            <p class="!text-white my-12 pb-1 text-lg font-semibold transition line-clamp-3">
                                Enjoy unparalleled cost savings and withdraw your funds.
                            </p>
                            <div
                                to="services-detail"
                                class="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition rtl:rotate-180 dark:bg-gray-dark"
                            >
                              <p class="font-semibold">
                                3
                              </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col items-center justify-center pt-16">
                    <div class="flex justify-center md:justify-start">
                        <div class="m-2">
                            <a href="https://airtable.com/shruP2nuVOBvsktsf" target="_blank" class="btn bg-white mx-auto mt-2 block w-fit lg:mx-0 lg:rtl:ml-auto px-4">Get Early Access</a>
                        </div>
                        <!-- <div class="m-2">
                            <router-link to="/#team" class="btn bg-transparent text-white underline mx-auto mt-2 block w-fit lg:mx-0 lg:rtl:ml-auto px-4">Learn more</router-link>
                        </div> -->
                    </div>
                </div>
            </div>
        </section>

        <!-- Screenshot -->

        <!-- Partners -->
        <section class="bg-[#1E2532] py-8 lg:py-[100px]" id="partner">
            <div class="">
                <div class="heading text-center !text-white">
                    <h6>Our</h6>
                    <h4 class="!text-white">Partners</h4>
                </div>
                <div class="flex flex-wrap justify-center">
                    <a class="cursor-pointer text-center px-4" href="https://changenow.io/" target="_blank">
                        <div class="flex justify-center items-center py-4 w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/changenow_light.png" alt="team-member-1" class="h-24 w-24 rounded-3xl" />
                        </div>
                        <!-- <h4 class="p-2 text-xl font-extrabold text-white transition duration-500 group-hover:text-secondary">
                            Change Now
                        </h4> -->
                        <!-- <h6 class="text-sm font-bold">Crypto Exchange</h6> -->
                    </a>
                    <a class="cursor-pointer text-center px-4" href="https://www.revolut.com/" target="_blank">
                        <div class="flex justify-center items-center py-4  w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/revolut.png" alt="team-member-4" class="h-24 w-24 rounded-3xl" />
                        </div>
                        <!-- <h4 class="p-2 text-xl font-extrabold text-white transition duration-500 group-hover:text-secondary">
                            Revolut
                        </h4> -->
                        <!-- <h6 class="text-sm font-bold">One App, All things Money</h6> -->
                    </a>
                    <a class="cursor-pointer text-center px-4" href="https://www.estglobalinc.com/" target="_blank">
                        <div class="flex justify-center items-center py-4  w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/fab_light.png" alt="team-member-4" class="h-24 w-24 rounded-3xl" />
                        </div>
                        <!-- <h4 class="p-2 text-xl font-extrabold text-white transition duration-500 group-hover:text-secondary">
                            FAB
                        </h4> -->
                        <!-- <h6 class="text-sm font-bold">Fintech and Blockchain Association</h6> -->
                    </a>
                    <a class="cursor-pointer text-center px-4" href="https://www.shefan.pro/" target="_blank">
                        <div class="flex justify-center items-center py-4 w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/shefan_light.png" alt="team-member-3" class="h-24 w-24 rounded-3xl" />
                        </div>
                        <!-- <h4 class="p-2 text-xl font-extrabold text-white transition duration-500 group-hover:text-secondary">
                            SheFan Pro
                        </h4> -->
                        <!-- <h6 class="text-sm font-bold">Womens Empowerment Blockchain</h6> -->
                    </a>
                    <a class="cursor-pointer text-center px-4" href="https://puri.sm/" target="_blank">
                        <div class="flex justify-center items-center py-4 w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/purism_light.png" alt="team-member-2" class="h-24 w-24 rounded-3xl" />
                        </div>
                        <!-- <h4 class="p-2 text-xl font-extrabold text-white transition duration-500 group-hover:text-secondary">
                            Purism
                        </h4> -->
                        <!-- <h6 class="text-sm font-bold">Beautify, Privacy-respecting Devices</h6> -->
                    </a>
                    <a class="cursor-pointer text-center px-4" href="https://discord.gg/RrgAb9dwYE" target="_blank">
                        <div class="flex justify-center items-center py-4 w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/forge_light.png" alt="team-member-2" class="h-24 w-24 rounded-3xl" />
                        </div>
                        <!-- <h4 class="p-2 text-xl font-extrabold text-white transition duration-500 group-hover:text-secondary">
                            The Forge
                        </h4> -->
                        <!-- <h6 class="text-sm font-bold">Dev Projects</h6> -->
                    </a>
                    <a class="cursor-pointer text-center px-4" href="https://kalipo.io/" target="_blank">
                        <div class="flex justify-center items-center py-4 w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/kalipo_light.png" alt="team-member-2" class="h-24 w-24 rounded-3xl" />
                        </div>
                        <!-- <h4 class="p-2 text-xl font-extrabold text-white transition duration-500 group-hover:text-secondary">
                            Kalipo
                        </h4> -->
                        <!-- <h6 class="text-sm font-bold">DAO as a Service</h6> -->
                    </a>
                    <a class="cursor-pointer text-center px-4" href="https://www.spirinova.dev/" target="_blank">
                        <div class="flex justify-center items-center py-4 w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/spirinova_light.png" alt="team-member-2" class="h-24 w-24 rounded-3xl" />
                        </div>
                        <!-- <h4 class="p-2 text-xl font-extrabold text-white transition duration-500 group-hover:text-secondary">
                            Spirinova
                        </h4> -->
                        <!-- <h6 class="text-sm font-bold">Spirit of Innovation</h6> -->
                    </a>
                </div>
            </div>
        </section>

        <!-- Team -->
        <section class="bg-black py-14 lg:py-[100px]" id="team">
            <div class="container pt-8">
                <div class="heading text-center !text-white">
                    <h6>Experts</h6>
                    <h4 class="!text-white">Team</h4>
                    <h3 class="!text-white text-xl">
                      We create a payment solution that benefits from <br>
                      cutting-edge technologies for maximum efficiency <br>
                      and flexibility in modern businesses!</h3>
                </div>
                <div class="flex flex-wrap justify-center items-center">
                    <a class="group cursor-pointer text-center m-4" href="https://www.linkedin.com/in/chriselabs/" target="_blank">
                        <div class="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/profiles/ChrisLinkedIn_600.png" alt="leader-1" class="h-full w-full rounded-3xl object-cover object-top" />
                        </div>
                        <div class="flex ml-12 justify-center">
                            <h4 class="pt-5 pb-2 text-xl font-extrabold text-white transition duration-500 group-hover:text-secondary">
                                Christopher Müller
                            </h4>
                            <svg
                                class="m-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                width="16"
                                height="16"
                                fill="none"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                  fill="white"
                                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                              />
                            </svg>
                        </div>
                        <div class="">
                          <h6 class="text-sm font-bold">Chief Executive Officer</h6>
                          <h6 class="text-sm italic">FinTech & Infrastructure Expert</h6>
                        </div>
                    </a>
                    <a class="group cursor-pointer text-center m-4" href="https://www.linkedin.com/in/navneet-singhrol/" target="_blank">
                        <div class="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/profiles/NavLinkedIn_600.png" alt="leader-2" class="h-full w-full rounded-3xl object-cover object-top" />
                        </div>
                        <div class="flex ml-12 justify-center">
                            <h4 class="pt-5 pb-2 text-xl font-extrabold text-white transition duration-500 group-hover:text-secondary">
                                Navneet Singhrol
                            </h4>
                            <svg
                                class="m-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                width="16"
                                height="16"
                                fill="none"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                  fill="white"
                                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                              />
                            </svg>
                        </div>
                        <div class="">
                          <h6 class="text-sm font-bold">Chief Operating Officer</h6>
                          <h6 class="text-sm italic">Business & Product Strategist</h6>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        <!-- Screenshot -->
        <section class="bg-[#1E2532] pt-14">
            <div class="flex flex-col items-center justify-center">
                <div class="flex justify-center md:justify-start">
                    <div class="">
                        <a href="https://airtable.com/shruP2nuVOBvsktsf" target="_blank" class="btn bg-white mx-auto block w-fit lg:mx-0 lg:rtl:ml-auto px-4">Get Early Access</a>
                    </div>
                    <!-- <div class="m-2">
                        <router-link to="/#team" class="btn bg-transparent text-white underline mx-auto mt-2 block w-fit lg:mx-0 lg:rtl:ml-auto px-4">Learn more</router-link>
                    </div> -->
                </div>
            </div>
            <div class="flex flex-col items-center justify-center">
                <div class="flex justify-center md:justify-start">
                    <div
                        class="mx-auto mt-5 w-auto md:w-2/3 relativ"
                        data-aos-duration="1000"
                        data-aos-offset="0"
                        data-aos-delay="300"
                    >
                        <img src="/assets/images/screenshots/mockup_cut.png" alt="" class="relative bottom-0"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import Testimonial from '@/components/Testimonial.vue';
    import Counter from '@/components/Counter.vue';
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();

    const activeTab = ref('all');
    const dialog: any = ref(null);

    onMounted(() => {
    })
</script>
