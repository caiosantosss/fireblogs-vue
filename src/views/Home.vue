<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />\
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCard from "../components/BlogCard";
export default {
  name: "Home",
  components: { BlogPost, BlogCard },
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
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a Filter Title",
          blogHTML: "This is a filter blog post title!",
          blogCoverPhoto: "designed-for-everyone",
        }
      ],
      sampleBlogCards: [
        { blogTitle: 'Blog Card #1', blogCoverPhoto: 'stock-1', blogDate: 'January 20, 2023' },
        { blogTitle: 'Blog Card #2', blogCoverPhoto: 'stock-2', blogDate: 'January 20, 2023' },
        { blogTitle: 'Blog Card #3', blogCoverPhoto: 'stock-3', blogDate: 'January 20, 2023' },
        { blogTitle: 'Blog Card #4', blogCoverPhoto: 'stock-4', blogDate: 'January 20, 2023' },
      ],
    };
  },
};
</script>
