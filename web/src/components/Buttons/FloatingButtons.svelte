<script>
  import { createEventDispatcher } from "svelte";
  export let isEdit = false;

  const dispatch = createEventDispatcher();

  function handleCancel() {
    dispatch("cancel");
  }

  function handleClick() {
    if (!isEdit) {
      dispatch("save");
    } else {
      dispatch("update");
    }
  }
</script>

<div
  class="mb-10 mr-5 flex bottom-0 fixed w-full shadow-lg border-r border-b
  border-t border-l border-gray-400">
  <button
    on:click={handleCancel}
    class="mx-auto my-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2
    px-6 rounded">
    Cancelar
  </button>
  <button
    on:click={handleClick}
    class="mx-auto my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2
    px-6 rounded">
    Salvar
  </button>
</div>
