import lib from '@/lib';

export default {
  name: 'MdSep',
  props: ['template', 'parentLayout', 'direction'],
  data() {
    return {};
  },
  components: {},
  computed: {
    divStyle() {
      let style = {};
      if (this.template.color) {
        style['border-color'] = this.template.color;
      }
      return style;
    },
    divClass() {
      let cls = [];

      // margin
      cls.push(
        lib.flexMessage.getClassMargin(
          this.template.margin,
          this.parentLayout,
          this.direction
        )
      );

      return cls;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {}
  }
};
