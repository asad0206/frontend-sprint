<template>
  <div>
    <v-container align-self="center" justify="center">
      <v-row align-self="auto" justify="center">
        <v-col cols="12" md="6">
          <v-card v-for="(post, index) in posts" :key="index" class="mb-5">
            <v-card-title>
              <h3>{{ post.title }}</h3>
            </v-card-title>
            <v-card-text>
              <p>{{ post.content }}</p>
            </v-card-text>
            <v-card-actions>
              <v-row no-gutters align-self="center">
                <v-col>
                  <v-btn icon v-on:click="upvote(index)">
                    <v-icon>mdi-thumb-up</v-icon>
                  </v-btn>
                  <span>{{ post.upvotes }}</span>
                  <v-btn icon v-on:click="downvote(index)">
                    <v-icon>mdi-thumb-down</v-icon>
                  </v-btn>
                  <span>{{ post.downvotes }}</span>
                  <v-btn text color="primary" @click="viewPost(post)">
                    View post
                  </v-btn>
                </v-col>
                <v-col class="text-right">
                  <v-btn text color="primary" @click="toggleComments(index)">
                    <v-icon>mdi-comment</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="post.showComments">
                <v-divider></v-divider>
                <v-card-text title="Comments">
                  <ul>
                    <li v-for="(comment, commentIndex) in post.comments" :key="commentIndex">
                      {{ comment.text }}
                    </li>
                  </ul>
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col>
          <v-btn fab dark color="primary" v-on:click="openCreatePostDialog">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="createPostDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Create New Post</span>
        </v-card-title>
        <v-card-text>
          <v-text-field label="Title" v-model="newPost.title"></v-text-field>
          <v-textarea label="Content" v-model="newPost.content"></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="createPostDialog = false">
            Cancel
          </v-btn>
          <v-btn color="green" text @click="createPost">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>

import CommentSection from "@/views/CommentSection.vue";

export default {
  data() {
    return {
      createPostDialog: false,
      newPost: {
        title: '',
        content: '',
      },
      dialog: false,
      selectedPost: null,
      posts: [
        {
          title: "First post",
          content: "Lorem ipsum dolor sit amet.",
          upvotes: 3,
          downvotes: 1,
          showComments: false,
          comments: [
            { text: "This is a great post!" },
            { text: "Thanks for sharing!" },
          ],
        },
        {
          title: "Second post",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, at!",
          upvotes: 5,
          downvotes: 2,
          showComments: false,
          comments: [{ text: "I found this post really helpful!" }],
        },
        {
          title: "Third post",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, magni!",
          upvotes: 5,
          downvotes: 3,
          showComments: false,
          comments: [{ text: "Nice Post" }],
        },
      ],
    };
  },
  components: {
    CommentSection,
  },
  methods: {
    upvote(index) {
      this.posts[index].upvotes++;
    },
    downvote(index) {
      this.posts[index].downvotes++;
    },
    viewPost(post) {
      this.selectedPost = post;
      this.dialog = true;
    },
    openCreatePostDialog() {
      this.createPostDialog = true;
    },
    createPost() {
      if (this.newPost.title && this.newPost.content) {
        this.posts.push({
          title: this.newPost.title,
          content: this.newPost.content,
          upvotes: 0,
          downvotes: 0,
          showComments: false,
          comments: [],
        });
        this.newPost.title = '';
        this.newPost.content = '';
        this.createPostDialog = false;
      }
    },
    toggleComments(index) {
      this.posts[index].showComments = !this.posts[index].showComments;
    },
  },
};
</script>
