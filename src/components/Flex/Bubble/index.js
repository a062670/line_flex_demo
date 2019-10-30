import { Notify } from 'quasar';
import MdBx from './MdBx/index.vue';
import MdImg from './MdImg/index.vue';
export default {
  name: 'Bubble',
  props: ['template'],
  data() {
    return {};
  },
  components: {
    MdBx,
    MdImg
  },
  computed: {
    divClass() {
      let cls = [];

      if (this.template.size) {
        cls.push(
          `Ly${this.template.size
            .substr(0, 1)
            .toUpperCase()}${this.template.size.substr(1, 1).toLowerCase()}`
        );
      } else {
        cls.push('LyMe');
      }

      return cls;
    },
    direction() {
      return this.template.direction
        ? this.template.direction.toLowerCase()
        : 'ltr';
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {},
    getHeight() {
      return this.$refs.item.offsetHeight;
    },
    setHeight(height) {
      this.$refs.item.style.height = `${height}px`;
    },
    doAction(action) {
      if (!action) {
        return;
      }
      switch (action.type.toLowerCase()) {
        case 'uri':
          window.open(action.uri);
          break;
        case 'postback':
          this.sendActionMessage(action);
          break;
      }
    },
    sendActionMessage(action) {
      Notify.create({
        position: 'top',
        message: action.displayText || action.text || action.label,
        timeout: 2500
      });
    }
  }
};
