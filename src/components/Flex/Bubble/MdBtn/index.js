import lib from '@/lib';
export default {
  name: 'MdBtn',
  props: ['template', 'parentLayout', 'direction'],
  data() {
    return {};
  },
  components: {},
  computed: {
    aStyle() {
      let style = {};
      if (
        !this.template.style ||
        this.template.style.toLowerCase() === 'link'
      ) {
        style['color'] = this.template.color;
      } else {
        style['background-color'] = this.template.color;
      }
      return style;
    },
    divStyle() {
      let style = lib.flexMessage.getStyle(this.template);
      return style;
    },
    divClass() {
      let cls = [];

      // height
      if (!this.template.height) {
        this.template.height = 'md';
      }
      cls.push(`Ex${lib.flexMessage.renderSizeStr(this.template.height)}`);

      // gravity
      let gravity = this.template.gravity
        ? this.template.gravity.toLowerCase()
        : 'top';
      if (gravity === 'bottom') {
        cls.push('grvB');
      } else if (gravity === 'center') {
        cls.push('grvC');
      }

      // flex
      if (this.template.flex === 0) {
        cls.push('fl0');
      }
      if (!('flex' in this.template) && this.parentLayout) {
        if (
          (this.parentLayout.toLowerCase() === 'vertical' &&
            this.template.height) ||
          (this.parentLayout.toLowerCase() === 'horizontal' &&
            this.template.width)
        ) {
          cls.push('fl0');
        }
      }

      // style
      let styleArrayS = ['1', '2', 'L'];
      let styleArrayB = ['primary', 'secondary', 'link'];
      let style = this.template.style
        ? this.template.style.toLowerCase()
        : 'link';
      cls.push(`ExBtn${styleArrayS[styleArrayB.indexOf(style)]}`);

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
