<template>
  <div class="modal">
    <p>{{ this.modalMessage }}</p>
    <button @click="closeModal">Close</button>
  </div>
</template>

<script>
export default {
  props: ["modalMessage"],
  method: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
}
</script>

<style lang="scss" scoped>

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);

  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    align-items: center;
    background-color: #fff;
    padding: 40px 30px;
    width: 300px;

    p {
      text-align: center;
    }

    button {
      align-self: center;
    }
  }
}

</style>
