import axios from 'axios';
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        /* User */
        userName: null,
        userEmail: null,
        userAvatar: null,

        /* NavBar */
        isNavBarVisible: true,

        /* FooterBar */
        isFooterBarVisible: true,

        /* Aside */
        isAsideVisible: true,
        isAsideMobileExpanded: false,

        /* Sample data (commonly used) */
        clients: []
    }),
    actions: {
        // mutations
        /* A fit-them-all action */
        basic(payload) {
            this[payload.key] = payload.value;
        },

        /* User */
        user(payload) {
            if (payload.name) {
                this.userName = payload.name;
            }
            if (payload.email) {
                this.userEmail = payload.email;
            }
            if (payload.avatar) {
                this.userAvatar = payload.avatar;
            }
        },

        /* Aside Mobile */
        asideMobileStateToggle(payload = null) {
            const htmlClassName = 'has-aside-mobile-expanded';

            let isShow;

            if (payload !== null) {
                isShow = payload;
            } else {
                isShow = !this.isAsideMobileExpanded;
            }

            if (isShow) {
                document.documentElement.classList.add(htmlClassName);
            } else {
                document.documentElement.classList.remove(htmlClassName);
            }

            this.isAsideMobileExpanded = isShow;
        },

        /* Full Page mode */
        fullPage(payload) {
            this.isNavBarVisible = !payload;
            this.isAsideVisible = !payload;
            this.isFooterBarVisible = !payload;
        },
        //   end of mutations

        asideDesktopOnlyToggle(payload = null) {
            let method

            switch (payload) {
                case true:
                    method = 'add'
                    break
                case false:
                    method = 'remove'
                    break
                default:
                    method = 'toggle'
            }
            document.documentElement.classList[method]('has-aside-desktop-only-visible')
        },
        toggleFullPage(payload) {
            this.fullPage = payload

            document.documentElement.classList[!payload ? 'add' : 'remove']('has-aside-left', 'has-navbar-fixed-top')
        },
        fetch(payload) {
            axios
                .get(`data-sources/${payload}.json`)
                .then((response) => {
                    if (response.data && response.data.data) {
                        this.basic({
                            key: payload,
                            value: response.data.data
                        });
                    }
                })
                .catch((error) => {
                    alert(error.message);
                });
        }
    }
})
