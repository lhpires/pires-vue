<template>
    <section class="relative w-full">
      <Carousel ref="myCarousel" :itemsToShow="1.2" :wrapAround="true" :transition="500">
        <Slide v-for="photo in photos.content" :key="photo.id">
          <div class="carousel__item">
            <img class="py-10" :src="$page.props.appUrl + '/images/' + photo.url_photo" :alt="photo.alt" :title="photo.title">
          </div>
        </Slide>
        <template #addons>
          <Navigation class="pagPires" />
          <Pagination class="dark:hidden"  />
        </template>
      </Carousel>
    
    </section>

</template>
  
<script setup>
import { defineProps,reactive,ref,onMounted  } from 'vue';
import { Carousel, Pagination, Slide,Navigation } from 'vue3-carousel';
import { ChevronRight,ChevronLeft } from 'lucide-vue-next';
import 'vue3-carousel/dist/carousel.css'; 

const props = defineProps({
   photos:{
    type: Array,
    required: true
   }
});

const photos = reactive({
  content: props.photos
});

const myCarousel = ref(null);

onMounted( () => {
  var elementosCarousel = document.querySelectorAll('.pagPires svg');
  for (var i = 0; i < elementosCarousel.length; i++) {
    var elemento = elementosCarousel[i];
    elemento.classList.add('dark:fill-green-700');
  }
});



</script>

<style scoped>

.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
  