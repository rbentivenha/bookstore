<script>
  import { log_in } from "../store/auth.js";
  import { goto } from "@sapper/app";
  import Header from "../components/Header.svelte";
  import { stores } from "@sapper/app";
  const { session } = stores();

  let value = "";

  async function handleLogIn() {
    try {
      // const user = await log_in(value);
      session.set({user: value});
      await goto("/employees");
    } catch (err) {
      console.error(err);
    }
  }
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<Header title="Login" />

<div class="w-full max-w-xs mx-auto">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        CPF
      </label>
      <input
        bind:value
        class="shadow appearance-none border rounded w-full py-2 px-3
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="CPF" />
    </div>
    <div class="flex items-center justify-between">
      <button
        on:click|preventDefault={handleLogIn}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
        rounded focus:outline-none focus:shadow-outline"
        type="button">
        Acessar
      </button>
    </div>
  </form>
</div>
