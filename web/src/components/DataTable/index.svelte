<script>
  import { createEventDispatcher } from "svelte";
  import Checkbox from "../Checkbox.svelte";
  export let data;
  export let metadata;
  export let hasSelect = false;
  export let hasActionColumn = false;
  let value;
  let searchText;
  let _data = Object.assign({}, data);
  const dispatch = createEventDispatcher();

  function handleSelect(event) {
    dispatch("select", {
      value: event.detail.value
    });
  }

  function handleEdit(set) {
    dispatch("edit", {
      value: set
    });
  }

  function handleDelete(set) {
    dispatch("del", {
      value: set
    });
  }

  let obj = {};
  function handleChange(field) {
    obj[field || "temp"] = searchText;
  }

  $: {
    _data = data.slice();
  }
</script>

<style>
  table {
    margin: 0 auto;
  }

  table tr:nth-child(even) {
    background-color: rgb(245, 248, 251);
  }

  table tr:nth-child(odd) {
    background-color: rgb(174, 205, 240);
  }

  td {
    padding: 2px;
  }

  table th {
    color: white;
    background-color: #2d80c3;
    padding: 7px;
    box-shadow: 0 8px 16px 0 rgb(0, 0, 0, 0.2);
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  input {
    display: block;
    height: 20px;
    padding: 5px;
    width: 90%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 14px;
  }

  .icon {
    font-size: 16px;
  }
</style>

<table>
  <thead>
    {#if hasSelect}
      <th />
    {/if}
    {#each metadata as { title, key, type, searchable }, i}
      {#if searchable}
        <th>
          <div class="dropdown">
            <span class="material-icons icon">search</span>
            {title}
            <div class="dropdown-content">
              <input
                type="text"
                name="search"
                on:change={handleChange(key)}
                bind:value={searchText} />
            </div>
          </div>
        </th>
      {:else if key !== '__typename'}
        <th>
          <div>{title}</div>
        </th>
      {/if}
    {/each}
    {#if hasActionColumn}
      <th>Ações</th>
    {/if}
  </thead>
  {#each _data as set}
    <tr>
      {#if hasSelect}
        <Checkbox on:select={handleSelect} value={set} />
      {/if}
      {#each metadata as line}
        {#if line.type === 'Date'}
          <td>{new Date(Number(set[line.key])).toLocaleString('pt-BR')}</td>
        {:else if line.type === 'Object'}
          <td>-</td>
        {:else if line.type === 'String'}
          <td>{set[line.key]}</td>
        {:else if line.type === 'Number'}
          <td>{set[line.key]}</td>
        {:else if line.type === 'Float'}
          <td>{set[line.key]}</td>
        {/if}
      {/each}
      {#if hasActionColumn}
        <td>
          <span class="material-icons" on:click={handleEdit(set)}>create</span>
          <span class="material-icons" on:click={handleDelete(set)}>
            delete
          </span>
        </td>
      {/if}
    </tr>
  {/each}
</table>
