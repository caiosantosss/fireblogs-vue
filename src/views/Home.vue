<template>
  <div class="home">

  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost: "Weekly blog articles with all thigs programming including HTML, CSS, JavaScript, and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is a Filter Title",
          blogHTML: "This is a filter blog post title!",
          blogCoverPhoto: "bealtiful-stories",
        },
        {
          title: "This is a Filter Title",
          blogHTML: "This is a filter blog post title!",
          blogCoverPhoto: "designed-for-everyone",
        }
      ]
    };
  },
};
</script>
