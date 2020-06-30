<script>
  import Nav from "../components/Nav.svelte";
  import TopNav from "../components/TopNav.svelte";

  export let segment;
</script>

<TopNav {segment} />
<div class="flex">
  <div class="w-1/12 h-12">
    <Nav {segment} />
  </div>
  <main class="w-11/12 h-12">
    <slot />
  </main>
</div>
