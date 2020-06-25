<script>
  import DataTable from "../components/DataTable/index.svelte";

  export let tabs = [{ key: "", content: "" }];
  let tab;

  function openCity(tabName) {
    tab = tabName;
  }
</script>

<style>
  /* Style the tab */
  .tab {
    float: left;
    background-color: #2d80c3;
    box-shadow: 0 8px 16px 0 rgb(0, 0, 0, 0.2);
    height: 100%;
  }

  /* Style the buttons inside the tab */
  .tab button {
    display: block;
    background-color: inherit;
    color: white;
    padding: 22px 16px;
    width: 100%;
    border: none;
    outline: none;
    text-align: left;
    cursor: pointer;
    transition: 0.3s;
    font-size: 17px;
  }

  /* Change background color of buttons on hover */
  .tab button:hover {
    background-color: #3e86c2;
    width: 100%;
  }

  /* Create an active/current tablink class */
  .tab button.active {
    background-color: #528fc2;
    width: 100%;
  }

  /* Style the tab content */
  .hide {
    display: none;
  }

  .tabcontent {
    border-top: none;
  }

  .grid {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 20% 80%;
    margin: 10px;
  }

  .head {
    background-color: #2d80c3;
    text-align: start;
    color: white;
    box-shadow: 0 4px 8px 0 rgb(0, 0, 0, 0.2);
    padding: 10px;
    margin-bottom: 5px;
  }
</style>

<div class="grid">
  <div class="tab">
    {#each tabs as { key }}
      <button
        class={tab === key ? 'tablinks active' : 'tablinks'}
        on:click={() => openCity(key)}>
        <b>{key}</b>
      </button>
    {/each}
  </div>

  {#each tabs as { key, component, content }}
    <div class={tab === key ? 'tabcontent' : 'tabcontent hide'}>
      <div class="head">
        <h2>{key}</h2>
      </div>
      <svelte:component this={component} />
    </div>
  {/each}
</div>
