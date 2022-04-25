<template>
  <div class="min-h-screen text-white overflow-hidden bg-room-300 relative">


    <div class="w-full bg-gradient-to-b from-room-500 to-room-300">
      <div class="container  py-2 flex flex-col mx-auto max-w-lg">
        <HeaderSearchBar @search-query="getFilteredList" />
        <transition name="list">
        <div v-if="searchResultTotal" class="font-mono px-2 pt-2 text-xs flex flex-row justify-between">
         <div class="border-emerald-800 bg-emerald-600 rounded-sm px-2 py-1">Found {{searchResultTotal}} prisoners containing {{ searchResultQuery }}</div> 
          <button @click="changeFloor('https://rickandmortyapi.com/api/character')" class="border-emerald-800 bg-emerald-600 hover:bg-emerald-400 rounded-sm px-2 py-1 flex flex-row">
             <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" class="w-4 h-4 fill-white"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
               
              <div>Back</div> 
            </button>
          </div> 
          </transition>

      </div>
      <div class="w-full h-1 bg-room-400"></div>
    </div>

       <transition name="list"
         appear>
        <Prison v-if="apiReturn" :characters="apiReturn.results" :key="transitionKey" /> 
      </transition>

    <PageNavigator v-if="apiReturn" :floorInfo="apiReturn" @change-floor="changeFloor" />

  </div>
</template>
<script>

import PageNavigator from "@/components/nav/PageNavigator.vue";
import Prison from "@/components/prison/Prison.vue";
import HeaderSearchBar from "@/components/HeaderSearchBar.vue";
export default {
  components: {
    PageNavigator, Prison, HeaderSearchBar
  },
  data() {
    return {
      apiReturn: null,
      loading: false,
      searchResultTotal: false,
      searchResultQuery: '',
      transitionKey: 1000
    };
  },
  computed: {
  },
  methods: {
    async getList() {
      this.axios.get('https://rickandmortyapi.com/api/character').then((response) => {
        console.log(response.data);
        this.apiReturn = response.data;
      });
    },
    async getFilteredList(x) {
      //const that = this;
      console.log("Searching for " + x)
      this.axios.get('https://rickandmortyapi.com/api/character?name=' + x.toLowerCase()).then((response) => {
        console.log(response.data);
        this.apiReturn = response.data;
        this.searchResultTotal = this.apiReturn.info.count
        this.searchResultQuery = x;
      }).catch((e) => {
        console.log(e)
        const noResult = {
          results: [{
            id: 0,
            name: 'No Inmates Found',
            status: 'Unknown',
            image: 'nobody.jpg'
          }]
        };
        this.apiReturn = noResult;
  
      });
    },
    async changeFloor(newFloor) {
      console.log(newFloor)
      // handle back to main:
      if(newFloor === 'https://rickandmortyapi.com/api/character'){
        this.searchResultTotal = false;
        this.searchResultQuery = '';
      }
      this.axios.get(newFloor).then((response) => {
        console.log(response.data);
        this.apiReturn = response.data;
      });

    }
  },
  mounted() {
    this.getList();
  },
};
</script>

<style scoped>


.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>