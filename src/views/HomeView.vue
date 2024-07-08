<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar :has-right-visible="false">
      Dashboard
    </hero-bar>
    <section class="section is-main-section">
      <notification-bar class="is-info">
        Please star this project on GitHub

        <template v-slot:right>
          <a
            href="https://github.com/vikdiesel/admin-one-vue-bulma-dashboard"
            target="_blank"
            class="button is-white is-small"
          >
            <b-icon
              icon="github-circle"
              custom-size="default"
            />
            <span>GitHub</span>
          </a>
        </template>
      </notification-bar>

      <tiles-block>
        <card-widget
          class="tile is-child"
          type="is-primary"
          icon="account-multiple"
          :number="512"
          label="Clients"
        />
        <card-widget
          class="tile is-child"
          type="is-info"
          icon="cart-outline"
          :number="7770"
          prefix="$"
          label="Sales"
        />
        <card-widget
          class="tile is-child"
          type="is-success"
          icon="chart-timeline-variant"
          :number="256"
          suffix="%"
          label="Performance"
        />
      </tiles-block>

      <card-component
        title="Performance"
        icon="finance"
        header-icon="reload"
      >
        <div
          class="chart-area"
        >
        </div>
      </card-component>

      <card-component
        title="Clients"
        class="has-table has-mobile-sort-spaced"
      >
        <clients-table-sample />
      </card-component>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import TilesBlock from '@/components/TilesBlock.vue'
import CardWidget from '@/components/CardWidget.vue'
import CardComponent from '@/components/CardComponent.vue'
import ClientsTableSample from '@/components/ClientsTableSample.vue'
import NotificationBar from '@/components/NotificationBar.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    ClientsTableSample,
    CardComponent,
    CardWidget,
    TilesBlock,
    HeroBar,
    TitleBar,
    NotificationBar
  },
  data () {
    return {
      titleStack: ['Admin', 'Dashboard'],
    }
  },
  mounted () {
    this.$buefy.snackbar.open({
      message: 'Welcome back',
      queue: false
    })
  },
  methods: {
  }
})
</script>
