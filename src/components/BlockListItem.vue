<template>
    <li class="blockItem">
        <div class="row">
            <div class="blockTitle">{{block.title}}</div>
            <span class="mainText">{{block.text}}</span>
            <a class="linkToGit" :href=block.link
            v-if="block.hasLink">Open repo</a>
        </div>
    </li>
</template>

<script>
    export default {
        name: "Block",
        props:['block'],
        data() {
            return {
                
            }
        },
        

    }
</script>

<style scoped>

.blockTitle{
    font-size: 100px;
    margin: 0%;
    padding: 100px;
    white-space: pre-wrap;
}

.optionalOne{
    text-decoration: line-through;
}

.mainText{
    font-size:40px;
    white-space: pre-wrap;
}

.linkToGit{
    font-size:50px;
}

.linkToGit:hover{
    color:white;
    text-decoration: underline;
}

.blockItem{
    list-style: none;
    padding: 0%;
}


</style>