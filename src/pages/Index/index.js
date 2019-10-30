import { Notify } from 'quasar';
import jsonView from 'vue-json-views';
import copy from 'copy-to-clipboard';
import examples from '@/examples/index.js';
import Flex from '@/components/Flex/index.vue';

export default {
  name: 'PageIndex',
  components: {
    jsonView,
    Flex
  },
  data() {
    return {
      searchText: '',
      left: false,
      right: false,
      selectedKey: '',
      selectedContents: null
    };
  },
  computed: {
    examples() {
      if (!this.searchText) {
        return examples;
      } else {
        let keyword = this.searchText.toLowerCase();
        return examples
          .map(group => {
            return {
              key: group.key,
              title: group.title,
              list: group.list.filter(ex => {
                return ~ex.title.toLowerCase().indexOf(keyword);
              })
            };
          })
          .filter(group => {
            return group.list.length;
          });
      }
    }
  },
  mounted() {},
  methods: {
    selectEx(group, ex) {
      this.selectedContents = null;
      this.$nextTick(() => {
        this.selectedKey = `${group.key}-${ex.key}`;
        this.selectedContents = JSON.parse(JSON.stringify(ex.contents));
      });
    },
    copy() {
      copy(JSON.stringify(this.selectedContents, null, 2));
      Notify.create({
        position: 'top',
        message: '已複製',
        timeout: 2500
      });
    }
  }
};
