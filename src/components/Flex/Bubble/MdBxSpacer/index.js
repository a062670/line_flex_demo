import lib from '@/lib';

export default {
  name: 'MdBxSpacer',
  props: ['template', 'parentLayout', 'direction'],
  data() {
    return {};
  },
  components: {},
  computed: {
    divClass() {
      let cls = [];

      // size
      if (!this.template.size) {
        this.template.size = 'md';
      }
      cls.push(`spc${lib.flexMessage.renderSizeStr(this.template.size)}`);

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
