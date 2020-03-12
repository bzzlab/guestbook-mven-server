### BlogCreate.vue

```
<script>
    import store from '../../store';
    const API_URL = store.state.apiUrl;
    export default {
        name: "BlogCreate",
        data: () => ({
            blogs: [],
            id: "blog-17",
            blog: {
                nickname: "",
                title: "",
                content: ""
            }
        }),
        mounted() {
            //later replace by fetch(this.$store.state.apiUrl);
            fetch(API_URL +'/api/blog', {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer' // no-referrer, *client
                //,body: JSON.stringify(res) // body data type must match "Content-Type" header
            }).then(function (res) {
                console.log("Response is:");
                console.log(res.blob());
                //return res.json(); // parses JSON response into native JavaScript objects
            });

            // fetch(API_URL +'/api/blog', {method: 'GET', headers: 'application/json'})
            //     //pay attention .then(res => console.log(res.json())) won't work
            //     .then(res => console.log(res));
            //     //.then(res => this.blogs = res.data.result);
        },
        methods:{
            addPost(){
                fetch(API_URL +'/api/post',
                    {
                        method: 'POST',
                        body: JSON.stringify(this.blog),
                        headers: {"content-type":"application/json"}
                    })
                    .then(res => res.json())
                    .then(res => this.id=res.id);
                this.proceed();
            },
            proceed(){
                //redirect to oder list
                this.$router.push("/blog");
            }
        }
    }
</script>
```

Navbare.vue
```
<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-light custom-bg-dark">
<!--            <img :src="`${publicPath}blog.png`" alt="test image"/> -->
            <router-link to="/" class="navbar-brand">
                <img alt="Blog logo" class="logo" src="../assets/blog.png"/>Concert-Blog
            </router-link>
            <button aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation"
                    class="navbar-toggler" data-target="#navbarSupportedContent"
                    data-toggle="collapse" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- ml-auto for margin left auto of these links -->
                <!-- ml-1 align to first column which is left -->
                <ul class="navbar-nav ml-2">
                    <!-- Home -->
                    <li class="nav-item">
                        <router-link class="nav-link" to="/" exact>Home</router-link>
                    </li>
                    <!-- Blog -->
                    <li class="nav-item">
                        <router-link class="nav-link" to="/blog" exact>Blog</router-link>
                    </li>
                    <!-- registration menu -->
                    <!--<li v-if="!$store.state.isLoggedIn" class="nav-item">-->
                    <li class="nav-item">
                        <router-link to="/register" class="nav-link" exact>
                            Register
                        </router-link>
                    </li>
                    <!-- Authentication menu -->
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link" exact>
                            Login
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <!--<a v-on:click.prevent="logout()" class="nav-link" href="#">Logout</a>-->
                        <a class="nav-link" href="#">Logout</a>
                    </li>
                    <li class="nav-item">
<!--                        &lt;!&ndash; Display the current user's username in the navbar &ndash;&gt;-->
<!--                        &lt;!&ndash; TODO: Instead of 'User' is it possible to add navigation item-->
<!--                                in order to select the login button and when logged in then-->
<!--                                the logged-in-user is shown.-->
<!--                        &ndash;&gt;-->
                        <a class="nav-link" href="#">
                            {{ this.$store.state.username ? this.$store.state.username : 'User' }}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "navbar",
        beforeEnter: (toolbar,from,next) => {
            console.log("Path" + process.env.BASE_URL);
            next();
        },
        data () {
            return {
                publicPath: "../"
            }
        },

    }
</script>
```
