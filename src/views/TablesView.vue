<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Tables
      <router-link
        v-slot:right
        to="/"
        class="button"
      >
        Dashboard
      </router-link>
    </hero-bar>
    <section class="section is-main-section">
      <notification-bar class="is-info">
        <div>
          <b-icon
            icon="buffer"
            custom-size="default"
          />
          <b>Sorted and paginated table.</b>&nbsp;Based on Buefy's table.
        </div>
      </notification-bar>

      <card-component
        class="has-table has-mobile-sort-spaced"
        title="Clients"
        icon="account-multiple"
      >
        <clients-table-sample
          checkable
        />
      </card-component>

      <hr>

      <notification-bar class="is-info">
        <div>
          <b-icon
            icon="buffer"
            custom-size="default"
          />
          <b>Tightly wrapped</b> &mdash; table header becomes card header
        </div>
      </notification-bar>

      <card-component class="has-table has-mobile-sort-spaced">
        <clients-table-sample
          checkable
        />
      </card-component>

      <hr>

      <notification-bar class="is-info">
        <div>
          <b-icon
            icon="buffer"
            custom-size="default"
          />
          <b>Empty table.</b> When there's nothing to show
        </div>
      </notification-bar>

      <card-component class="has-table has-thead-hidden">
        <clients-table-sample is-empty />
      </card-component>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import NotificationBar from '@/components/NotificationBar.vue'
import ClientsTableSample from '@/components/ClientsTableSample.vue'
import CardComponent from '@/components/CardComponent.vue'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'

export default defineComponent({
  name: 'TablesView',
  components: {
    HeroBar,
    TitleBar,
    CardComponent,
    ClientsTableSample,
    NotificationBar
  },
  data () {
    return {
      titleStack: ['Admin', 'Tables']
    }
  }
})
</script>
