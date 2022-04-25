<template>
<div class=" bg-room-400 min-h-screen flex flex-col items-center justify-center text-white">
        <img src="@/assets/the-collector.png" alt="The collector" class=" w-48 -m-24">
    <div class="mx-auto container max-w-md  bg-room-200 flex flex-col p-4 rounded-md">
        <h1 class="text-4xl font-marker text-center  -rotate-2 pb-7 pt-4">The Rick and Morty collection</h1>
        <p class="text-center pt-2 pb-4">The collectors collection is now complete! Every character from the Rick and Morty universe has been captured and placed in custody. For one night only, enter and see the complete Rick and Morty Collection!</p>
        <router-link to="/collection"> <div class="bg-purple-900 px-4 py-2 text-center text-xl uppercase tracking-wider rounded-sm hover:bg-purple-500">Enter</div></router-link>
    </div>
</div>
</template>
<script>
// import { mapState } from 'vuex'
// import Component from "@/components/.../Component";
export default {
    components: {
        //  ... 
    },
    name: "", // ...name of file
    props: {

        // propName: {
        //   // type: Object, Boolean, Array, String
        //   // required: true/false
        //   // default: true/false
        // },

    },
    data() {
        return {
            // insert data here
        };
    },
    computed: {
        //  ...mapState(['String: part of the state you want to access locally']) 
        //  NOTE: Needs { mapState } imported as above.
        // ...
    },
    methods: {
        // ...
    }
};
</script>

<style scoped>

</style>