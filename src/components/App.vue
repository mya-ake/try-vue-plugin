<template>
  <div>
    <header>
      <h1>Try Vue plugin</h1>
    </header>
    <main>
      <dl>
        <dt>Browser</dt>
        <dd v-text="browser"></dd>
      </dl>
    </main>
    <footer>
      <small>&copy; 2017 mya-ake</small>
    </footer>
  </div>
</template>
<script>
export default {
  created() {
    this.$enviroment.browser = 'test'
  },
  computed: {
    browser() {
      return this.$enviroment.browser
    }
  },
}
</script>
