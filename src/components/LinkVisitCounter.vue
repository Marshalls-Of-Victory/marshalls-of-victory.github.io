<script setup>
    import { LinkGetManager } from '@/assets/Utils.js';
    import EventHandler from '@/assets/EventHandler';
    import PHPVisitNotifier from '@/components/utils/PHPVisitNotifier.vue'
</script>

<template>
    <span v-if = "goodtogo">
        <PHPVisitNotifier :code = "code"/>
    </span>
</template>

<script>
    export default {
        data() {
            return {
                goodtogo: false,
                code: ""
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
                    this.goodtogo = true
                    
                }
            });

            
        }
    }
</script>