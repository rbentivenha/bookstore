<script>
  import { createEventDispatcher } from "svelte";

  export let shadow = false;
  export let border = false;
  export let inline = false;
  export let divider = false;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("clicked");
  }
</script>

<style>
  .container {
    padding: 10px;
    margin: 5px;
    float: left;
  }

  .inline {
    display: block;
    width: 100%;
  }

  .title {
    font-size: 18px;
  }

  .content {
    font-size: 16px;
    color: darkgrey;
    margin: 5px;
  }

  .footer {
    margin: 2px;
    font-size: 12px;
    color: darkgrey;
  }

  .shadow {
    -webkit-box-shadow: 2px 2px 5px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 5px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 5px -2px rgba(0, 0, 0, 0.75);
  }

  .border {
    border: 1px solid rgb(46, 43, 43, 0.2);
  }

  .divider {
    border-bottom: 1px solid rgb(224, 112, 7);
  }
</style>

<div
  class="container"
  class:shadow
  class:border
  class:inline
  on:click={handleClick}>
  <div class="title">
    <slot name="title" />
  </div>
  <div class:divider />
  <div class="content">
    <slot />
  </div>
  <div class:divider />
  <div class="footer">
    <slot name="footer" />
  </div>
</div>
