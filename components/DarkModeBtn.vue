<template>
  <div>
    <i v-if="!darkMode" style="font-size:35px; color:white;" class="fas fa-sun btn" @click="setDarkMode" />
    <i v-else style="font-size:35px;" class="fas fa-moon btn" @click="setLightMode" />
  </div>
</template>

<script lang="ts">
export default {
  components: {},
  data () {
    return {
      darkMode: false,
      colorMode: 'light'
      // colorMode: ["system", "light", "dark"]
    }
  },
  mounted () {
    this.setLightMode()
  },
  methods: {
    setDarkMode () {
      this.darkMode = true
      this.colorMode = 'dark'
      this.$colorMode.preference = this.colorMode
    },
    setLightMode () {
      this.darkMode = false
      this.colorMode = 'light'
      this.$colorMode.preference = this.colorMode
    }
  }
}
</script>
