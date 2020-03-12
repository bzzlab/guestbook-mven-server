<template>
    <div id="create_post">
    <h1>Blog</h1>
        <p>What were experiences in your last concert? Just tell to the community.</p>
        <h4>Recent entries</h4>

        <!-- Task-1: Add code here -->
        <!--        <div>-->
        <!--            {{ blogs }}-->
        <!--        </div>-->
        <!-- Task-End -->

        <!-- Task-2: Add code here -->
        <div v-for="entry in blogs">
            <div class="card" style="width: 25rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ entry.title }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">From {{ entry.nickname }}</h6>
                    <p class="card-text">{{ entry.content }}</p>
                </div>
            </div>
            <div style="margin-bottom: 1rem"></div>
        </div>
        <!-- Task-End -->

        <!-- Task-3: Add code here -->
        <h4 style="margin-top: 2rem; margin-bottom: 1rem">Post a blog</h4>
        <form v-on:submit.prevent="addPost">
            <div class="form-group col-md-6">
                <div class="form-group">
                    <label for="nickname">Nickname</label>
                    <input v-model="blog.nickname" type="text" class="form-control" id="nickname" placeholder="Nickname">
                </div>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input v-model="blog.title" type="text" class="form-control" id="title" placeholder="Title">
                </div>
                <div class="form-group">
                    <label for="content">Text</label>
                    <textarea v-model="blog.content" class="form-control" id="content" rows="3"/>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary" data-toggle="modal"
                            data-target="#confirmBlogEntry">Create</button>
                </div>
            </div>
        </form>
        <!-- Task-End -->

        <div style="margin-bottom: 5rem"> {{ message }} </div>
    </div>
</template>

<script>
    import store from '../../store';
    import http from 'axios'
    const API_URL = store.state.apiUrl;
    export default {
        name: "BlogCreate",
        data: () => ({
            message: null,
            blogs: null,
            blog: {
                nickname: "",
                title: "",
                content: ""
            }
        }),
        mounted() {
            /*  When this site is called then mounted-function will be automatically called.
                It makes a call to the server with the corresponding API
             */
            //later replace by http.get(this.$store.state.apiUrl) ...
            http.get(API_URL +'/api/blog')
                .then(response => (this.blogs = response.data));
        },
        methods:{
            //Used methods in the form
            addPost(){
                fetch(API_URL +'/api/blog',
                    {
                        method: 'POST',
                        body: JSON.stringify(this.blog),
                        headers: {"content-type":"application/json"}
                    })
                    .then(res => res.json());
                this.message = 'Your blog has been posted.';
                //reload page
                location.reload();
            },
            proceed(){
                //redirect to oder list
                this.$router.push("/blog");
                this.message = 'Blog posted.'
            }
        }
    }
</script>
