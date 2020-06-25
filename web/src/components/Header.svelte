<script>
  export let title = "";
</script>

<style>
  div {
    font-size: 14px;
    text-align: start;
    display: flex;
    width: 100%;
    margin-top: 10px;
  }

  .left-column {
    width: 80%;
    float: left;
  }

  .right-column {
    width: 20%;
    float: right;
  }
</style>

<div>
  <div class="left-column">
    <h1>{title}</h1>
  </div>
  <div class="right-column">
    <slot />
  </div>
</div>
