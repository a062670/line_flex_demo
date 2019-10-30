import { Notify } from 'quasar';
import Carousel from './Carousel/index.vue';
import Bubble from './Bubble/index.vue';

export default {
  name: 'Flex',
  props: ['template'],
  data() {
    return {};
  },
  components: {
    Carousel,
    Bubble
  },
  computed: {},
  mounted() {
    this.init();
  },
  methods: {
    init() {},
    sendActionMessage(action) {
      Notify.create({
        position: 'top',
        message: action.displayText || action.text || action.label,
        timeout: 2500
      });
    }
  }
};
