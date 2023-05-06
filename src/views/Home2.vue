<template>
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
              </v-col>
              <v-col class="text-right">
                <v-btn text color="primary" @click="show = !show"
                  ><v-icon>mdi-comment</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text
                title="Comments"
                v-for="(comments, index) in posts"
                :key="index"
                class="mb-5"
              >
                <ul>
                  {{
                    comments.comments
                  }}
                </ul>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-btn fab dark color="primary" v-on:click="createPost">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      posts: [
        {
          title: "First post",
          content: "Lorem ipsum dolor sit amet.",
          upvotes: 3,
          downvotes: 1,
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
          comments: [{ text: "I found this post really helpful!" }],
        },
        {
          title: "Third post",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, magni!",
          upvotes: 5,
          downvotes: 3,
          comments: [{ text: "Nice Post" }],
        },
      ],
    };
  },
  methods: {
    upvote(index) {
      this.posts[index].upvotes++;
    },
    downvote(index) {
      this.posts[index].downvotes++;
    },
    viewPost(post) {},
    createPost() {},
  },
};
</script>
