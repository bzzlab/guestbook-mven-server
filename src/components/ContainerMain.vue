<template>
    <div class="ContainerMain">
    <main role="main" class="container">
        <div class="starter-template">
            <h1>{{ title }}</h1>
            <p class="lead">{{ abstract }}</p>
        </div>
    </main>
    </div>
</template>

<script>
    export default {
        ContainerMain: "MainContainer",
        props: {
            title: String,
            abstract: String
        }
    };
</script>