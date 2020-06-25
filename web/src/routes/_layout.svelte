<script>
  import Nav from "../components/Nav.svelte";
  import TopNav from "../components/TopNav.svelte";

  export let segment;
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: 5% 95%;
    position: relative;
    margin: 0 auto;
  }

  .content {
    grid-column-start: 2;
    grid-column-end: 4;
  }

  .topnav {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 4;
    overflow: hidden;
    background-color: #333;
  }
</style>

<div class="grid">
  <div class="topnav">
    <TopNav {segment} />
  </div>
  <Nav {segment} />
  <main class="content">
    <slot />
  </main>
</div>
