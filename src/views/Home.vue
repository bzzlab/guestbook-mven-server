<template>
    <div id="home">
        <JumbotronF
                title="Concert"
                abstract="Early blog-site of the Frauenfeld festival 2020!"
        />
        <router-link class="nav-link" to="/blog">
            <button type="button" class="btn btn-primary">{{label1}}</button>
        </router-link>
    </div>
</template>
<script>
// @ is an alias to /src
//import MainContainer from "@/components/ContainerMain.vue";
import JumbotronF from "../components/JumbotronF.vue";
export default {
    name: "home",
    data: function () {
        return {
            label1: "Create your first blog!"
        }
    },
    components: {
        JumbotronF
    },
    //Check response from the user
    beforeCreate() {
        fetch(this.$store.state.apiUrl + '/api/user', {
            method: 'GET'
        })
        //.then(res => res.json())
        .then(res => console.log(res));
    }
};
</script>
