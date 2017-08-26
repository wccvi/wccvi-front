<template>
    <div>
        <v-carousel>
            <v-carousel-item
                    v-for="(item,i) in items"
                    v-bind:key="i"
                    v-bind:src="item.src"
                    transition="fade"
                    reverseTransition="fade"
            ></v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        items: [
          { src: 'https://www.warwickshireccvi.co.uk/s/cc_images/teaserbox_2471829901.jpg?t=1484927445' },
          { src: 'https://www.warwickshireccvi.co.uk/s/cc_images/teaserbox_2471829892.jpg?t=1484927244' }
        ]
      }
    }
  }
</script>