<script setup>
    import { LinkGetManager } from '@/assets/Utils.js';
    import EventHandler from '@/assets/EventHandler';
    import PHPVisitNotifier from '@/components/utils/PHPVisitNotifier.vue'
</script>

<template>
    <PHPVisitNotifier ref = "notifier"/>
</template>

<script>
    export default {
        data() {
            return {
                ip: ""
            }
        },

        methods: {
            setIP() {

                return new Promise((resolve) => {
                    fetch('https://api.ipify.org?format=json')
                    .then(x => x.json())
                    .then(({ ip }) => {
                        this.term = ip;
                        this.ip = ip;
                        resolve()
                    });
                });


            }
        },
        mounted() {


            EventHandler.on('routeChanged', async () => {
                await this.setIP()
                let code = LinkGetManager.getParameter("code");
                if (code != undefined) {
                    let loc = window.location.toString();
                    console.warn(loc)
                    window.location = loc.replace("?code="+code, "")
                    // location.replace(window.location)
                    console.warn(window.location.toString() + " ")
                    console.warn("CODE: " + code);
                    this.code = code
                    // this.$refs.notifier.go()
                    // alert("gone: " + this.ip)
                    EventHandler.emit("notifierGo", {code: code, ip: this.ip})
                    
                } else {
                    // alert("code: undefined")
                }
            });

            
        }
    }
</script>