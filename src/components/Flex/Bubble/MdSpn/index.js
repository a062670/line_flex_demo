import lib from '@/lib';

export default {
  name: 'MdSpn',
  props: ['template', 'parentLayout', 'direction'],
  data() {
    return {};
  },
  components: {},
  computed: {
    divStyle() {
      let style = {};
      if (this.template.color) {
        style['color'] = this.template.color;
      }
      return style;
    },
    divClass() {
      let cls = [];

      // size
      if (!this.template.size) {
        this.template.size = 'sm';
      }
      cls.push(`Ex${lib.flexMessage.renderSizeStr(this.template.size)}`);

      // decoration
      if (this.template.decoration) {
        let decorationIdx = ['none', 'underline', 'line-through'].indexOf(
          this.template.decoration
        );
        cls.push(['ExTxtDecNone', 'ExTxtDecUl', 'ExTxtDecLt'][decorationIdx]);
      }

      // weight
      if (this.template.weight) {
        cls.push('ExWB');
      }

      // style
      if (this.template.style) {
        cls.push(
          `ExFntStyIt${this.template.style
            .substr(0, 1)
            .toUpperCase()}${this.template.style.substr(1, 1).toLowerCase()}`
        );
      }

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
