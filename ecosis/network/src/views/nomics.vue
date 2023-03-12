<template>
    <div>
        <div class="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <img src="/assets/images/banner-lefticon.png" alt="banner-lefticon" class="absolute left-0 top-20" />
                <img src="/assets/images/banner-rightIcon.png" alt="banner-rightIcon" class="absolute right-0 -top-4" />
                <div class="container">
                    <div class="relative flex flex-col items-center bg-[url('/assets/images/world-map.png')] bg-cover bg-top bg-no-repeat lg:flex-row lg:py-9">
                        <div class="flex-1 py-10 text-center text-white ltr:lg:text-left rtl:lg:text-right">
                            <h2 class="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[55px] lg:leading-[70px]">
                               <span class="italic text-primary">Money</span> matters, technology <span class="italic text-secondary">empowers</span>
                            </h2>
                            <p class="my-5 text-lg lg:my-8">
                                The universal smart contract platform
                            </p>
                            <a class="btn mx-auto mt-2 block bg-white py-[18px] px-8 rtl:ml-auto lg:mx-0 w-64" href="https://kcha60ohz1u.typeform.com/to/ShJeY8a2" target="_blank">Contact Us</a>
                        </div>
                        <div>
                            <img
                                src="/assets/logos/nomics.png"
                                alt="crypto-banner"
                                class="rtl:rotate-y-0 mx-auto w-full max-w-[560px] p-24"
                                :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
                                data-aos-duration="1000"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Stats -->
        <section class="pt-12">
            <div class="container">
                <div class="text-center py-12">
                    <h3 class="text-xl font-bold leading-[25px] text-black dark:text-white">Testnet Data</h3>
                    <h4 class="mt-2 text-lg font-semibold text-primary">Performance</h4>
                </div>
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div class="rounded-[18px] bg-white p-4 dark:bg-black" data-aos="fade-up" data-aos-duration="1000">
                        <div class="flex justify-between">
                            <div class="flex items-center gap-2.5">
                                <h4 class="text-lg font-bold text-black dark:text-white">Transaction Volume</h4>
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
                                <h3 class="text-xl font-bold leading-[25px] text-black dark:text-white">$6,623.54</h3>
                                <h4 class="mt-2 text-lg font-semibold text-[#12AF97]">1.41%</h4>
                            </div>
                            <div>
                                <apexchart height="55" :options="successChartOptions" :series="successChartSeries"></apexchart>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-[18px] bg-white p-4 dark:bg-black" data-aos="fade-up" data-aos-duration="1000">
                        <div class="flex justify-between">
                            <div class="flex items-center gap-2.5">
                                <h4 class="text-lg font-bold text-black dark:text-white">Distributed Rewards</h4>
                            </div>
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
                        <div class="my-4 h-[1px] bg-[#11011E] opacity-5"></div>
                        <div class="flex items-center justify-between gap-2">
                            <div>
                                <h3 class="text-xl font-bold leading-[25px] text-black dark:text-white">$4,267.90</h3>
                                <h4 class="mt-2 text-lg font-semibold text-[#12AF97]">2.22%</h4>
                            </div>
                            <div>
                                <apexchart height="55" :options="successChartOptions" :series="successChartSeries"></apexchart>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-[18px] bg-white p-4 dark:bg-black" data-aos="fade-up" data-aos-duration="1000">
                        <div class="flex justify-between">
                            <div class="flex items-center gap-2.5">
                                <h4 class="text-lg font-bold text-black dark:text-white">Total Value Locked</h4>
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
                                <h3 class="text-xl font-bold leading-[25px] text-black dark:text-white">$587.74</h3>
                                <h4 class="mt-2 text-lg font-semibold text-[#12AF97]">0.82%</h4>
                            </div>
                            <div>
                                <apexchart height="55" :options="successChartOptions" :series="successChartSeries"></apexchart>
                            </div>
                        </div>
                    </div>

                    <div class="rounded-[18px] bg-white p-4 dark:bg-black" data-aos="fade-up" data-aos-duration="1000">
                        <div class="flex justify-between">
                            <div class="flex items-center gap-2.5">
                                <h4 class="text-lg font-bold text-black dark:text-white">Created Wallets</h4>
                            </div>
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
                        <div class="my-4 h-[1px] bg-[#11011E] opacity-5"></div>
                        <div class="flex items-center justify-between gap-2">
                            <div>
                                <h3 class="text-xl font-bold leading-[25px] text-black dark:text-white">10</h3>
                                <h4 class="mt-2 text-lg font-semibold text-[#12AF97]">4.3%</h4>
                            </div>
                            <div>
                                <apexchart height="55" :options="successChartOptions" :series="successChartSeries"></apexchart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About -->
        <section class="pt-12 lg:pt-24">
            <div class="container">
                <div class="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-0">
                    <div class="text-center ltr:md:text-left rtl:md:text-right">
                        <h6 class="mb-3 text-lg font-extrabold text-primary sm:mb-4">ABOUT</h6>
                        <h2 class="max-w-[457px] text-2xl font-extrabold text-black dark:text-white sm:text-3xl lg:text-[40px] lg:!leading-[50px]">
                            Build smart economies
                        </h2>
                        <p class="mt-[18px] max-w-[522px] text-lg font-semibold">
                            Transform your financial operations with our platform! Say goodbye to manual processes and hello to seamless automation. Customize and integrate with ease, creating the perfect solution for your business. Experience game-changing results with our cutting-edge technology. Start streamlining your cash flow today!
                        </p>
                        <a class="btn mt-7 text-white" href="https://kcha60ohz1u.typeform.com/to/ShJeY8a2" target="_blank">Contact Us</a>
                        <!-- <button type="button" class="btn mt-7 text-white">Waitlist</button> -->
                    </div>
                    <div>
                        <img src="/assets/images/crypto/crypto-about-img.png" class="w-full max-w-[550px] rtl:rotate-y-180" alt="crypto-about-img" />
                    </div>
                </div>
            </div>
        </section>

        <section class="py-14 dark:!bg-none lg:py-24">
            <div class="container">
                <div class="grid gap-4 sm:grid-cols-2 md:gap-[30px] lg:grid-cols-4" data-aos="fade-up" data-aos-duration="1000">
                    <div>
                        <div
                            class="group cursor-pointer items-baseline rounded-3xl border border-white bg-white py-10 px-6 transition duration-500 hover:border-secondary hover:bg-secondary/10 dark:border-transparent dark:bg-black dark:hover:bg-secondary"
                        >
                            <div class="text-center">
                                <count-up
                                    class="pb-2.5 text-4xl font-black leading-none transition dark:text-gray dark:group-hover:text-black"
                                    :startVal="0"
                                    :end-val="10"
                                    :duration="10"
                                    :delay="10"
                                    :options="{ suffix: 'sec' }"
                                ></count-up>
                                <span class="font-bold text-black transition dark:text-white dark:group-hover:text-black">Blocktime</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            class="group cursor-pointer items-baseline rounded-3xl border border-white bg-white py-10 px-6 transition duration-500 hover:border-secondary hover:bg-secondary/10 dark:border-transparent dark:bg-black dark:hover:bg-secondary"
                        >
                            <div class="text-center">
                                <count-up
                                    class="pb-2.5 text-4xl font-black leading-none transition dark:text-gray dark:group-hover:text-black"
                                    :startVal="0"
                                    :end-val="10"
                                    :duration="10"
                                    :delay="10"
                                    :options="{ suffix: 'k' }"
                                ></count-up>
                                <span class="font-bold text-black transition dark:text-white dark:group-hover:text-black">Tx per Block</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            class="group cursor-pointer items-baseline rounded-3xl border border-white bg-white py-10 px-6 transition duration-500 hover:border-secondary hover:bg-secondary/10 dark:border-transparent dark:bg-black dark:hover:bg-secondary"
                        >
                            <div class="text-center">
                                <count-up
                                    class="pb-2.5 text-4xl font-black leading-none transition dark:text-gray dark:group-hover:text-black"
                                    :startVal="0"
                                    :end-val="371"
                                    :duration="10"
                                    :delay="10"
                                ></count-up>
                                <span class="font-bold text-black transition dark:text-white dark:group-hover:text-black">Delegates</span>
                            </div>
                        </div>
                    </div>
                    <!-- <div>
                        <div
                            class="group cursor-pointer items-baseline rounded-3xl border border-white bg-white py-10 px-6 transition duration-500 hover:border-secondary hover:bg-secondary/10 dark:border-transparent dark:bg-black dark:hover:bg-secondary"
                        >
                            <div class="text-center">
                                <count-up
                                    class="pb-2.5 text-4xl font-black leading-none transition dark:text-gray dark:group-hover:text-black"
                                    :startVal="0"
                                    :end-val="1254"
                                    :duration="10"
                                    :delay="10"
                                    :options="{ suffix: '+' }"
                                ></count-up>
                                <span class="font-bold text-black transition dark:text-white dark:group-hover:text-black">Collections</span>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </section>

        <section class="bg-black py-12 lg:py-24">
            <div class="bg-[url(/assets/images/crypto/background-img.png)] bg-cover bg-center bg-no-repeat">
                <div class="container">
                    <div class="heading text-center">
                        <h6>We Can Shape Your Vision</h6>
                        <h4 class="!text-white">You do the business, we’ll handle the money.</h4>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        <div
                            class="flex gap-[15px] border-b border-dashed px-4 py-5 sm:py-9 ltr:lg:border-r rtl:lg:border-l"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div>
                                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.8889 21.2501L19.6389 25.0001L25.8889 16.2501M20.8889 4.52344C17.1151 8.10716 12.0893 10.0727 6.88556 10.0001C6.22362 12.0167 5.88718 14.1259 5.88889 16.2484C5.88889 25.5684 12.2622 33.3984 20.8889 35.6201C29.5156 33.4001 35.8889 25.5701 35.8889 16.2501C35.8889 14.0668 35.5389 11.9651 34.8922 9.99844H34.6389C29.3122 9.99844 24.4722 7.91844 20.8889 4.52344Z"
                                        stroke="#47BDFF"
                                        stroke-width="3"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-lg font-bold text-white">Security</h4>
                                <p class="mt-2.5 font-semibold"> Inbuilt data security and privacy enabled.</p>
                            </div>
                        </div>
                        <div
                            class="flex gap-[15px] border-b border-dashed px-4 py-5 sm:py-9 ltr:sm:border-r rtl:sm:border-l ltr:lg:border-r-0 rtl:lg:border-l-0"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div>
                                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_15_96884)">
                                        <path
                                            d="M6.3697 11.9947L18.2664 6.81298C18.4627 6.72884 18.6738 6.68486 18.8874 6.68362C19.101 6.68238 19.3127 6.72392 19.5099 6.80578C19.7072 6.88764 19.8861 7.00816 20.036 7.16025C20.186 7.31234 20.304 7.49291 20.383 7.69132L28.5897 27.528C28.7585 27.9304 28.7634 28.3829 28.6034 28.7889C28.4433 29.1949 28.131 29.5223 27.733 29.7013L15.838 34.883C15.6416 34.9674 15.4303 35.0116 15.2166 35.013C15.0028 35.0143 14.7909 34.9729 14.5935 34.891C14.396 34.8091 14.2169 34.6885 14.0669 34.5363C13.9168 34.384 13.7988 34.2033 13.7197 34.0047L5.51303 14.1663C5.34467 13.7638 5.33998 13.3115 5.49997 12.9057C5.65996 12.4998 5.97199 12.1723 6.3697 11.993V11.9947Z"
                                            stroke="#47BDFF"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M25.363 6.66602H27.0297C27.4717 6.66602 27.8957 6.84161 28.2082 7.15417C28.5208 7.46673 28.6964 7.89065 28.6964 8.33268V14.166"
                                            stroke="#47BDFF"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M33.6964 10C34.1364 10.1867 34.563 10.3617 34.9764 10.525C35.3832 10.6976 35.7049 11.0248 35.8705 11.4346C36.0362 11.8443 36.0323 12.3031 35.8597 12.71L32.0297 21.6667"
                                            stroke="#47BDFF"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_96884">
                                            <rect width="40" height="40" fill="white" transform="translate(0.363037)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-lg font-bold text-white">Universally interoperable</h4>
                                <p class="mt-2.5 font-semibold">Our plugins enable you to benefit from modern technologies with a push of a button.</p>
                            </div>
                        </div>
                        <div class="flex gap-[15px] border-l border-dashed px-4 py-5 sm:py-9" data-aos="fade-up" data-aos-duration="1000">
                            <div>
                                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_15_96918)">
                                        <path
                                            d="M29.068 18.334H12.4013C10.5603 18.334 9.06796 19.8264 9.06796 21.6673V31.6673C9.06796 33.5083 10.5603 35.0007 12.4013 35.0007H29.068C30.9089 35.0007 32.4013 33.5083 32.4013 31.6673V21.6673C32.4013 19.8264 30.9089 18.334 29.068 18.334Z"
                                            stroke="#47BDFF"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M20.7346 28.3333C21.6551 28.3333 22.4013 27.5871 22.4013 26.6667C22.4013 25.7462 21.6551 25 20.7346 25C19.8141 25 19.0679 25.7462 19.0679 26.6667C19.0679 27.5871 19.8141 28.3333 20.7346 28.3333Z"
                                            stroke="#47BDFF"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M14.0679 18.3333V11.6667C14.0679 9.89856 14.7703 8.20286 16.0206 6.95262C17.2708 5.70238 18.9665 5 20.7346 5C22.5027 5 24.1984 5.70238 25.4487 6.95262C26.6989 8.20286 27.4013 9.89856 27.4013 11.6667V18.3333"
                                            stroke="#47BDFF"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_96918">
                                            <rect width="40" height="40" fill="white" transform="translate(0.734619)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-lg font-bold text-white">Customizable Rewards</h4>
                                <p class="mt-2.5 font-semibold">Enabling new ways to reward your community and grow organically.</p>
                            </div>
                        </div>
                        <div
                            class="flex gap-[15px] border-b border-dashed px-4 py-5 sm:py-9 lg:border-b-0 ltr:lg:border-r rtl:lg:border-l"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_15_96895)">
                                        <path
                                            d="M30 6.66602H10C7.23858 6.66602 5 8.90459 5 11.666V28.3327C5 31.0941 7.23858 33.3327 10 33.3327H30C32.7614 33.3327 35 31.0941 35 28.3327V11.666C35 8.90459 32.7614 6.66602 30 6.66602Z"
                                            stroke="#47BDFF"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M15 20.0007C16.841 20.0007 18.3334 18.5083 18.3334 16.6673C18.3334 14.8264 16.841 13.334 15 13.334C13.1591 13.334 11.6667 14.8264 11.6667 16.6673C11.6667 18.5083 13.1591 20.0007 15 20.0007Z"
                                            stroke="#47BDFF"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path d="M25 13.334H28.3333" stroke="#47BDFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M25 20H28.3333" stroke="#47BDFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.6667 26.666H28.3334" stroke="#47BDFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_96895">
                                            <rect width="40" height="40" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-lg font-bold text-white">Data Analytics</h4>
                                <p class="mt-2.5 font-semibold">Visualise important data in an easy to use actionable dashboard.</p>
                            </div>
                        </div>
                        <div
                            class="flex gap-[15px] border-dashed px-4 py-5 sm:py-9 ltr:sm:border-r rtl:sm:border-l"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_15_96867)">
                                        <path
                                            d="M15 18.3333C18.6819 18.3333 21.6666 15.3486 21.6666 11.6667C21.6666 7.98477 18.6819 5 15 5C11.3181 5 8.33331 7.98477 8.33331 11.6667C8.33331 15.3486 11.3181 18.3333 15 18.3333Z"
                                            stroke="#47BDFF"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M5 35V31.6667C5 29.8986 5.70238 28.2029 6.95262 26.9526C8.20286 25.7024 9.89856 25 11.6667 25H18.3333C20.1014 25 21.7971 25.7024 23.0474 26.9526C24.2976 28.2029 25 29.8986 25 31.6667V35"
                                            stroke="#47BDFF"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M26.6667 18.334H36.6667M31.6667 13.334V23.334"
                                            stroke="#47BDFF"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_96867">
                                            <rect width="40" height="40" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-lg font-bold text-white">Sustainability</h4>
                                <p class="mt-2.5 font-semibold">91% more efficient than traditional platforms. Low computation requirement supercharged with robust economics.</p>
                            </div>
                        </div>
                        <div
                            class="flex gap-[15px] border-t border-dashed px-4 py-5 sm:border-b-0 sm:py-9 rtl:sm:border-l"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div>
                                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_15_96907)">
                                        <path
                                            d="M12.5555 31.6667C14.3965 31.6667 15.8889 30.1743 15.8889 28.3333C15.8889 26.4924 14.3965 25 12.5555 25C10.7146 25 9.22221 26.4924 9.22221 28.3333C9.22221 30.1743 10.7146 31.6667 12.5555 31.6667Z"
                                            stroke="#47BDFF"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M29.2222 31.6667C31.0632 31.6667 32.5556 30.1743 32.5556 28.3333C32.5556 26.4924 31.0632 25 29.2222 25C27.3813 25 25.8889 26.4924 25.8889 28.3333C25.8889 30.1743 27.3813 31.6667 29.2222 31.6667Z"
                                            stroke="#47BDFF"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M9.22223 28.334H5.8889V21.6673M4.22223 8.33398H22.5556V28.334M15.8889 28.334H25.8889M32.5556 28.334H35.8889V18.334M35.8889 18.334H22.5556M35.8889 18.334L30.8889 10.0007H22.5556"
                                            stroke="#47BDFF"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path d="M5.88889 15H12.5556" stroke="#47BDFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_96907">
                                            <rect width="40" height="40" fill="white" transform="translate(0.888885)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-lg font-bold text-white">Typescript Driven</h4>
                                <p class="mt-2.5 font-semibold">Smart contract platform written in Typescript. The most ubiquitous programming language out there.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- <section class="py-12 lg:py-24">
            <div class="container">
                <div class="heading text-center">
                    <h6>In-Built</h6>
                    <h4 class="text-4xl md:!text-[46px] md:!leading-[57px]">Interoperability</h4>
                </div>
                <div class="flex flex-wrap justify-center gap-[27px] pt-5 sm:gap-[30px] md:pt-12" data-aos="fade-up" data-aos-duration="1000">
                    <div>
                        <div class="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_15_88967)">
                                    <path
                                        d="M20.4167 43.75C25.2492 43.75 29.1667 39.8325 29.1667 35C29.1667 30.1675 25.2492 26.25 20.4167 26.25C15.5842 26.25 11.6667 30.1675 11.6667 35C11.6667 39.8325 15.5842 43.75 20.4167 43.75Z"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M49.5833 29.166C54.4158 29.166 58.3333 25.2485 58.3333 20.416C58.3333 15.5835 54.4158 11.666 49.5833 11.666C44.7508 11.666 40.8333 15.5835 40.8333 20.416C40.8333 25.2485 44.7508 29.166 49.5833 29.166Z"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M49.5833 58.334C54.4158 58.334 58.3333 54.4165 58.3333 49.584C58.3333 44.7515 54.4158 40.834 49.5833 40.834C44.7508 40.834 40.8333 44.7515 40.8333 49.584C40.8333 54.4165 44.7508 58.334 49.5833 58.334Z"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M29.1667 35.0007H37.9167L43.75 27.709"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path d="M43.75 42.2917L37.9167 35" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_15_88967">
                                        <rect width="70" height="70" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_15_88976)">
                                    <path
                                        d="M8.75 52.4993H17.5V20.416L35 40.8327L52.5 20.416V52.4993H61.25"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_15_88976">
                                        <rect width="70" height="70" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_15_88981)">
                                    <path
                                        d="M52.5 55.4173H28.6008C27.765 55.4174 26.9389 55.2378 26.1786 54.8908C25.4182 54.5438 24.7412 54.0374 24.1936 53.406C23.646 52.7745 23.2405 52.0328 23.0045 51.231C22.7685 50.4291 22.7076 49.586 22.8258 48.7586L27.7083 14.584"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M40.8333 26.25L14.5833 37.9167"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_15_88981">
                                        <rect width="70" height="70" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_15_88987)">
                                    <path
                                        d="M17.5 35L35 8.75L52.5 35L35 61.25L17.5 35Z"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M17.5 35L35 26.25L52.5 35L35 40.8333L17.5 35Z"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_15_88987">
                                        <rect width="70" height="70" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_15_88993)">
                                    <path d="M17.5 35H35" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M26.25 17.5V52.5" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M17.5 52.5H35C39.6413 52.5 44.0925 50.6563 47.3744 47.3744C50.6563 44.0925 52.5 39.6413 52.5 35C52.5 30.3587 50.6563 25.9075 47.3744 22.6256C44.0925 19.3437 39.6413 17.5 35 17.5H17.5"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_15_88993">
                                        <rect width="70" height="70" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_15_89000)">
                                    <path
                                        d="M11.6667 52.5007H46.6667L58.3333 40.834H23.3333L11.6667 52.5007Z"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M23.3333 40.8327L11.6667 29.166H46.6667L58.3333 40.8327"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M46.6667 29.1667L58.3333 17.5H23.3333L11.6667 29.1667"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_15_89000">
                                        <rect width="70" height="70" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_15_89007)">
                                    <path
                                        d="M17.5 17.5H40.8333C43.154 17.5 45.3796 18.4219 47.0205 20.0628C48.6615 21.7038 49.5833 23.9294 49.5833 26.25C49.5833 28.5706 48.6615 30.7962 47.0205 32.4372C45.3796 34.0781 43.154 35 40.8333 35C43.154 35 45.3796 35.9219 47.0205 37.5628C48.6615 39.2038 49.5833 41.4294 49.5833 43.75C49.5833 46.0706 48.6615 48.2962 47.0205 49.9372C45.3796 51.5781 43.154 52.5 40.8333 52.5H17.5"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path d="M23.3333 17.5V52.5" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M23.3333 35H40.8333" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M26.25 8.75V17.5" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M37.9167 8.75V17.5" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M26.25 52.5V61.25" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M37.9167 52.5V61.25" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_15_89007">
                                        <rect width="70" height="70" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_15_89018)">
                                    <path
                                        d="M45.465 45.3162L35.1021 35L12.5213 58.8583C10.2142 61.3375 12.9675 65.2167 16.1321 63.9042L44.1788 51.9575C44.7936 51.6962 45.3348 51.2879 45.7549 50.7685C46.1749 50.249 46.4608 49.6343 46.5876 48.9784C46.7143 48.3224 46.678 47.6454 46.4817 47.0069C46.2855 46.3683 45.9353 45.7878 45.4621 45.3162H45.465Z"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M24.535 24.687L34.8979 35.0003L57.4788 11.142C59.7858 8.66279 57.0325 4.78362 53.8679 6.09612L25.8213 18.0486C25.2064 18.3099 24.6652 18.7182 24.2452 19.2377C23.8251 19.7571 23.5392 20.3719 23.4124 21.0278C23.2857 21.6837 23.322 22.3607 23.5183 22.9992C23.7146 23.6378 24.0647 24.2184 24.5379 24.6899L24.535 24.687Z"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_15_89018">
                                        <rect width="70" height="70" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_15_89024)">
                                    <path
                                        d="M41.0667 58.8817C37.7125 62.0404 32.2583 62.0404 28.9042 58.8817L8.69167 39.7833C5.89167 37.1408 4.9875 32.13 6.67917 28.6096L13.6792 13.9737C15.05 11.0833 18.6958 8.75 21.7875 8.75H48.2125C51.3042 8.75 54.95 11.0892 56.3208 13.9708L63.3208 28.6096C65.0125 32.13 64.0792 37.1408 61.3083 39.7804C51.2371 49.385 51.1992 49.3442 41.0667 58.8817V58.8817Z"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path d="M35 43.7506V23.334" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M23.3333 23.334H46.6667" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_15_89024">
                                        <rect width="70" height="70" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                            <svg width="70" height="72" viewBox="0 0 70 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M49.5833 9.75195L64.1667 18.508V53.5324L49.5833 62.2885L20.4167 44.7763V27.2641L49.5833 44.7763V27.2641L35 18.508L49.5833 9.75195Z"
                                    stroke="currentColor"
                                    stroke-width="5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M35 18.508L20.4167 9.75195L5.83333 18.508V53.5324L20.4167 62.2885L34.125 53.1529"
                                    stroke="currentColor"
                                    stroke-width="5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_15_89037)">
                                    <path
                                        d="M17.5 23.334L23.3333 29.1673L35 17.5007L46.6667 29.1673L52.5 23.334L35 5.83398L17.5 23.334Z"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M17.5 46.6673L23.3333 40.834L35 52.5007L45.2083 42.2923L51.0417 48.1257L35 64.1673L17.5 46.6673Z"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M58.3333 29.166L64.1579 35.0023L58.3333 40.8327L52.5 34.9993L58.3333 29.166Z"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M11.6667 29.166L17.5 34.9993L11.6667 40.8327L5.83333 34.9993L11.6667 29.166Z"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M35 29.166L40.8333 34.9993L35 40.8327L29.1667 34.9993L35 29.166Z"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_15_89037">
                                        <rect width="70" height="70" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_15_89046)">
                                    <path
                                        d="M35.5308 5.83398C41.1892 5.89815 46.8446 6.94815 52.5 8.98398L53.5617 9.37773C57.2425 10.7989 60.7911 12.5411 64.1667 14.584C64.1667 30.9698 58.4588 44.5032 47.0458 55.184C43.4292 58.7977 39.7542 61.6123 36.0208 63.6365L35 64.1673C30.9167 62.1169 26.9004 59.1244 22.9542 55.1869C11.5442 44.5032 5.83334 30.9698 5.83334 14.584C13.2563 10.1302 20.6792 7.3769 28.105 6.32398L29.1667 6.18398C30.9265 5.97141 32.6966 5.85457 34.4692 5.83398H35.5308Z"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M6.125 20.6206C12.1712 40.2206 21.7962 43.0702 35 29.1664C35 17.4997 38.9579 10.6368 46.8708 8.57474L48.5917 8.25391"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M47.6875 53.9869C47.6875 53.9869 55.4167 37.916 35 29.166"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_15_89046">
                                        <rect width="70" height="70" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-center rounded-[32px] bg-[#7780A1]/10 p-11 duration-500 hover:bg-secondary hover:text-white">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_15_89053)">
                                    <path
                                        d="M37.7708 64.1673C24.6371 64.1702 13.1396 55.3006 9.74167 42.546C6.34375 29.7915 11.8913 16.331 23.2692 9.73355C28.7999 6.52574 35.2385 5.24309 41.5763 6.08652C47.9141 6.92994 53.7932 9.85179 58.2925 14.3944L48.5654 24.2148C47.1575 22.8037 45.4845 21.6848 43.6426 20.9225C41.8007 20.1603 39.8263 19.7697 37.8329 19.7732C35.8396 19.7767 33.8666 20.1743 32.0274 20.9431C30.1882 21.7118 28.5192 22.8366 27.1163 24.2527C24.2741 27.1213 22.6796 30.9961 22.6796 35.0342C22.6796 39.0723 24.2741 42.9471 27.1163 45.8156C28.5192 47.2317 30.1882 48.3565 32.0274 49.1253C33.8666 49.8941 35.8396 50.2916 37.8329 50.2952C39.8263 50.2987 41.8007 49.9081 43.6426 49.1458C45.4845 48.3836 47.1575 47.2647 48.5654 45.8535L58.3333 55.674C55.6391 58.3808 52.434 60.5254 48.9041 61.9834C45.3743 63.4414 41.5899 64.1838 37.7708 64.1673V64.1673Z"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_15_89053">
                                        <rect width="70" height="70" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->

        <section class="bg-gradient-to-t from-white to-transparent py-12 dark:bg-none lg:py-24">
            <faq></faq>
        </section>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import Testimonial from '@/components/Testimonial.vue';
    import Faq from '@/components/Faq.vue';
    import CountUp from 'vue-countup-v3';
    import apexchart from 'vue3-apexcharts';
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();

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
