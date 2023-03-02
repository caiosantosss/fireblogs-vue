<template>
  <div class="blog-card">
    <div class="icons">
      <div class="edit">
        <Edit />
      </div>
      <div class="delete">
        <Delete />
      </div>
    </div>
    <img :src="require(`../assets/blogCards/${post.blogCoverPhoto}.jpg`)" alt="">
    <div class="info">
      <h4>{{ post.blogTitle }}</h4>
      <p>Posted on: {{ post.blogDate }}</p>
      <router-link class="link" to="#">
        View The Post <Arrow class="arrow" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Arrow from '../assets/Icons/arrow-right-light.svg';
import Edit from '../assets/Icons/edit-regular.svg';
import Delete from '../assets/Icons/trash-regular.svg';
export default {
  name: 'BlogCard',
  props: ['post'],
  components: {
    Arrow,
    Edit,
    Delete,
  },
};
</script>

<style lang="scss" scoped>
.blog-card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  min-height: 420px;
  transition: .5s ease all;

  &:hover {
    transform: rotateZ(-1deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .icons {
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 99;

    .icon {
      display: flex;
      justify-content: content;
      align-items: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #fff;
      transition: .5s ease all;

      &:hover {
        background-color: #303030;
      }
    }
  }
}
</style>
