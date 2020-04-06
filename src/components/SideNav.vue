<template>
  <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <img v-if="photoURL" :src="photoURL">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>kassy11</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item v-for="(item, index) in items" :key="index" :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        { title: '連絡先一覧', icon: 'mdi-menu' }
      ]
    }
  }
}
</script>
