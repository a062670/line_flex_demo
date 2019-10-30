import Swiper from 'swiper/dist/js/swiper.js';
import Bubble from '../Bubble/index.vue';

export default {
  name: 'Carousel',
  props: ['template'],
  data() {
    return {};
  },
  components: {
    Bubble
  },
  computed: {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$refs.bubble.forEach(item => {
        item.setHeight('auto');
      });
      let bubbleMaxH = this.$refs.bubble.reduce((prev, item) => {
        let height = item.getHeight();
        return prev > height ? prev : height;
      }, 0);
      this.$refs.bubble.forEach(item => {
        item.setHeight(bubbleMaxH);
      });

      this.swiperMain = new Swiper(this.$refs.swiper, {
        freeMode: true,
        slidesPerView: 'auto',
        spaceBetween: 0
      });
    }
  }
};
