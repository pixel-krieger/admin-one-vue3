<script>
import { defineComponent } from 'vue'
import chunk from 'lodash/chunk'
import { h } from 'vue'

export default defineComponent({
  name: 'TilesBlock',
  props: {
    maxPerRow: {
      type: Number,
      default: 5
    }
  },
  render () {
    const renderAncestor = elements => h(
      'div',
      { attrs: { class: 'tile is-ancestor' } },
      elements.map((element) => {
        return h('div', { attrs: { class: 'tile is-parent' } }, [
          element
        ])
      })
    )

    if (this.$slots.default().length <= this.maxPerRow) {
      return renderAncestor(this.$slots.default());
    } else {
      return h(
        'div',
        { attrs: { class: 'is-tiles-wrapper' } },
        chunk(this.$slots.default(), this.maxPerRow).map((group) => {
          return renderAncestor(group);
        })
      );
    }
  }
})
</script>
