<script context="module">
  import Tab from "../../components/Tab.svelte";
  import NewEmployeeForm from "../../components/Forms/NewEmployeeForm.svelte";
  import Header from "../../components/Header.svelte";
  import { employee_setter } from "../../store/employees.js";
  let initial_value;
  let id;
  export async function preload({ params, query }) {
    id = params.slug
    await employee_setter.get_by_id(params.slug);
  }
</script>

<script>
  initial_value = $employee_setter
    ? {
        ...$employee_setter,
        ...$employee_setter.address
      }
    : {};

  function handleSubmit({ detail: { value } }) {
    employee_setter.update(value);
  }
</script>

<svelte:head>
  <title>Editar Funcionário</title>
</svelte:head>

<Header title="Cadastro de Funcionário" />

<NewEmployeeForm {initial_value} on:submit={handleSubmit} />
