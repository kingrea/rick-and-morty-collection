<template>
    <div key="transition-parent" class="absolute inset-0 flex flex-row justify-center ">
        <div class="w-full  bg-orange-700 text-orange-100 relative mx-0 sm:mx-8 mt-0 mb-0 p-2 sm:p-0 sm:mt-8 overflow-y-auto screen-fuzz">
            <button class="absolute top-0 right-0 m-4 text-orange-100 border-4 border-orange-100 rounded-full w-10 h-10
                            hover:border-orange-400 hover:bg-orange-100 hover:text-orange-400"
                @click="closeModal">X</button>
            <div class="flex flex-col  items-center  p-5 mt-4">
                <div class=" w-52 h-52 border-2 border-orange-100">
                    <img :src="character.image" :alt="character.name" class="mix-blend-luminosity	">
                </div>
                <div class="flex flex-col pt-4 text-center">
                    <div class="uppercase text-4xl font-mono ">
                        Inmate #{{ character.id}}
                    </div>
                    <div class="py-1">
                        Alias: {{ character.name}}
                    </div>
                    <div class="grid grid-cols-3 gap-2 w-full pt-2">
                        <div class="border-orange-100 border-2 p-2 flex flex-col">
                            <span class="uppercase font-bold tracking-white text-sm">Status</span>
                            <span>{{ character.status }}</span>
                        </div>
                        <div class="border-orange-100 border-2 p-2 flex flex-col">
                            <span class="uppercase font-bold tracking-white text-sm">Species</span>
                            <span>{{ character.species }}</span>
                        </div>
                        <div class="border-orange-100 border-2 p-2 flex flex-col">
                            <span class="uppercase font-bold tracking-white text-sm">Gender</span>
                            <span>{{ character.gender }}</span>
                        </div>
                    </div>

                </div>
            </div>

            <div class="flex flex-col mx-auto max-w-sm pb-5">
                <div class="font-bold border-b-2 pb-1 border-orange-100">Place of Origin:</div>
                <div class="text-2xl pt-1">{{ character.origin.name }}</div>
            </div>

            <div class="flex flex-col mx-auto max-w-sm pb-5">
                <div class="font-bold border-b-2 pb-1 border-orange-100">Place of Capture:</div>
                <div class="text-2xl pt-1">{{ character.location.name }}</div>
            </div>
            
            <div class="flex flex-col mx-auto max-w-sm pb-5 overflow-hidden">
                <div class="font-bold border-b-2 pb-1 border-orange-100 flex flex-row justify-between items-center">
                    <div>Episodes:</div>
                </div>
                <button v-if="episodeList === null" @click="loadEpisodes()" class="flex flex-row justify-center flex-none mt-2 py-3  border-orange-100 border-2 hover:bg-orange-700">
                    <svg v-if="episodeLoading === false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-white" ><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
                 
                    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fill-white animate-spin w-6 h-6 pr-2">
                    <path d="M304 48C304 74.51 282.5 96 256 96C229.5 96 208 74.51 208 48C208 21.49 229.5 0 256 0C282.5 0 304 21.49 304 48zM304 464C304 490.5 282.5 512 256 512C229.5 512 208 490.5 208 464C208 437.5 229.5 416 256 416C282.5 416 304 437.5 304 464zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM512 256C512 282.5 490.5 304 464 304C437.5 304 416 282.5 416 256C416 229.5 437.5 208 464 208C490.5 208 512 229.5 512 256zM74.98 437C56.23 418.3 56.23 387.9 74.98 369.1C93.73 350.4 124.1 350.4 142.9 369.1C161.6 387.9 161.6 418.3 142.9 437C124.1 455.8 93.73 455.8 74.98 437V437zM142.9 142.9C124.1 161.6 93.73 161.6 74.98 142.9C56.24 124.1 56.24 93.73 74.98 74.98C93.73 56.23 124.1 56.23 142.9 74.98C161.6 93.73 161.6 124.1 142.9 142.9zM369.1 369.1C387.9 350.4 418.3 350.4 437 369.1C455.8 387.9 455.8 418.3 437 437C418.3 455.8 387.9 455.8 369.1 437C350.4 418.3 350.4 387.9 369.1 369.1V369.1z"/></svg>
                    Load
                </button>
                
                <div v-if="episodeList" class="w-full inline-block overflow-y-auto h-[14rem]">
                    <div v-for="ep in episodeList" :key="ep.episode" class="flex flex-col border-b border-orange-50 py-2">
                        <span class="tracking-wide text-lg">{{ ep.name }}</span>
                        <span class="text-xs">{{ ep.episode }}</span>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    emits: ['close-modal'],
    components: {
    },
    props: {

        character: {
            type: Object
        },

    },
    data() {
        return {
            episodeList: null,
            episodeLoading: false
        };
    },
    computed: {
        //  ...mapState(['String: part of the state you want to access locally']) 
        //  NOTE: Needs { mapState } imported as above.
        // ...
    },
    methods: {
        closeModal() {
            this.$emit('close-modal')
        },
        async loadEpisodes(){
            this.episodeLoading = true
            const episodeList = this.character.episode.map((ep) => {
                let episodeNumber = ep.match(/\d/g);
                episodeNumber = episodeNumber.join("");
                episodeNumber = parseInt(episodeNumber);
                return episodeNumber
            })
            console.log(episodeList)
            this.axios.get('https://rickandmortyapi.com/api/episode/[' + episodeList + ']').then((response) => {
              console.log(response.data);
              this.episodeList = response.data;
                this.episodeLoading = false
            });

        },
        async getList() {
          this.axios.get('https://rickandmortyapi.com/api/character').then((response) => {
            console.log(response.data);
            this.apiReturn = response.data;
          });
        },        
    }
};
</script>

<style scoped>
.screen-fuzz{
  box-shadow:
    0 0 1rem 0.2rem #c2410c,
    0 0 0.4rem 0.3rem #ffedd5;
}
</style>