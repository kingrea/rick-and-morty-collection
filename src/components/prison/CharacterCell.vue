<template>

  <div class="w-full flex flex-col items-center relative brick-background">
    <div class="absolute z-20 top-0 left-0 w-2 h-80 rounded-r-full bg-indigo-500 mt-12"></div>
    <div class="absolute z-10 top-0 left-0 w-6 h-[23rem] rounded-r-full bg-room-400 mt-6"></div>

    <div class="absolute z-20 top-0 right-0 w-2 h-80 rounded-l-full bg-indigo-500 mt-12"></div>
    <div class="absolute z-10 top-0 right-0 w-6 h-[23rem] rounded-l-full bg-room-400 mt-6"></div>


    <div
      class="rounded-full text-xs px-4 py-1 bg-emerald-600 text-emerald-200 overflow-hidden border-emerald-900 border-t-4 border-x-2 font-mono font-bold mb-8 -translate-x-32 translate-y-9">
      <span class="block translate-y-[0.10rem]">Cell <slot name="id">?</slot>
      </span>
    </div>
    <div @click="openCharacterModal()" :class="'cell-shape-' + chosenRandomNumber" class="prison-cell relative cursor-pointer">
      <slot name="image"></slot>


      <div class="absolute inset-0  bg-opacity-40 p-4 " :class="generatedColour"></div>

      <div class="absolute opacity-50 w-full inset-0 top-0 -rotate-45 cell-occlusion">
        <div class="bg-white h-10"></div>
        <div class="bg-white h-4 my-4"></div>
      </div>

    </div>

    <div class=" text-black bg-white px-4 py-2 font-marker text-center mb-8  md:mb-20
      text-lg -rotate-2 z-20  -translate-y-6">
      <slot name="name"></slot>
    </div>

    <div class="w-full border-t-4 border-b-4 border-black relative">


      <div class="flex flex-col items-center absolute w-full info-button" @keyup.enter="openCharacterModal()">
        <div class=" h-2 w-2 rounded-full border border-black" :class="{
          'bg-emerald-400': characterInfo.status === 'unknown' || characterInfo.status === 'Alive',
          'bg-red-400': characterInfo.status === 'Dead'
        }"></div>
        <button v-if="characterInfo.id != 0"  @click="openCharacterModal()"
          :class="{ 'info-panel-animate': infoPanelFlyOut }"
          class="rounded-sm bg-orange-500 text-white font-mono uppercase transition-all text-sm p-2 mt-2 info-button-glow">
          <div class="flex flex-row">
            <div class="bg-orange-200 w-8 h-8"></div>
            <div class="flex flex-col pl-1">
              <div>More info</div>
              <div class="h-3 bg-orange-200 w-full"></div>
            </div>
          </div>
          <div class=" space-y-1 pt-1">
            <div class="h-1 bg-orange-200 w-full"></div>
            <div class="h-1 bg-orange-200 w-full"></div>
            <div class="h-1 bg-orange-200 w-full"></div>
            <div class="h-1 bg-orange-200 w-full"></div>
          </div>

        </button>
      </div>


      <div class="bg-gradient-to-b from-info-200 to-info-100 h-32 w-full"></div>
      <div class="h-3 w-full  bg-info-300"></div>
      <div class="h-1 w-full bg-room-700"></div>
      <div class="h-1 w-full bg-black"></div>
      <div class="h-16 w-full bg-room-600 grid grid-cols-8">
        <div class="border-room-700 border-l-4"></div>
        <div class="border-room-700 border-l-4"></div>
        <div class="border-room-700 border-l-4"></div>
        <div class="border-room-700 border-l-4"></div>
        <div class="border-room-700 border-l-4"></div>
        <div class="border-room-700 border-l-4"></div>
        <div class="border-room-700 border-l-4"></div>
        <div class="border-room-700 border-l-4"></div>
      </div>
    </div>
    <div class="w-full flex flex-row overflow-hidden justify-around py-2">
      <div class=" w-36 h-2 mx-2 rounded-full bg-violet-200 glowing-light"></div>
      <div class=" w-36 h-2 mx-2 rounded-full bg-violet-200 glowing-light"></div>
      <div class=" w-36 h-2 mx-2 rounded-full bg-violet-200 glowing-light"></div>
      <div class=" w-36 h-2 mx-2 rounded-full bg-violet-200 glowing-light"></div>
      <div class=" w-36 h-2 mx-2 rounded-full bg-violet-200 glowing-light"></div>
      <div class=" w-36 h-2 mx-2 rounded-full bg-violet-200 glowing-light"></div>
      <div class=" w-36 h-2 mx-2 rounded-full bg-violet-200 glowing-light"></div>
      <div class=" w-36 h-2 mx-2 rounded-full bg-violet-200 glowing-light"></div>
    </div>
  </div>

  <!-- Don't mind these, didn't configure purgeCSS to not ignore dynamic class' -->
  <div class="bg-purple-400"></div>
  <div class="bg-red-400"></div>
  <div class="bg-yellow-400"></div>
  <div class="bg-lime-400"></div>
  <div class="bg-cyan-400"></div>
  <div class="bg-fuchsia-400"></div>
  <div class="bg-pink-400"></div>
  <div class="bg-orange-400"></div>
</template>
<script>
export default {
  props: {
    characterInfo: {
      required: true
    },
    modalState: {
      type: Boolean,
      default: false
    }
  },
  emits: ['open-modal'],
  data() {
    return {
      colourArray: ['orange',
        'red', 'yellow', 'lime', 'cyan', 'purple', 'fuchsia', 'pink'],
      chosenRandomNumber: this.randomNumber(3, 1),
      fixer: true,
    };
  },
  computed: {
    generatedColour() {
      const colour = 'bg-' + this.chosenRandomColour + '-400'
      return {
        [colour]: this.fixer
      }
    },
    chosenRandomColour() {
      return this.colourArray[this.randomNumber(7, 1)]
    },
    infoPanelFlyOut() {
      return this.modalState
    }
  },
  methods: {
    randomNumber(max, min) {
      return Math.floor(Math.random() * (max - min + 1)) + 1;
    },

    openCharacterModal() {
      console.log('modal opens with id: ' + this.characterInfo.id);
      this.$emit('open-modal', this.characterInfo.id);
    }
  },
};
</script>

<style scoped>
.prison-cell {
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.cell-shape-1 {
  -webkit-mask-image: url(@/assets/shape-1.svg);
  mask-image: url(@/assets/shape-1.svg);
  mask-border: url(@/assets/shape-1.svg);
}

.cell-shape-2 {
  -webkit-mask-image: url(@/assets/shape-2.svg);
  mask-image: url(@/assets/shape-2.svg);
  mask-border: url(@/assets/shape-2.svg);
}

.cell-shape-3 {
  -webkit-mask-image: url(@/assets/shape-3.svg);
  mask-image: url(@/assets/shape-3.svg);
  mask-border: url(@/assets/shape-3.svg);
}

.info-button {
  transform: perspective(2rem) rotateX(4deg) translateY(0.5rem);
}

.info-panel-animate {
  transform: translateY(10rem) perspective(0.1rem);
}

.info-button-glow:hover {
  box-shadow:
    0 0 1rem 0.7rem #FFB349;
}

.glowing-light {
  box-shadow:
    0 0 0.4rem 0rem #fff,
    0 0 0.4rem 0.3rem #8C43FF;
  /* in order: x offset, y offset, blur size, spread size, color */
  /* blur size and spread size are optional (they default to 0) */
}

.brick-background {
  background-image: url(@/assets/brick-background.svg);
  background-size: contain;
}

.prision-cell-edges {
  @apply border-yellow-200 border-8
}
</style>