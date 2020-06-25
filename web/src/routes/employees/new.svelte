<script>
  import Tab from "../../components/Tab.svelte";
  import NewEmployeeForm from "../../components/Forms/NewEmployeeForm.svelte";
  import Header from "../../components/Header.svelte";
  import { employee_setter } from "../../store/employees.js";

  function handleSubmit({ detail: { value } }) {
    value[0].salary = parseFloat(value[0].salary)
    employee_setter.create(value[0]);
  }
</script>

<svelte:head>
  <title>Cadastro de Funcionário</title>
</svelte:head>

<Header title="Cadastro de Funcionário" />

<NewEmployeeForm on:submit={handleSubmit} />
