<template>
    <button type="button" class="btn btn-primary">{{title}}</button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            title: String,
            styling: String
        }
    }
</script>
<!--
See:
https://vuejs.org/v2/guide/class-and-style.html
-->