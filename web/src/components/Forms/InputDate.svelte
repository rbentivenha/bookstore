<script>
  import { createEventDispatcher } from "svelte";
  export let value;
  export let label;

  const dispatch = createEventDispatcher();

  function handleInput({ target: { value } }) {
    dispatch("change", {
      value
    });
  }
</script>

<style>
  .container {
    display: flex;
    margin: 0 auto;
  }

  .column-left {
    float: left;
    width: 40%;
  }

  .column-right {
    float: right;
    width: 50%;
    margin: 5px;
  }

  label {
    display: block;
    text-align: end;
    padding: 8px;
  }

  input {
    font-family: Arial, Helvetica, sans-serif;
    border: 1px solid rgb(119, 116, 116);
    font-size: 16px;
    padding: 8px;
    width: 50%;
  }
</style>

<div class="container">
  <div class="column-left">
    <label>{label}</label>
  </div>
  <div class="column-right">
    <input
      type="date"
      on:input={handleInput}
      value={value} />
  </div>
</div>
