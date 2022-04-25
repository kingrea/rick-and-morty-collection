<template>
    <div class="mx-auto bg-gradient-to-b from-room-100 to-room-200 overflow-hidden">

        <carousel :items-to-show="1">
            <slide v-for="(character, i) in characters" :key="i">                
               <CharacterCell :characterInfo="character" :modalState="showModal" @open-modal="openModal">
                    <template #id>{{ character.id }}</template>
                    <template #image>
                        <img :src="character.image" :alt="character.name" class="object-cover" />
                    </template>
                    <template #name>{{ character.name }}</template>
                </CharacterCell> 
            </slide>

        </carousel>


    <Teleport to="body">
        <Transition name="list">
            <PrisonInfoPanel v-if="showModal" :character="SingleCharacterData" @close-modal="closeModal">
            </PrisonInfoPanel>
        </Transition>
    </Teleport>

    </div>

</template>
<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import CharacterCell from "@/components/prison/CharacterCell.vue";
import PrisonInfoPanel from "@/components/prison/PrisonInfoPanel.vue";
export default {
    components: {
        CharacterCell,
        Carousel,
        Slide,
        Pagination,
        Navigation,
        PrisonInfoPanel
    },
    props: {
        characters: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            isLoading: false,
            SingleCharacterData: null,
            showModal: false
        };
    },
    computed: {
        //  ...mapState(['String: part of the state you want to access locally'])
        //  NOTE: Needs { mapState } imported as above.
        // ...
    },
    methods: {
        async openModal(characterId) {
            this.isLoading = true

            this.axios.get('https://rickandmortyapi.com/api/character/' + characterId).then((response) => {
                console.log(response.data);
                this.SingleCharacterData = response.data;
                this.showModal = true;
                this.isLoading = false;
            });

        },
        closeModal() {
            this.showModal = false;
        }
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
  transform: translateY(100vh);
}
</style>