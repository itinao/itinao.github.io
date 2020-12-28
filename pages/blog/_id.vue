<template>
  <div class="container">
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>