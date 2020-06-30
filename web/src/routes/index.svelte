<script>
  let value = "";

  function handleLogIn() {
    console.log(value)
  }
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<div class="container">
  <form class="w-full max-w-sm mx-auto mt-20">
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-full-name">
          CPF
        </label>
      </div>
      <div class="md:w-2/3">
        <input
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded
          w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none
          focus:bg-white focus:border-purple-500"
          id="inline-full-name"
          type="text"
          bind:value />
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-username">
          Senha
        </label>
      </div>
      <div class="md:w-2/3">
        <input
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded
          w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none
          focus:bg-white focus:border-purple-500"
          id="inline-username"
          type="password"
          placeholder="******************" />
      </div>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3" />
      <div class="md:w-2/3">
        <button
          class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline
          focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button" on:click|preventDefault="{handleLogIn}">
          Acessar
        </button>
      </div>
    </div>
  </form>
</div>
