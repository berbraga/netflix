<template>
    <div>
        <h1>componente MoviesSection.vue</h1>
        <VueCarousel>
            <slide v-for="movie in movies" :key="movie.id">
                <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-top
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                </b-card>
            </slide>
        </VueCarousel>
    </div>
</template>

<script>
import VueCarousel from 'vue-carousel'

export default {
    components:{
        VueCarousel
    }
};

props:{
    movies:{
        type:Array
    }
}
</script>