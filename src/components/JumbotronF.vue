<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">{{ title }}</h1>
      <p class="lead">
        {{ abstract }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  JumbotronF: "Fluid jumbotron",
  props: {
    title: String,
    abstract: String
  }
};
</script>