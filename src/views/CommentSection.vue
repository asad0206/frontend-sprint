<template>
    <div class="comment-section">
      <h3>Comments</h3>
      <div v-for="(comment, index) in comments" :key="index" class="comment">
        <p>
          <strong>{{ comment.author }}</strong> ({{ comment.timestamp }})
        </p>
        <p>{{ comment.content }}</p>
        <div v-if="!comment.replied">
          <v-btn small @click="showReplyForm(index)">Reply</v-btn>
        </div>
        <div v-if="comment.showReplyForm">
          <textarea v-model="comment.replyContent"></textarea>
          <v-btn small @click="addReply(index)">Submit Reply</v-btn>
        </div>
        <div v-if="comment.replied">
          <p>
            <strong>{{ comment.replyAuthor }}</strong> ({{ comment.replyTimestamp }}) - Reply:
          </p>
          <p>{{ comment.replyContent }}</p>
        </div>
      </div>
      <div class="new-comment">
        <h4>Add a comment</h4>
        <textarea v-model="newComment.content"></textarea>
        <v-btn @click="addComment">Add Comment</v-btn>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        comments: [],
        newComment: {
          author: "",
          content: "",
        },
      };
    },
    methods: {
      addComment() {
        this.comments.push({
          author: "User",
          content: this.newComment.content,
          timestamp: new Date().toLocaleString(),
          replied: false,
          showReplyForm: false,
        });
        this.newComment.content = "";
      },
      showReplyForm(index) {
        this.comments[index].showReplyForm = !this.comments[index].showReplyForm;
      },
      addReply(index) {
        this.comments[index].replyContent = this.comments[index].replyContent.trim();
        if (this.comments[index].replyContent) {
          this.comments[index].replied = true;
          this.comments[index].replyAuthor = "User";
          this.comments[index].replyTimestamp = new Date().toLocaleString();
        }
        this.comments[index].showReplyForm = false;
      },
    },
  };
  </script>

<style scoped>
.comment-section {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
}

h3 {
  margin-bottom: 1em;
}

.comment {
  padding: 1em;
  border-left: 3px solid #0079d3;
  background-color: #f6f7f8;
  border-radius: 5px;
  margin-bottom: 1em;
}

.comment p {
  margin: 0;
}

.comment strong {
  font-weight: 500;
  font-size: 14px;
}

.comment > p:first-child {
  color: #3c3c3c;
  margin-bottom: 0.5em;
}

.comment .comment-timestamp {
  font-size: 12px;
  color: #999;
  margin-left: 5px;
}

.new-comment {
  margin-top: 1em;
}

.new-comment h4 {
  margin-bottom: 0.5em;
}

.new-comment textarea {
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 0.5em;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}

v-btn {
  font-size: 14px;
  color: #065fd4;
  text-transform: none;
}

textarea {
  resize: none;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  margin-bottom: 0.5em;
}

.comment .reply-section {
  padding-left: 20px;
  margin-top: 10px;
  border-left: 1px solid #e0e0e0;
}
</style>