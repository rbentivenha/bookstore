<script>
  export let segment;
</script>

<style>
  .btn {
    background-color: #ddd;
    border: none;
    color: black;
    padding: 16px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    transition: 0.3s;
  }

  .btn:hover {
    background-color: #3e8e41;
    color: white;
  }

  a {
    text-decoration: none;
  }
</style>


<a href={segment} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  <slot />
</a>
