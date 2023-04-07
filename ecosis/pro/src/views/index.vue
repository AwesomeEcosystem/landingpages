<template>
    <div class="overflow-x-hidden">
        <div class="overflow-hidden bg-black pt-[82px] sm:-mx-[250px] sm:rounded-b-[50%] lg:-mx-[150px] lg:pt-[106px]">
            <div class="relative">
                <img src="/assets/images/banner-lefticon.png" alt="banner-lefticon" class="absolute left-0 top-20 sm:left-[250px] lg:left-[150px]" />
                <img src="/assets/images/banner-rightIcon.png" alt="banner-rightIcon" class="absolute right-0 -top-4 sm:right-[250px] lg:right-[150px]" />
                <div class="container">
                    <div class="relative md:flex bg-cover bg-top bg-no-repeat pt-14 pb-0 lg:pt-20 lg:pb-60 xl:pt-36">
                        <div class="relative z-[1] flex flex-col justify-center text-center text-white lg:w-3/5 ltr:lg:text-left rtl:lg:text-right xl:w-1/2">
                            <h2 class="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[70px] lg:leading-[90px]">
                                Tokenise <span class="italic"> <br>in </span> <span class="italic text-secondary">Minutes</span>
                            </h2>
                            <p class="my-8 text-lg lg:w-[90%]">
                                Unlock the power of tokenisation
                            </p>
                            <a href="" target="_blank" class="btn mx-auto mt-2 block w-fit bg-white lg:mx-0 lg:rtl:ml-auto mb-8">Waitlist</a>
                        </div>
                        <div
                            class="mx-auto mt-5 mb-2 w-auto ltr:right-0 rtl:left-0 md:w-[540px] lg:mb-0 lg:mt-0 xl:w-[650px]"
                            :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
                            data-aos-duration="1000"
                            data-aos-offset="0"
                            data-aos-delay="300"
                        >
                            <img src="/assets/images/items/server.png" alt="home-banner-icon" class="rtl:rotate-y-180" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- About -->
        <section class="bg-[url(/assets/images/service-bg.png)] bg-cover bg-center bg-no-repeat py-14 dark:bg-none lg:py-[100px]" id="about">
            <div class="container">
                <div class="heading text-center">
                    <h6>About</h6>
                    <h4>Tokenisation <br> Easy and cost-effective</h4>
                    <p class="p-2">
                        For your business, brand, and community
                    </p>
                </div>
                <div class="flex flex-col justify-center items-center text-center">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                            style="box-shadow: -20px 30px 70px rgba(219, 222, 225, 0.4)"
                        >
                            <!-- <div
                                class="flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition group-hover:bg-black"
                                style="box-shadow: 0px 15px 30px rgba(180, 118, 229, 0.4)"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        opacity="0.5"
                                        d="M14.2371 18.7087L18.7103 14.2366L21.4893 17.0156V21.4888H17.0172L14.2371 18.7087ZM5.2917 9.76334L2.3092 6.7819C2.21118 6.68399 2.13342 6.56771 2.08036 6.43973C2.02731 6.31174 2 6.17455 2 6.03601C2 5.89746 2.02731 5.76027 2.08036 5.63229C2.13342 5.5043 2.21118 5.38803 2.3092 5.29012L5.2917 2.30867C5.4894 2.11103 5.75751 2 6.03706 2C6.31662 2 6.58472 2.11103 6.78242 2.30867L9.76598 5.29012L5.2917 9.76334Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M5.29177 12.7459L7.21895 14.6742L8.71179 13.1813L6.78249 11.2552L8.27321 9.76449L10.2015 11.6917L11.6922 10.201L9.76605 8.27271L11.2568 6.78199L13.1818 8.71128L14.6736 7.2195L12.7454 5.29232L15.7279 2.31087C15.9256 2.11323 16.1937 2.0022 16.4732 2.0022C16.7528 2.0022 17.0209 2.11323 17.2186 2.31087L21.6908 6.78304C21.8884 6.98074 21.9994 7.24885 21.9994 7.5284C21.9994 7.80795 21.8884 8.07606 21.6908 8.27376L8.27321 21.6913C8.07551 21.889 7.8074 22 7.52785 22C7.2483 22 6.98019 21.889 6.78249 21.6913L2.31032 17.2192C2.11268 17.0215 2.00165 16.7533 2.00165 16.4738C2.00165 16.1942 2.11268 15.9261 2.31032 15.7284L5.29177 12.7459Z"
                                        fill="white"
                                    />
                                </svg>
                            </div> -->
                            <h1
                                to="/services-detail"
                                class="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black"
                                >A Deployer to build your own native tokens instantly
                            </h1>
                            <p class="mb-10 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black">
                                No need to rely on public networks like Ethereum. No extra costs for your community.
                            </p>
                            <!-- <router-link
                                to="services-detail"
                                class="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="text-black transition group-hover:text-white dark:text-white"
                                >
                                    <path
                                        d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </router-link> -->
                        </div>
                    </div>


                </div>
            </div>
        </section>

        <!-- Features -->
        <section class="relative overflow-hidden bg-gradient-to-t from-white/[55%] to-transparent px-5 pt-12 pb-24 dark:from-white/[0.02] lg:pb-[200px]" id="features">
            <!-- <span class="absolute bottom-0 hidden ltr:right-0 rtl:left-0 sm:block">
                <svg width="102" height="235" viewBox="0 0 102 235" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2">
                        <path
                            d="M92.527 78.0833C75.118 82.9124 56.2545 110.949 49 124.363C59.8818 123.021 84.5453 115.912 96.1543 98.2051C107.763 80.4979 98.5725 77.4124 92.527 78.0833Z"
                            fill="url(#paint0_linear_169_128)"
                        />
                        <path
                            d="M82.7459 31.7592C65.3642 33.512 52.8734 76.4017 47.2734 96.1807C59.7188 86.009 84.2369 65.6654 90.2095 58.8836C101.409 46.1692 99.5458 30.0638 82.7459 31.7592Z"
                            fill="url(#paint1_linear_169_128)"
                        />
                        <path
                            d="M22.9938 5.01791C11.3666 23.3114 36.5574 50.7968 48.1847 69.0903C48.1847 57.5722 48.1847 33.4741 48.1847 23.3115C48.1847 7.05064 31.3847 -8.19111 22.9938 5.01791Z"
                            fill="url(#paint2_linear_169_128)"
                        />
                        <path
                            d="M49.0913 104.363C36.0186 86.1963 8.10056 54.7092 0.97333 74.0864C-7.9448 98.3071 47.3095 104.363 49.0913 104.363Z"
                            fill="url(#paint3_linear_169_128)"
                        />
                        <path d="M49.0916 131.636L47.2734 63.4546" stroke="url(#paint4_linear_169_128)" stroke-width="2" stroke-linecap="round" />
                        <path
                            d="M31.0181 183.08C35.4272 172.361 41.9908 144.854 43.3635 131.636H61.8907C62.7088 147.927 71.1451 171.291 75.2633 183.08C87.6087 210.946 76.9815 228.809 69.0907 233.453H39.2544C19.7 227.022 24.8455 198.085 31.0181 183.08Z"
                            stroke="url(#paint5_linear_169_128)"
                            stroke-width="2"
                        />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_169_128" x1="75.3632" y1="78" x2="75.3632" y2="124.363" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#7780A1" />
                            <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_169_128" x1="72.2717" y1="31.6357" x2="72.2717" y2="96.1807" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#7780A1" />
                            <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_169_128" x1="34.0923" y1="0" x2="34.0923" y2="69.0903" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#7780A1" />
                            <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_169_128" x1="24.5456" y1="67.9993" x2="24.5456" y2="104.363" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#7780A1" />
                            <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_169_128" x1="48.1825" y1="63.4546" x2="48.1825" y2="131.636" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#7780A1" />
                            <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="paint5_linear_169_128" x1="53.1786" y1="131.636" x2="53.1786" y2="233.453" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#7780A1" />
                            <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </span> -->
            <div class="relative mx-auto max-w-[1440px] bg-gray/5 pt-12 dark:bg-gray/[0.05] lg:max-h-[400px]">
                <div class="container">
                    <div class="heading mb-0 text-center ltr:lg:text-left rtl:lg:text-right">
                        <h6 class="inline-block bg-secondary/10 px-2.5 py-2 !text-gray-800">Deployer</h6>
                        <h4 class="!font-black">Features</h4>
                    </div>
                    <p class="mt-2.5 text-center text-lg font-medium ltr:lg:text-left rtl:lg:text-right">
                        Configure, deploy and maintain within minutes that allows you to tokenise your assets dedicated to your community in a simple and instant manner.
                    </p>
                    <div class="mt-8 grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="group border-2 border-white bg-white/50 p-[30px] duration-200 hover:border-secondary/80 hover:bg-secondary/20 dark:border-[rgba(119,128,161,0.15)] dark:bg-black dark:hover:border-secondary"
                        >
                            <span
                                class="flex h-[60px] w-[60px] items-center justify-center bg-primary/10 text-primary group-hover:bg-black group-hover:text-white dark:group-hover:bg-secondary"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_22_590)">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M21.3028 15.7205C24.8991 12.1242 24.8991 6.2935 21.3028 2.69722C17.7065 -0.899072 11.8758 -0.899072 8.27947 2.69722C5.89155 5.08514 5.0892 8.45821 5.87242 11.5082C5.99874 12.0001 5.88656 12.532 5.52744 12.8911L0.577989 17.8406C0.154104 18.2645 -0.0541175 18.8581 0.0120824 19.4539L0.321504 22.2387C0.354493 22.5355 0.487544 22.8124 0.698774 23.0236L0.976392 23.3012C1.18762 23.5125 1.46445 23.6455 1.76135 23.6785L4.54613 23.9879C5.14193 24.0541 5.73552 23.8459 6.15941 23.422L7.10611 22.4753L4.77791 20.1726C4.38525 19.7842 4.38176 19.151 4.77013 18.7584C5.15851 18.3657 5.79166 18.3622 6.18433 18.7506L8.52035 21.0611L11.1092 18.4722C11.4683 18.1131 11.9999 18.0013 12.4918 18.1276C15.5418 18.9108 18.9149 18.1084 21.3028 15.7205ZM12.781 7.44772C13.8224 6.40632 15.5109 6.40632 16.5523 7.44772C17.5937 8.48911 17.5937 10.1776 16.5523 11.219C15.5109 12.2603 13.8224 12.2603 12.781 11.219C11.7396 10.1776 11.7396 8.48911 12.781 7.44772Z"
                                            fill="currentcolor"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_22_590">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <h5 class="mt-7 text-[22px] font-bold leading-7 text-black dark:text-white">Configure</h5>
                            <p class="mt-4 text-lg font-medium">Setup all parameters for the tokenisation.</p>
                        </div>
                        <div
                            class="group border-2 border-white bg-white/50 p-[30px] duration-200 hover:border-secondary/80 hover:bg-secondary/20 dark:border-[rgba(119,128,161,0.15)] dark:bg-black dark:hover:border-secondary"
                        >
                            <span
                                class="flex h-[60px] w-[60px] items-center justify-center bg-primary/10 text-primary group-hover:bg-black group-hover:text-white dark:group-hover:bg-secondary"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_18_167)">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M16.9643 3.27418L19.1598 5.46974C22.3866 8.69653 24 10.3099 24 12.3148C24 14.3197 22.3866 15.933 19.1598 19.1598C15.933 22.3866 14.3197 24 12.3148 24C10.3099 24 8.69653 22.3866 5.46975 19.1598L3.27418 16.9643C1.41954 15.1096 0.49222 14.1823 0.147167 12.9792C-0.197887 11.776 0.0970006 10.4982 0.686775 7.9425L1.02689 6.46869C1.52307 4.31857 1.77116 3.24351 2.50733 2.50733C3.24351 1.77116 4.31857 1.52307 6.46868 1.02689L7.9425 0.686776C10.4982 0.0970007 11.776 -0.197887 12.9792 0.147167C14.1823 0.49222 15.1096 1.41954 16.9643 3.27418ZM10.976 14.7941C10.1684 13.9866 10.1753 12.8279 10.6582 11.9096C10.4169 11.559 10.4521 11.0754 10.7639 10.7636C11.0745 10.453 11.5557 10.4169 11.906 10.6554C12.3139 10.4386 12.762 10.324 13.2085 10.3282C13.7055 10.3329 14.1046 10.7396 14.1 11.2366C14.0953 11.7337 13.6885 12.1328 13.1915 12.1281C12.9792 12.1261 12.7002 12.2214 12.4609 12.4607C11.9959 12.9257 12.1182 13.3907 12.2488 13.5213C12.3794 13.6519 12.8444 13.7742 13.3095 13.3092C14.2503 12.3684 15.8747 12.0561 16.9157 13.0971C17.7233 13.9046 17.7164 15.0633 17.2335 15.9816C17.4748 16.3322 17.4396 16.8158 17.1278 17.1276C16.8171 17.4383 16.3358 17.4743 15.9855 17.2357C15.4372 17.5271 14.8135 17.6363 14.2188 17.5141C13.732 17.414 13.4184 16.9382 13.5184 16.4513C13.6185 15.9644 14.0943 15.6508 14.5812 15.7509C14.7938 15.7946 15.1365 15.7248 15.4308 15.4305C15.8958 14.9655 15.7735 14.5005 15.6429 14.3699C15.5123 14.2393 15.0473 14.1169 14.5823 14.582C13.6414 15.5228 12.017 15.8351 10.976 14.7941ZM9.62515 9.95175C10.5624 9.01449 10.5624 7.49489 9.62515 6.55763C8.68789 5.62037 7.1683 5.62037 6.23104 6.55763C5.29378 7.49489 5.29378 9.01449 6.23104 9.95175C7.1683 10.889 8.68789 10.889 9.62515 9.95175Z"
                                            fill="currentcolor"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_18_167">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <h5 class="mt-7 text-[22px] font-bold leading-7 text-black dark:text-white">Deploy</h5>
                            <p class="mt-4 text-lg font-medium">
                                Let the system do its job and deploy it into a secure server infrastructure.
                            </p>
                        </div>
                        <div
                            class="group border-2 border-white bg-white/50 p-[30px] duration-200 hover:border-secondary/80 hover:bg-secondary/20 dark:border-[rgba(119,128,161,0.15)] dark:bg-black dark:hover:border-secondary"
                        >
                            <span
                                class="flex h-[60px] w-[60px] items-center justify-center bg-primary/10 text-primary group-hover:bg-black group-hover:text-white dark:group-hover:bg-secondary"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.2558 1H16.4651C16.1569 1 15.907 1.24989 15.907 1.55814V1.6239L19.8139 4.74947V1.55814C19.8139 1.24989 19.564 1 19.2558 1Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M10.6047 8.2558C10.6047 7.48517 11.2294 6.86045 12 6.86045C12.7706 6.86045 13.3953 7.48517 13.3953 8.2558C13.3953 9.02642 12.7706 9.65114 12 9.65114C11.2294 9.65114 10.6047 9.02642 10.6047 8.2558Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M21.7674 9.88608L22.6398 10.584C23.0008 10.8728 23.5277 10.8143 23.8165 10.4532C24.1054 10.0922 24.0468 9.56531 23.6858 9.27646L14.615 2.01985C13.0862 0.796794 10.9138 0.796794 9.385 2.01985L0.314239 9.27646C-0.0468168 9.56531 -0.105355 10.0922 0.183489 10.4532C0.472333 10.8143 0.999182 10.8728 1.36024 10.584L2.23258 9.88608V21.372H0.837238C0.374861 21.372 3.08724e-05 21.7469 3.08724e-05 22.2092C3.08724e-05 22.6716 0.374861 23.0465 0.837238 23.0465H23.1628C23.6251 23.0465 24 22.6716 24 22.2092C24 21.7469 23.6251 21.372 23.1628 21.372H21.7674V9.88608ZM8.93024 8.2558C8.93024 6.56041 10.3046 5.18604 12 5.18604C13.6954 5.18604 15.0698 6.56041 15.0698 8.2558C15.0698 9.95118 13.6954 11.3256 12 11.3256C10.3046 11.3256 8.93024 9.95118 8.93024 8.2558ZM12.0551 12.4418C12.7973 12.4418 13.4368 12.4418 13.9488 12.5106C14.4976 12.5844 15.0237 12.7508 15.4504 13.1775C15.8771 13.6042 16.0435 14.1302 16.1173 14.679C16.1818 15.1591 16.1858 15.7511 16.186 16.4348C16.186 16.4804 16.186 16.5264 16.186 16.5728L16.186 21.372H14.5116V16.6279C14.5116 15.8149 14.5098 15.2893 14.4578 14.9021C14.409 14.539 14.3301 14.4252 14.2664 14.3615C14.2027 14.2977 14.0889 14.2189 13.7257 14.1701C13.3385 14.118 12.813 14.1162 12 14.1162C11.187 14.1162 10.6615 14.118 10.2743 14.1701C9.91114 14.2189 9.79732 14.2977 9.73359 14.3615C9.66986 14.4252 9.59104 14.539 9.54222 14.9021C9.49016 15.2893 9.48838 15.8149 9.48838 16.6279V21.372H7.81396L7.81396 16.5728C7.81392 15.8306 7.81388 15.1911 7.88273 14.679C7.95652 14.1302 8.12291 13.6042 8.5496 13.1775C8.97629 12.7508 9.50235 12.5844 10.0512 12.5106C10.5632 12.4418 11.2027 12.4418 11.9449 12.4418H12.0551Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M10.6047 8.2558C10.6047 7.48517 11.2294 6.86045 12 6.86045C12.7706 6.86045 13.3953 7.48517 13.3953 8.2558C13.3953 9.02642 12.7706 9.65114 12 9.65114C11.2294 9.65114 10.6047 9.02642 10.6047 8.2558Z"
                                        fill="currentcolor"
                                    />
                                </svg>
                            </span>
                            <h5 class="mt-7 text-[22px] font-bold leading-7 text-black dark:text-white">Maintain</h5>
                            <p class="mt-4 text-lg font-medium">
                                Access through the admin panel once your node is deployed.
                            </p>
                        </div>
                    </div>
                </div>
                <!-- <span class="absolute bottom-0 ltr:-left-5 rtl:-right-5 md:bottom-20" data-aos="fade-up-right" data-aos-duration="1000">
                    <svg
                        width="62"
                        height="60"
                        viewBox="0 0 62 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-12 w-12 md:h-14 md:w-14 xl:h-16 xl:w-16"
                    >
                        <path
                            d="M62 0L42.5037 43.0236L29.8853 34.7351L21.3901 36.8163L19.6134 23.952L10.6432 14.9567L62 0ZM53.4601 6.74365L23.4852 22.7451L23.8735 31.8047L53.4601 6.74365Z"
                            fill="#B476E5"
                        />
                        <path
                            d="M18.2192 39.9841C16.7331 41.4563 15.3531 43.0123 14.0066 44.5935C12.6657 46.1774 11.3638 47.7921 10.1012 49.4375C8.83847 51.0801 7.61209 52.7535 6.42763 54.4603C5.24874 56.17 4.10061 57.902 3.06421 59.7206C4.55317 58.2484 5.93038 56.6952 7.27688 55.114C8.61779 53.5301 9.91958 51.9154 11.1823 50.27C12.445 48.6246 13.6713 46.9513 14.853 45.2472C16.0347 43.5319 17.18 41.7999 18.2192 39.9841Z"
                            fill="#47BDFF"
                        />
                        <path
                            d="M31.064 40.2637C29.5778 41.7359 28.1978 43.2919 26.8513 44.873C25.5104 46.457 24.2086 48.0717 22.9459 49.7171C21.6832 51.3597 20.4568 53.033 19.2724 54.7399C18.0935 56.4495 16.9453 58.1816 15.9089 60.0002C17.3979 58.528 18.7751 56.9747 20.1216 55.3936C21.4625 53.8096 22.7643 52.195 24.027 50.5496C25.2897 48.9041 26.516 47.2308 27.7005 45.5267C28.8766 43.8115 30.0248 42.0795 31.064 40.2637Z"
                            fill="#47BDFF"
                        />
                        <path
                            d="M16.0322 23.9688C14.5461 25.441 13.166 26.997 11.8195 28.5781C10.4786 30.1621 9.17684 31.7767 7.91415 33.4222C6.65146 35.0648 5.42508 36.7381 4.24061 38.445C3.06173 40.1546 1.91357 41.8866 0.877159 43.7052C2.36613 42.233 3.74337 40.6798 5.08987 39.0987C6.43077 37.5147 7.73256 35.9 8.99246 34.2546C10.2551 32.6092 11.4815 30.9359 12.666 29.2318C13.8449 27.5166 14.993 25.7846 16.0322 23.9688Z"
                            fill="#47BDFF"
                        />
                    </svg>
                </span> -->
            </div>
        </section>

        <!-- Use Cases -->
        <section class="bg-[url(/assets/images/service-bg.png)] bg-cover bg-center bg-no-repeat py-14 dark:bg-none lg:py-[100px]">
            <div class="container">
                <div class="heading text-center">
                    <h6>Instant Solutions</h6>
                    <h4>For Brands</h4>
                </div>
                <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                            style="box-shadow: -20px 30px 70px rgba(219, 222, 225, 0.4)"
                        >
                            <div
                                class="flex h-14 w-14 items-center justify-center rounded-full bg-black transition group-hover:bg-black"
                                style="box-shadow: 0px 15px 30px rgba(180, 118, 229, 0.4)"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        opacity="0.5"
                                        d="M14.2371 18.7087L18.7103 14.2366L21.4893 17.0156V21.4888H17.0172L14.2371 18.7087ZM5.2917 9.76334L2.3092 6.7819C2.21118 6.68399 2.13342 6.56771 2.08036 6.43973C2.02731 6.31174 2 6.17455 2 6.03601C2 5.89746 2.02731 5.76027 2.08036 5.63229C2.13342 5.5043 2.21118 5.38803 2.3092 5.29012L5.2917 2.30867C5.4894 2.11103 5.75751 2 6.03706 2C6.31662 2 6.58472 2.11103 6.78242 2.30867L9.76598 5.29012L5.2917 9.76334Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M5.29177 12.7459L7.21895 14.6742L8.71179 13.1813L6.78249 11.2552L8.27321 9.76449L10.2015 11.6917L11.6922 10.201L9.76605 8.27271L11.2568 6.78199L13.1818 8.71128L14.6736 7.2195L12.7454 5.29232L15.7279 2.31087C15.9256 2.11323 16.1937 2.0022 16.4732 2.0022C16.7528 2.0022 17.0209 2.11323 17.2186 2.31087L21.6908 6.78304C21.8884 6.98074 21.9994 7.24885 21.9994 7.5284C21.9994 7.80795 21.8884 8.07606 21.6908 8.27376L8.27321 21.6913C8.07551 21.889 7.8074 22 7.52785 22C7.2483 22 6.98019 21.889 6.78249 21.6913L2.31032 17.2192C2.11268 17.0215 2.00165 16.7533 2.00165 16.4738C2.00165 16.1942 2.11268 15.9261 2.31032 15.7284L5.29177 12.7459Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <router-link
                                to="/services-detail"
                                class="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black"
                                >Community Dedicated
                            </router-link>
                            <p class="mb-10 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black">
                                Deploy Native Tokens dedicated to your community
                            </p>
                            <!-- <router-link
                                to="services-detail"
                                class="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="text-black transition group-hover:text-white dark:text-white"
                                >
                                    <path
                                        d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </router-link> -->
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                            style="box-shadow: -20px 30px 70px rgba(219, 222, 225, 0.4)"
                        >
                            <div
                                class="flex h-14 w-14 items-center justify-center rounded-full bg-black transition group-hover:bg-black"
                                style="box-shadow: 0px 15px 30px rgba(180, 118, 229, 0.4)"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        opacity="0.5"
                                        d="M10.1658 20C10.5862 20 10.9617 19.7371 11.1054 19.342L15.8374 6.34204C16.0749 5.68981 15.5919 5 14.8978 5H13.8341C13.4137 5 13.0382 5.26292 12.8945 5.65796L8.16245 18.658C7.92504 19.3102 8.40804 20 9.10214 20H10.1658Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M17.9889 17.0964C18.3794 17.4871 19.0127 17.4873 19.4034 17.0966L23.2929 13.2071C23.6834 12.8166 23.6834 12.1834 23.2929 11.7929L19.4036 7.90359C19.0129 7.51287 18.3793 7.5131 17.9889 7.90409L17.2814 8.61254C16.8913 9.00328 16.8916 9.63632 17.2823 10.0266L19.0501 11.7927C19.441 12.1832 19.441 12.8168 19.0502 13.2074L17.2822 14.9746C16.8916 15.365 16.8914 15.9981 17.2818 16.3888L17.9889 17.0964ZM4.94994 13.2073C4.55904 12.8167 4.55896 12.1832 4.94977 11.7925L6.71781 10.0253C7.10839 9.63494 7.10858 9.00184 6.71823 8.61121L6.01111 7.90359C5.62062 7.51283 4.98726 7.51272 4.59664 7.90334L0.707106 11.7929C0.316582 12.1834 0.316582 12.8166 0.707107 13.2071L4.59639 17.0964C4.98711 17.4871 5.62066 17.4869 6.01111 17.0959L6.71856 16.3874C7.10874 15.9967 7.10837 15.3637 6.71773 14.9734L4.94994 13.2073Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <router-link
                                to="/services-detail"
                                class="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black"
                                >Development
                            </router-link>
                            <p class="mb-10 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black">
                                Customisation in programing languages your developers are used to.
                            </p>
                            <!-- <router-link
                                to="services-detail"
                                class="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="text-black transition group-hover:text-white dark:text-white"
                                >
                                    <path
                                        d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </router-link> -->
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                            style="box-shadow: -20px 30px 70px rgba(219, 222, 225, 0.4)"
                        >
                            <div
                                class="flex h-14 w-14 items-center justify-center rounded-full bg-black transition group-hover:bg-black"
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
                            <router-link
                                to="/services-detail"
                                class="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black"
                                >Compatibility
                            </router-link>
                            <p class="mb-10 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black">
                                Let your Network interact with eachother
                            </p>
                            <!-- <router-link
                                to="services-detail"
                                class="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="text-black transition group-hover:text-white dark:text-white"
                                >
                                    <path
                                        d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </router-link> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tiers -->
        <section class="bg-gradient-to-b from-white/60 to-transparent py-14 dark:from-white/[0.02] lg:py-[100px]" id="prices">
            <div class="container">
                <div class="heading text-center">
                    <h6>Tiers</h6>
                    <h4>Packages</h4>
                </div>
                <div class="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">

                    <!-- Single -->
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="group rounded-3xl border-2 border-secondary bg-white p-6 px-4 transition hover:bg-secondary hover:drop-shadow-[-10px_30px_70px_rgba(40,38,77,0.25)] dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6"
                        >
                            <div class="mb-8">
                                <h3 class="text-[22px] font-black text-black dark:text-white">Single</h3>
                            </div>
                            <ul class="space-y-5 pb-7 text-sm font-bold group-hover:text-white">
                                <li class="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p class="ltr:pl-3 rtl:pr-3">Configure</p>
                                </li>
                                <li class="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p class="ltr:pl-3 rtl:pr-3">Deploy</p>
                                </li>
                                <li class="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p class="ltr:pl-3 rtl:pr-3">Droplet Access</p>
                                </li>
                                <li class="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.3">
                                                <circle cx="8" cy="8" r="8" fill="#7780A1" />
                                            </g>
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p class="ltr:pl-3 rtl:pr-3">Self-hosted</p>
                                </li>
                                <li class="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.3">
                                                <circle cx="8" cy="8" r="8" fill="#7780A1" />
                                            </g>
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p class="ltr:pl-3 rtl:pr-3">No Auto-Backups</p>
                                </li>
                              </ul>
                            <div class="border-t-2 border-[#BBC0D0]/50 pt-7">
                                <div class="mb-3 flex flex-col items-center justify-center sm:flex-row sm:justify-between">

                                    <!-- <a href="javascript:" class="btn text-xl text-white group-hover:bg-white group-hover:text-secondary dark:text-black xl:w-44"
                                        >$39.99<small class="text-xs lowercase">/month</small></a
                                    > -->
                                    <a
                                        href="https://kcha60ohz1u.typeform.com/to/TmkVtQ3i" target="_blank"
                                        class="btn text-xl text-white group-hover:bg-white group-hover:text-secondary bg-secondary dark:text-black xl:w-44"
                                        >Waitlist</a
                                    >
                                </div>
                                <!-- <span class="block text-center text-sm font-bold text-black dark:text-white sm:pr-5 ltr:sm:text-right rtl:sm:text-left"
                                    >Billed every month</span
                                > -->
                            </div>
                        </div>
                    </div>

                    <!-- Subscription -->
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="group rounded-3xl border-2 border-primary bg-white p-6 px-4 transition hover:bg-primary hover:drop-shadow-[-10px_30px_70px_rgba(40,38,77,0.25)] dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6"
                        >
                            <div class="relative mb-8">
                                <h3 class="text-[22px] font-black text-black dark:text-white">Subscription</h3>
                                <div
                                    class="group-hover:white/10 absolute top-1/2 -translate-y-1/2 rounded-xl bg-primary/10 py-2 px-4 text-xs font-black text-primary group-hover:bg-white group-hover:text-black ltr:right-0 rtl:left-0"
                                >
                                    RECOMMENDED
                                </div>
                            </div>
                            <ul class="space-y-5 pb-7 text-sm font-bold group-hover:text-white">
                                <li class="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p class="ltr:pl-3 rtl:pr-3">Configure</p>
                                </li>
                                <li class="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p class="ltr:pl-3 rtl:pr-3">Deploy</p>
                                </li>
                                <li class="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p class="ltr:pl-3 rtl:pr-3">Maintain</p>
                                </li>
                                <li class="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p class="ltr:pl-3 rtl:pr-3">Auto Server-Updates</p>
                                </li>
                                <li class="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p class="ltr:pl-3 rtl:pr-3">Auto Server-Backups</p>
                                </li>
                                <li class="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p class="ltr:pl-3 rtl:pr-3">Secured Server-Infrastructure</p>
                                </li>
                                <li class="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p class="ltr:pl-3 rtl:pr-3">Access and claim Droplets at any time</p>
                                </li>
                            </ul>
                            <div class="border-t-2 border-[#BBC0D0]/50 pt-7">
                                <div class="mb-3 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                                    <div
                                        class="relative mb-2 text-lg font-extrabold before:absolute before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-primary group-hover:text-white group-hover:before:bg-white ltr:pl-5 ltr:before:left-0 rtl:pr-5 rtl:before:right-0 sm:mb-0"
                                    >
                                        Monthly
                                    </div>
                                    <!-- <a
                                        href="javascript:"
                                        class="btn bg-primary text-xl text-white group-hover:bg-white group-hover:text-primary dark:text-black xl:w-44"
                                        >$14.99<small class="text-xs lowercase">/month</small></a
                                    > -->
                                    <a
                                        href="https://kcha60ohz1u.typeform.com/to/TmkVtQ3i" target="_blank"
                                        class="btn bg-primary text-xl text-white group-hover:bg-white group-hover:text-primary dark:text-black xl:w-44"
                                        >Waitlist</a
                                    >
                                </div>
                                <!-- <span class="block text-center text-sm font-bold text-black dark:text-white sm:pr-5 ltr:sm:text-right rtl:sm:text-left"
                                    >$179.00 every 12 months</span
                                > -->
                            </div>
                        </div>
                    </div>

                    <!-- Enterprises -->
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="group rounded-3xl border-2 border-black bg-white p-6 px-4 transition hover:bg-black hover:drop-shadow-[-10px_30px_70px_rgba(40,38,77,0.25)] dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6"
                        >
                            <div class="mb-8">
                                <h3 class="text-[22px] font-black text-black group-hover:text-white dark:text-white">Enterprise</h3>
                            </div>
                            <ul class="space-y-5 pb-7 text-sm font-bold group-hover:text-white">
                                <li class="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p class="ltr:pl-3 rtl:pr-3">Advanced Customisation</p>
                                </li>
                                <li class="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p class="ltr:pl-3 rtl:pr-3">Unlimited Scalability</p>
                                </li>
                                <li class="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p class="ltr:pl-3 rtl:pr-3">Unlimited Traffic</p>
                                </li>
                                <li class="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p class="ltr:pl-3 rtl:pr-3">Full System Administration</p>
                                </li>
                                <li class="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p class="ltr:pl-3 rtl:pr-3">Advanced Search</p>
                                </li>
                                <li class="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p class="ltr:pl-3 rtl:pr-3">Access and claim Droplets at any time</p>
                                </li>
                            </ul>
                            <div class="border-t-2 border-[#BBC0D0]/50 pt-7">
                                <div class="mb-3 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                                    <div
                                        class="relative mb-2 text-lg font-extrabold before:absolute before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-black group-hover:text-gray group-hover:before:bg-white ltr:pl-5 ltr:before:left-0 rtl:pr-5 rtl:before:right-0 sm:mb-0"
                                    >
                                        Yearly
                                    </div>
                                    <a href="https://kcha60ohz1u.typeform.com/to/QZ0WuD6g" target="_blank" class="btn bg-black text-xl text-white group-hover:bg-white group-hover:text-black xl:w-44">Contact</a>
                                </div>
                                <!-- <span
                                    class="block text-center text-sm font-bold text-black group-hover:text-white dark:text-white sm:pr-5 ltr:sm:text-right rtl:sm:text-left"
                                    >Billed once only</span
                                > -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <p class="p-2 text-center">
          List your Brand here in the ecosystem's list
        </p>
        <!-- Ecosystem -->
        <div class="container pb-16" id="ecosystem">
            <div class="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
                <div class="heading text-center w-full">
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
            <div class="projects flex justify-center">
                <div class="project" :class="activeTab === 'all' || activeTab === 'app' ? 'block' : 'hidden'">
                    <div
                        class="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none"
                    >
                        <a href="https://ecosis.shop" target="_blank" class="absolute top-0 left-0 h-full w-full"></a>
                        <img src="/assets/images/project-3.png" alt="project-3" class="h-52 w-full rounded-t-3xl object-cover" />
                        <div class="p-5 text-sm font-bold">
                            <h6 class="mb-1 text-black dark:text-white">ecosis Network</h6>
                            <p>Transaction-driven digital economy</p>
                        </div>
                    </div>
                </div>
                <!-- <div class="project" :class="activeTab === 'all' || activeTab === 'design' ? 'block' : 'hidden'">
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
                </div> -->

            </div>
            <!-- <div class="w-full flex justify-center pt-24">
              <router-link to="/about-us" class="btn mx-auto mt-2 block w-fit bg-primary text-white lg:mx-0 lg:rtl:ml-auto">Join Us</router-link>
            </div> -->
        </div>

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
