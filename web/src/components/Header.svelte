<script>
  export let title = "";
</script>

<div class="flex my-2 py-2 justify-between items-center">
  <div>
    <h1 class="text-3xl">{title}</h1>
  </div>
  <div class="bg-grey-500">
    <slot />
  </div>
</div>
