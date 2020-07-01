<script>
  import Tab from "../../components/Tab.svelte";
  import NewEmployeeForm from "../../components/Forms/NewEmployeeForm.svelte";
  import Header from "../../components/Header.svelte";
  import { employee_setter, create_employee } from "../../store/employees.js";
  import { goto } from "@sapper/app";

  async function handleSubmit({ detail: { value } }) {
    await create_employee(value);
    await goto("/employees", history.replaceState);
  }
</script>

<svelte:head>
  <title>Cadastro de Funcionário</title>
</svelte:head>

<Header title="Cadastro de Funcionário" />

<NewEmployeeForm on:submit={handleSubmit} />
