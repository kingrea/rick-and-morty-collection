<template>
    <form v-on:submit.prevent="search(searchQuery)" class="flex flex-row shadow-md relative">
        <input type="text" placeholder="Search..." v-model="searchQuery"
            class="py-3 pl-3 rounded-lg max-w-xl w-full justify-center border-4 border-gray-900 text-black">
        <div class="absolute right-0 h-full w-14">
            <div class="flex flex-col w-full h-full items-center justify-center">
                <button type="submit" class="h-8 w-8">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                </button>
            </div>
        </div>
    </form>
</template>
<script>
export default {
    emits: ['search-query'],
    data() {
        return {
            searchQuery: ''
        };
    },
    methods: {
        search(x) {
            if (!x) { this.searchQuery = 'Enter something to search'; return }
            else if(/\d/.test(x)) {
                this.searchQuery = 'Cannot contain numbers'; return
            }
            else {
                console.log('Search submitted to parent')
                this.$emit('search-query', x)
                this.searchQuery = ''

            }
        }
    }
};
</script>