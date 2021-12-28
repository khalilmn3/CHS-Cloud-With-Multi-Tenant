<template>
    <div>
        Logging Out
    </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('logout')
      .then(response => {
        window.open("/",'_self')
      }).catch(error=>{
        window.open("/",'_self')
      })
  }
}
</script>
