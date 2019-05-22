<template> 
    <div>
        <div v-for="(block, index) in blocks" :key="index">
            <div><BlockListItem v-bind:block="block"/></div>
        </div>
    </div>
</template>

<script>
    import BlockListItem from "./BlockListItem"

    export default {
        name: "Blocks",
        props: ["blocks"],
        components:{
            BlockListItem
        },
        data() {
            return {
            }
        },
    }
</script>

<style scoped>

h1{
    
    margin: 0%;
    padding: 400px;
    
}

/* h1 {
  font-size: 72px;
  background: -webkit-linear-gradient(#fabd9f, #020202);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
} */

</style>