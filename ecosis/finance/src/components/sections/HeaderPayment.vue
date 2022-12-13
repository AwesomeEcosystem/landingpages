<template>
    <header class="header-area navbar-light text-white fixed-top" :class="{'is-sticky': isSticky}">
        <div class="container-fluid container-fluid--cp-150">
            <nav class="navbar navbar-expand-lg" id="navbar-example2">
                <router-link to="/" class="navbar-brand logo-light">
                    <img src="../../assets/img/logo/light-logo.png" alt="logo">
                </router-link>
                <router-link to="/" class="navbar-brand logo-dark">
                    <img src="../../assets/img/logo/logo-dark.png" alt="logo">
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul class="nav main-menu">
                        <li class="nav-item">
                            <a class="nav-link" href="#home" @click="menuCollapseOnLinkClick">
                                <span>HOME</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about" @click="menuCollapseOnLinkClick">
                                <span>ABOUT</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#service" @click="menuCollapseOnLinkClick">
                                <span>Features</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#exchange" @click="menuCollapseOnLinkClick">
                                <span>exchange</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="btn-group header-button button--white d-none d-xl-block">
                    <a href="https://kcha60ohz1u.typeform.com/to/ShJeY8a2" target="_blank" class="btn btn--white">Whitelist</a>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        data (){
            return {
                isSticky: false
            }
        },
        mounted(){
            window.addEventListener('scroll', () => {
                let scroll = window.scrollY
                if(scroll >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },
        methods: {
            menuCollapseOnLinkClick() {
                document.getElementById('navbarSupportedContent').classList.remove('show')
            }
        },
    }
</script>
