import lib from '@/lib';

export default {
  name: 'MdIco',
  props: ['template', 'parentLayout', 'direction'],
  data() {
    return {};
  },
  components: {},
  computed: {
    aspectRatio() {
      if (!this.template.aspectRatio) {
        return 1;
      } else {
        let size = this.template.aspectRatio.split(':');
        return Math.max(size[0] / size[1], 0.33);
      }
    },
    imageStyle() {
      let style = lib.flexMessage.getStyle(this.template);
      style.backgroundImage = `url('${this.template.url}')`;
      if (this.template.backgroundColor) {
        style.backgroundColor = this.template.backgroundColor;
      }
      style.width = `${this.aspectRatio}em`;
      return style;
    },
    divClass() {
      let cls = [];

      // size
      if (!this.template.size) {
        this.template.size = 'md';
      }
      cls.push(`Ex${lib.flexMessage.renderSizeStr(this.template.size)}`);

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
