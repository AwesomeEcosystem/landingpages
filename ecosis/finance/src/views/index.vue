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
                            <h2 class="text-xl font-extrabold leading-normal sm:text-5xl lg:text-[70px] lg:leading-[90px]">
                              The most <span class="italic text-primary">rewarding </span> payments <span class="italic text-secondary">experience</span>
                            </h2>
                            <p class="my-8 text-2xl lg:w-[100%]">
                              One app to Spend, Send, Save & Earn.
                            </p>
                            <div class="flex justify-center md:justify-start">
                              <div class="m-2">
                                <a href="https://airtable.com/shruP2nuVOBvsktsf" target="_blank" class="btn mx-auto mt-2 block w-fit bg-white lg:mx-0 lg:rtl:ml-auto px-4">Waitlist</a>
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
                                >Simple Login & Deposit
                            </router-link>
                            <p class="mb-10 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black">
                                Sign up using your social accounts and deposit money in one click.
                            </p>
                            <router-link
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
                            </router-link>
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
                                >Shop or Send money
                            </router-link>
                            <p class="mb-10 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black">
                                Select ecosis when you checkout and pay with instant settlement
                            </p>
                            <router-link
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
                            </router-link>
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
                            <router-link
                                to="/services-detail"
                                class="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black"
                                >Earn Rewards
                            </router-link>
                            <p class="mb-10 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black">
                                Receive weekly rewards proportional to your deposit & transaction.
                            </p>
                            <router-link
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
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features -->
        <section class="bg-gradient-to-b from-white/[55%] to-transparent pt-14 dark:bg-none lg:pt-20" id="features">
            <div class="container">
                <div class="lg:w-1/2">
                    <div class="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                        <h6 class="!text-secondary">The ultimate Payment Experience</h6>
                        <h4>Why ecosis</h4>
                        <p class="mt-4 text-lg font-semibold">
                            Assured periodic returns on transactions and deposits for all users, combined with the most competitive transaction fees in the industry for businesses.
                        </p>
                        <p class="italic xl:w-11/12 pt-2">
                            When compared to Paypal, Visa, Master card, Stripe and similar solutions
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="bg-gradient-to-t from-white/[55%] to-transparent py-8 px-5 dark:bg-white/[0.03] dark:bg-none">
            <div class="relative mx-auto max-w-[1440px] rounded-[32px] text-black pt-14">
                <div class="container">
                    <div class="relative">
                        <div class="grid gap-4 lg:grid-cols-2">
                            <div class="pt-28 lg:pb-10 lg:pt-0">
                                <div class="heading mb-12 ltr:lg:text-left rtl:lg:text-right">
                                    <h6 class="!text-secondary">For all</h6>
                                    <h4 class="pb-4 leading-normal lg:!leading-[50px] text-black">Users</h4>
                                </div>
                                <ul class="space-y-8 text-lg font-semibold text-black">
                                    <li class="flex items-center gap-3.5">
                                        <div class="flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.60002 5.79922L2.42502 3.62422C2.24169 3.44089 2.01669 3.34922 1.75002 3.34922C1.48336 3.34922 1.25002 3.44922 1.05002 3.64922C0.866691 3.83255 0.775024 4.06589 0.775024 4.34922C0.775024 4.63255 0.866691 4.86589 1.05002 5.04922L3.90002 7.89922C4.08336 8.08255 4.31669 8.17422 4.60002 8.17422C4.88336 8.17422 5.11669 8.08255 5.30002 7.89922L10.975 2.22422C11.1584 2.04089 11.25 1.81589 11.25 1.54922C11.25 1.28255 11.15 1.04922 10.95 0.849219C10.7667 0.665886 10.5334 0.574219 10.25 0.574219C9.96669 0.574219 9.73336 0.665886 9.55002 0.849219L4.60002 5.79922Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                        <p>Users can earn upto 1% rewards risk-free against their spending volume and deposits every week.</p>
                                    </li>
                                    <li class="flex items-center gap-3.5">
                                        <div class="flex h-5 w-5 items-center justify-center rounded-full bg-secondary">
                                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.60002 5.79922L2.42502 3.62422C2.24169 3.44089 2.01669 3.34922 1.75002 3.34922C1.48336 3.34922 1.25002 3.44922 1.05002 3.64922C0.866691 3.83255 0.775024 4.06589 0.775024 4.34922C0.775024 4.63255 0.866691 4.86589 1.05002 5.04922L3.90002 7.89922C4.08336 8.08255 4.31669 8.17422 4.60002 8.17422C4.88336 8.17422 5.11669 8.08255 5.30002 7.89922L10.975 2.22422C11.1584 2.04089 11.25 1.81589 11.25 1.54922C11.25 1.28255 11.15 1.04922 10.95 0.849219C10.7667 0.665886 10.5334 0.574219 10.25 0.574219C9.96669 0.574219 9.73336 0.665886 9.55002 0.849219L4.60002 5.79922Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                        <p>Inherent privacy & data protection ensuring that our user's information and transactions are secure and private.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a href="javascript:" class="btn text-xl text-white group-hover:bg-white group-hover:text-primary dark:text-black xl:w-44"
                        >Waitlist</a
                    >
                </div>
            </div>
        </div>

        <div class="bg-gradient-to-t from-white/[55%] to-transparent py-8 px-5 dark:bg-white/[0.03] dark:bg-none lg:py-20">
            <div class="relative mx-auto max-w-[1440px] rounded-[32px] bg-black pt-14">
                <img src="/assets/images/modern-saas/perfomance-design.svg" alt="" class="absolute bottom-0 ltr:right-0 rtl:left-0" />
                <img src="/assets/images/modern-saas/dollers-icon.svg" alt="" class="absolute top-0 ltr:right-14 rtl:left-14" />
                <div class="container">
                    <div class="relative">
                        <img src="/assets/images/modern-saas/perfomance-doller-icon.svg" alt="" class="absolute bottom-0 ltr:left-0 rtl:right-0" />
                        <div class="grid gap-4 lg:grid-cols-2">
                            <div class="pt-28 lg:pb-10 lg:pt-0">
                                <div class="heading mb-12 ltr:lg:text-left rtl:lg:text-right">
                                    <h6 class="!text-secondary">Additionally for</h6>
                                    <h4 class="pb-4 leading-normal !text-white lg:!leading-[50px]">Businesses</h4>
                                </div>
                                <ul class="space-y-8 text-lg font-semibold text-white">
                                    <li class="flex items-center gap-3.5">
                                        <div class="flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.60002 5.79922L2.42502 3.62422C2.24169 3.44089 2.01669 3.34922 1.75002 3.34922C1.48336 3.34922 1.25002 3.44922 1.05002 3.64922C0.866691 3.83255 0.775024 4.06589 0.775024 4.34922C0.775024 4.63255 0.866691 4.86589 1.05002 5.04922L3.90002 7.89922C4.08336 8.08255 4.31669 8.17422 4.60002 8.17422C4.88336 8.17422 5.11669 8.08255 5.30002 7.89922L10.975 2.22422C11.1584 2.04089 11.25 1.81589 11.25 1.54922C11.25 1.28255 11.15 1.04922 10.95 0.849219C10.7667 0.665886 10.5334 0.574219 10.25 0.574219C9.96669 0.574219 9.73336 0.665886 9.55002 0.849219L4.60002 5.79922Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                        <p>Save up to 80%* on transaction costs with our platform.</p>
                                    </li>
                                    <li class="flex items-center gap-3.5">
                                        <div class="flex h-5 w-5 items-center justify-center rounded-full bg-secondary">
                                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.60002 5.79922L2.42502 3.62422C2.24169 3.44089 2.01669 3.34922 1.75002 3.34922C1.48336 3.34922 1.25002 3.44922 1.05002 3.64922C0.866691 3.83255 0.775024 4.06589 0.775024 4.34922C0.775024 4.63255 0.866691 4.86589 1.05002 5.04922L3.90002 7.89922C4.08336 8.08255 4.31669 8.17422 4.60002 8.17422C4.88336 8.17422 5.11669 8.08255 5.30002 7.89922L10.975 2.22422C11.1584 2.04089 11.25 1.81589 11.25 1.54922C11.25 1.28255 11.15 1.04922 10.95 0.849219C10.7667 0.665886 10.5334 0.574219 10.25 0.574219C9.96669 0.574219 9.73336 0.665886 9.55002 0.849219L4.60002 5.79922Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                        <p>Free and Instant checkout integration with storefronts, apps and websites.</p>
                                    </li>
                                    <li class="flex items-center gap-3.5">
                                        <div class="flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.60002 5.79922L2.42502 3.62422C2.24169 3.44089 2.01669 3.34922 1.75002 3.34922C1.48336 3.34922 1.25002 3.44922 1.05002 3.64922C0.866691 3.83255 0.775024 4.06589 0.775024 4.34922C0.775024 4.63255 0.866691 4.86589 1.05002 5.04922L3.90002 7.89922C4.08336 8.08255 4.31669 8.17422 4.60002 8.17422C4.88336 8.17422 5.11669 8.08255 5.30002 7.89922L10.975 2.22422C11.1584 2.04089 11.25 1.81589 11.25 1.54922C11.25 1.28255 11.15 1.04922 10.95 0.849219C10.7667 0.665886 10.5334 0.574219 10.25 0.574219C9.96669 0.574219 9.73336 0.665886 9.55002 0.849219L4.60002 5.79922Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                        <p>Inbuilt reward mechanisms allows for significantly reduced customer acquisition costs.</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="pb-20 lg:pt-20 lg:pb-8" data-aos="fade-up" data-aos-duration="1000">
                                <img src="/assets/images/modern-saas/perfomance-img.png" alt="" class="w-full" />
                            </div>
                        </div>
                    </div>
                    <a href="javascript:" class="btn text-xl text-white group-hover:bg-white group-hover:text-secondary dark:text-black xl:w-44"
                        >Contact Us</a
                    >
                </div>
            </div>
        </div>

        <!-- Examples -->
        <section class="py-12">
            <div class="container">
                <div class="heading text-center">
                    <h6>System</h6>
                    <h4>Performance</h4>
                </div>
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div class="rounded-[18px] bg-white p-4 dark:bg-black" data-aos="fade-up" data-aos-duration="1000">
                        <div class="flex justify-between">
                            <div class="flex items-center gap-2.5">
                                <a href="javascript:" class="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F7931A]">
                                    <svg width="30" height="30" viewBox="0 0 97 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M47.8917 0.84375C51.5534 1.72875 55.205 2.65708 58.8567 3.58375C57.39 9.46875 55.92 15.3538 54.4534 21.2371C57.3917 21.8954 60.3217 22.5871 63.2434 23.3171C64.7017 17.4654 66.1567 11.6138 67.62 5.76375C71.28 6.65375 74.9367 7.56708 78.5884 8.49708C77.0934 14.5038 75.5934 20.5088 74.0967 26.5154C79.7384 28.5038 85.385 30.9154 89.935 34.8921C92.2167 36.9204 94.1434 39.4138 95.2267 42.2888C96.335 45.1554 96.5517 48.3071 96.1434 51.3371C95.7484 54.3154 94.9234 57.2754 93.4084 59.8854C92.235 61.9138 90.63 63.6938 88.6984 65.0254C86.7117 66.4004 84.4267 67.3038 82.0817 67.8554C84.7117 69.2271 87.2167 70.9021 89.275 73.0554C90.9367 74.7804 92.2584 76.8471 93.045 79.1154C94.4984 83.2638 94.1 87.8154 92.9384 91.9838C91.75 96.2071 89.9234 100.354 86.9634 103.644C84.9617 105.894 82.4367 107.669 79.645 108.802C75.7634 110.415 71.505 110.892 67.33 110.845C62.6667 110.809 58.04 110.12 53.4634 109.284C51.9484 115.35 50.4334 121.417 48.9217 127.485C45.27 126.549 41.61 125.639 37.95 124.739C39.4434 118.759 40.9367 112.779 42.43 106.799C39.5134 106.047 36.5984 105.289 33.6867 104.52C32.1867 110.532 30.69 116.545 29.19 122.559C25.54 121.635 21.8867 120.727 18.2334 119.822C19.7434 113.745 21.2584 107.672 22.7717 101.597C15.43 99.6421 8.04669 97.8454 0.671692 96.0171C2.48836 91.8304 4.30169 87.6421 6.12169 83.4571C8.39836 84.0471 10.6734 84.6504 12.9567 85.2188C14.1034 85.4704 15.31 85.7938 16.4767 85.4638C17.8534 85.0788 18.85 83.8254 19.2134 82.4821C21.5717 73.0121 23.9334 63.5438 26.2984 54.0754C26.6517 54.1571 27.0067 54.2354 27.3634 54.3038C27.0167 54.1921 26.6684 54.0888 26.32 53.9888C27.945 47.4471 29.5767 40.9088 31.21 34.3704C31.6817 32.8854 31.4217 31.2021 30.6267 29.8737C29.8584 28.6054 28.5317 27.7738 27.145 27.3254C24.27 26.3854 21.2934 25.8071 18.355 25.1054C19.3234 21.1988 20.2967 17.2921 21.2717 13.3871C25.36 14.3771 29.435 15.4187 33.5167 16.4304C35.4167 16.8687 37.2717 17.4704 39.18 17.8787C40.5817 18.2237 41.9934 18.5254 43.4017 18.8454C44.8967 12.8438 46.395 6.84375 47.8917 0.84375ZM51.4984 34.2071C49.6734 41.5054 47.8567 48.8054 46.035 56.1038C49.115 56.9088 52.1867 57.7688 55.3234 58.3338C58.7767 58.9821 62.3367 59.3438 65.8317 58.8254C68.3517 58.4388 70.9034 57.4004 72.55 55.3804C74.1384 53.4254 74.84 50.8338 74.7484 48.3404C74.655 45.9521 73.4584 43.7171 71.745 42.0904C69.3984 39.8238 66.3767 38.4288 63.35 37.3154C59.4967 35.9371 55.4834 35.1004 51.4984 34.2071ZM43.2784 67.1554C41.2717 75.2104 39.26 83.2637 37.2534 91.3187C44.21 93.1071 51.2534 95.1304 58.505 94.9421C61.7567 94.8304 65.1984 94.2188 67.8 92.1304C70.1834 90.2454 71.335 87.1538 71.375 84.1771C71.405 82.0988 70.6867 80.0454 69.4517 78.3838C67.8317 76.1971 65.5517 74.6021 63.1734 73.3371C56.9684 70.0904 50.0334 68.7404 43.2784 67.1554Z"
                                            fill="white"
                                        />
                                    </svg>
                                </a>
                                <h4 class="text-lg font-bold text-black dark:text-white">BTC</h4>
                                <span class="rounded bg-[rgba(198,198,198,0.4)] py-1 px-[6px] text-[10px] font-semibold leading-3 text-black dark:text-white"
                                    >BITCON</span
                                >
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
                                <h3 class="text-xl font-bold leading-[25px] text-black dark:text-white">$56,623.54</h3>
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
                                <a href="javascript:" class="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#345d9d]">
                                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_209)">
                                            <path d="M10.4628 12.4716L5.25708 9.99516L10.4628 19.0926L15.6687 9.99516L10.4628 12.4716Z" fill="white" />
                                            <path d="M15.1018 8.14969L10.4628 0.0926056L5.81866 8.15897L10.4628 5.95589L15.1018 8.14969Z" fill="white" />
                                            <path d="M6.22125 9.20426L10.4629 11.2134L14.7116 9.20092L10.4629 7.19194L6.22125 9.20426Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_209">
                                                <rect width="19" height="19" fill="white" transform="translate(0.952393 0.0926056)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <h4 class="text-lg font-bold text-black dark:text-white">ETH</h4>
                                <span class="rounded bg-[rgba(198,198,198,0.4)] py-1 px-[6px] text-[10px] font-semibold leading-3 text-black dark:text-white"
                                    >ETHEREUM</span
                                >
                            </div>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M31.0208 27.0264L24.0208 33.0078M24.0208 33.0078L17.0208 27.0264M24.0208 33.0078V14.0078"
                                    stroke="#FF0000"
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
                                <h4 class="mt-2 text-lg font-semibold text-[#FF0000]">-2.22%</h4>
                            </div>
                            <div>
                                <apexchart height="55" :options="dangerChartOptions" :series="dangerChartSeries"></apexchart>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-[18px] bg-white p-4 dark:bg-black" data-aos="fade-up" data-aos-duration="1000">
                        <div class="flex justify-between">
                            <div class="flex items-center gap-2.5">
                                <a href="javascript:" class="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F3BA2F]">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M15 6.77988L9.17344 12.6059V12.6053L5.78379 9.21562L15 0L24.2186 9.21855L20.8283 12.6082L15 6.77988ZM3.39023 11.6092L0 15L3.38965 18.3885L6.77988 15L3.39023 11.6092ZM15 23.2189L9.17344 17.3936V17.393L5.7791 20.7779L5.78379 20.7832L15 30L24.2203 20.7785L20.8283 17.3906L15 23.2189ZM26.6086 11.6104L23.2189 15L26.6104 18.3896L30 15L26.6086 11.6104ZM15 11.5591L18.4371 15.0015L18.4365 15.0026H18.4395L15 18.4421L11.5623 15.005L11.5576 15.0003L11.5623 14.9956L12.1641 14.3938L12.457 14.1009L15 11.5591Z"
                                            fill="white"
                                        />
                                    </svg>
                                </a>
                                <h4 class="text-lg font-bold text-black dark:text-white">BNB</h4>
                                <span class="rounded bg-[rgba(198,198,198,0.4)] py-1 px-[6px] text-[10px] font-semibold leading-3 text-black dark:text-white"
                                    >BINANCE</span
                                >
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
                </div>
            </div>
        </section>

        <!-- Partners TODO smaller logos -->
        <section class="bg-[url(/assets/images/team-bg.png)] bg-cover bg-center bg-no-repeat py-14 dark:bg-black/50 lg:py-[100px]" id="partner">
            <div class="">
                <div class="heading text-center">
                    <h6>Our</h6>
                    <h4>Partners</h4>
                </div>
                <div class="flex flex-wrap justify-center">
                    <a class="cursor-pointer text-center px-4" href="https://changenow.io/" target="_blank">
                        <div class="flex justify-center items-center h-[280px] w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/changenow_dark.png" alt="team-member-1" class="h-64 w-64 rounded-3xl" />
                        </div>
                        <h4 class="p-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            Change Now
                        </h4>
                        <h6 class="text-sm font-bold">Crypto Exchange</h6>
                    </a>
                    <a class="cursor-pointer text-center px-4" href="https://www.revolut.com/" target="_blank">
                        <div class="flex justify-center items-center h-[280px] w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/revolut.png" alt="team-member-4" class="h-64 w-64 rounded-3xl" />
                        </div>
                        <h4 class="p-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            Revolut
                        </h4>
                        <h6 class="text-sm font-bold">One App, All things Money</h6>
                    </a>
                    <a class="cursor-pointer text-center px-4" href="https://www.estglobalinc.com/" target="_blank">
                        <div class="flex justify-center items-center h-[280px] w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/fab_dark.png" alt="team-member-4" class="h-64 w-64 rounded-3xl" />
                        </div>
                        <h4 class="p-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            FAB
                        </h4>
                        <h6 class="text-sm font-bold">Fintech and Blockchain Association</h6>
                    </a>
                    <a class="cursor-pointer text-center px-4" href="https://www.shefan.pro/" target="_blank">
                        <div class="flex justify-center items-center h-[280px] w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/shefan_dark.png" alt="team-member-3" class="h-64 w-64 rounded-3xl" />
                        </div>
                        <h4 class="p-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            SheFan Pro
                        </h4>
                        <h6 class="text-sm font-bold">Womens Empowerment Blockchain</h6>
                    </a>
                    <a class="cursor-pointer text-center px-4" href="https://puri.sm/" target="_blank">
                        <div class="flex justify-center items-center h-[280px] w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/purism_dark.png" alt="team-member-2" class="h-64 w-64 rounded-3xl" />
                        </div>
                        <h4 class="p-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            Purism
                        </h4>
                        <h6 class="text-sm font-bold">Beautify, Privacy-respecting Devices</h6>
                    </a>
                    <a class="cursor-pointer text-center px-4" href="https://discord.gg/RrgAb9dwYE" target="_blank">
                        <div class="flex justify-center items-center h-[280px] w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/forge_dark.png" alt="team-member-2" class="h-64 w-64 rounded-3xl" />
                        </div>
                        <h4 class="p-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            The Forge
                        </h4>
                        <h6 class="text-sm font-bold">Dev Projects</h6>
                    </a>
                    <a class="cursor-pointer text-center px-4" href="https://kalipo.io/" target="_blank">
                        <div class="flex justify-center items-center h-[280px] w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/kalipo_dark.png" alt="team-member-2" class="h-64 w-64 rounded-3xl" />
                        </div>
                        <h4 class="p-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            Kalipo
                        </h4>
                        <h6 class="text-sm font-bold">DAO as a Service</h6>
                    </a>
                    <a class="cursor-pointer text-center px-4" href="https://www.spirinova.dev/" target="_blank">
                        <div class="flex justify-center items-center h-[280px] w-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/assets/images/partners/spirinova_dark.png" alt="team-member-2" class="h-64 w-64 rounded-3xl" />
                        </div>
                        <h4 class="p-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            Spirinova
                        </h4>
                        <h6 class="text-sm font-bold">Spirit of Innovation</h6>
                    </a>
                </div>
            </div>
        </section>

        <!-- Cal to Action -->
        <section>
          <!-- Screenshots Mockups and

          'monitise your payments'

          Button
         -->
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
