import lib from '@/lib';
import MdBtn from '../MdBtn/index.vue';
import MdBx from '../MdBx/index.vue';
import MdBxFiller from '../MdBxFiller/index.vue';
import MdBxSpacer from '../MdBxSpacer/index.vue';
import MdIco from '../MdIco/index.vue';
import MdImg from '../MdImg/index.vue';
import MdSep from '../MdSep/index.vue';
import MdTxt from '../MdTxt/index.vue';

export default {
  name: 'MdBx',
  props: ['template', 'parentLayout', 'direction'],
  data() {
    return {};
  },
  components: {
    MdBtn,
    MdBx,
    MdBxFiller,
    MdBxSpacer,
    MdIco,
    MdImg,
    MdSep,
    MdTxt
  },
  computed: {
    divStyle() {
      let style = lib.flexMessage.getStyle(this.template);
      return style;
    },
    divClass() {
      let cls = [];

      // spacing
      if (
        this.template.spacing &&
        this.template.spacing.toLowerCase() !== 'none'
      ) {
        cls.push(`spc${lib.flexMessage.renderSizeStr(this.template.spacing)}`);
      }
      // layout
      let layoutArrayS = ['hr', 'vr', 'hr bl'];
      let layoutArrayB = ['horizontal', 'vertical', 'baseline'];
      cls.push(
        layoutArrayS[layoutArrayB.indexOf(this.template.layout.toLowerCase())]
      );

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

      // position
      if (this.template.position === 'absolute') {
        cls.push('ExAbs');
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
