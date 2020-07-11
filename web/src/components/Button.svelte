<script>
  export let segment;
</script>

<a href={segment} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  <slot />
</a>
