import lib from '@/lib';
import MdSpn from '../MdSpn/index.vue';

export default {
  name: 'MdTxt',
  props: ['template', 'parentLayout', 'direction'],
  data() {
    return {};
  },
  components: {
    MdSpn
  },
  computed: {
    pStyle() {
      let style = {};
      if (this.template.maxLines) {
        style['max-height'] = `${this.template.maxLines * 1.4}em`;
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

      // align
      let align = this.template.align
        ? this.template.align.toLowerCase()
        : 'start';
      if (align === 'center') {
        cls.push('ExAlgC');
      } else if (align === 'end') {
        cls.push('ExAlgE');
      }

      // decoration
      if (this.template.decoration) {
        let decorationIdx = ['none', 'underline', 'line-through'].indexOf(
          this.template.decoration
        );
        cls.push(['ExTxtDecNone', 'ExTxtDecUl', 'ExTxtDecLt'][decorationIdx]);
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

      // wrap
      if (this.template.wrap) {
        cls.push('ExWrap');
      }

      // weight
      if (this.template.weight) {
        cls.push('ExWB');
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
    },
    contents() {
      return this.template.contents || [];
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
