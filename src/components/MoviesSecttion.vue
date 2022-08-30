<template>
    <div>
        <!-- <h1>componente MoviesSection.vue</h1>ss -->
        <Carousel :per-page="6">
            <Slide v-for="movie in movies" :key="movie.id" >
                <b-card
                    :title="movie.name"
                    :img-src="movie.banner"
                    img-top
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                </b-card>
            </Slide>
        </Carousel>
    </div>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
    components:{
        Carousel, Slide
    },

    props:{
        movies:{
            type:Array
        }
    }

};
</script>