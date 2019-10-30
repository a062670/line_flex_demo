import lib from '@/lib';

export default {
  name: 'MdImg',
  props: ['template', 'parentLayout', 'direction'],
  data() {
    return {};
  },
  components: {},
  computed: {
    aspectRatio() {
      if (!this.template.aspectRatio) {
        return '100%';
      } else {
        let size = this.template.aspectRatio.split(':');
        return Math.min((size[1] / size[0]) * 100, 300) + '%';
      }
    },
    imageStyle() {
      let style = {};
      style.backgroundImage = `url('${this.template.url}')`;
      if (this.template.backgroundColor) {
        style.backgroundColor = this.template.backgroundColor;
      }
      return style;
    },
    divStyle() {
      let style = lib.flexMessage.getStyle(this.template);

      return style;
    },
    divClass() {
      let cls = [];

      // size
      if (!this.template.size) {
        this.template.size = 'md';
      }
      cls.push(`Ex${lib.flexMessage.renderSizeStr(this.template.size)}`);

      // aspectMode
      cls.push(
        this.template.aspectMode.toLowerCase() === 'cover' ? 'ExCover' : 'ExFit'
      );

      // align
      let align = this.template.align
        ? this.template.align.toLowerCase()
        : 'center';
      if (align === 'start') {
        cls.push('algS');
      } else if (align === 'end') {
        cls.push('algE');
      }

      // gravity
      let gravity = this.template.gravity
        ? this.template.gravity.toLowerCase()
        : 'top';
      if (gravity === 'bottom') {
        cls.push('grvB');
      } else if (gravity === 'center') {
        cls.push('grvC');
      }

      // margin
      cls.push(
        lib.flexMessage.getClassMargin(
          this.template.margin,
          this.parentLayout,
          this.direction
        )
      );

      // action
      if (this.template.action) {
        cls.push('hasAction');
      }

      return cls;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {},
    doAction(action) {
      this.$emit('doAction', action);
    }
  }
};
