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
            }
        },

        mounted() {
            EventHandler.on('routeChanged', () => {
                
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
                    alert("gone")
                    EventHandler.emit("notifierGo", code)
                    
                } else {
                    // alert("code: undefined")
                }
            });

            
        }
    }
</script>