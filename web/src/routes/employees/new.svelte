<script>
  import Tab from "../../components/Tab.svelte";
  import NewEmployeeForm from "../../components/Forms/NewEmployeeForm.svelte";
  import Header from "../../components/Header.svelte";
  import { employee_setter } from "../../store/employees.js";

  function handleSubmit({ detail: { value } }) {
    employee_setter.create(value);
  }
</script>

<svelte:head>
  <title>Cadastro de Funcionário</title>
</svelte:head>

<Header title="Cadastro de Funcionário" />

<NewEmployeeForm on:submit={handleSubmit} />
