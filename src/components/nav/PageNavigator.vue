<template>

<div class="fixed inset-x-0 bottom-0 w-full text-black font-mono">
    <div class="flex flex-row justify-center items-center pb-6">

        <div v-if="floorInfo.info" class="rounded-md bg-gray-100 p-2 flex flex-col items-center">
            <button v-if="floorInfo.info.prev !== null" class="hover:bg-gray-200 px-3" @click="goToNewFloor(this.floorInfo.info.prev)">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg>

            </button>
            <div class="font-bold py-1">Floor {{currentFloor}}</div>
            <button v-if="floorInfo.info.next !== null" class="hover:bg-gray-200 px-3"  @click="goToNewFloor(this.floorInfo.info.next)">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
            </button>
        </div>

        <div v-else class="rounded-md bg-gray-100 p-2 flex flex-col items-center">
              <button class="hover:bg-gray-200 px-3 flex flex-row"  @click="goToNewFloor('https://rickandmortyapi.com/api/character')">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                 <span>Back to collection</span> 
            </button>
        </div>
    </div>
</div>

</template>
<script>
export default {
    props: {
        floorInfo: {
            required: true
        }
    },
    computed: {
        // restriction: can't search for numbers
        // validation of search string will remove these
        currentFloor() {

            if (this.floorInfo.info.prev === null) { return 1; }
            else {
                let numb = this.floorInfo.info.prev.match(/\d/g);
                numb = numb.join("");
                numb = parseInt(numb)
                console.log(numb);
                return numb + 1            
            }
        },
        prevFloor(){
            if(this.floorInfo.info.prev === null) { return null} else {
               return this.currentFloor - 1;
            }
        },
        nextFloor(){
            if(this.floorInfo.info.next === null) { return null} else {
               return this.currentFloor + 1;
            }
        }
    },
    methods: {
        goToNewFloor(floor) {
            console.log(floor)
            this.$emit('change-floor', floor);
        }

    }
};
</script>

<style scoped>
</style>