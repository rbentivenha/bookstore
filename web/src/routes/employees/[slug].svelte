<script context="module">
  import Tab from "../../components/Tab.svelte";
  import NewEmployeeForm from "../../components/Forms/NewEmployeeForm.svelte";
  import Header from "../../components/Header.svelte";
  import { employee_setter } from "../../store/employees.js";
  let initial_value;
  export async function preload({ params, query }) {
    await employee_setter.get_by_id(params.slug);
  }
</script>

<script>
  initial_value = $employee_setter ? {
    ...$employee_setter,
    ...$employee_setter.address
  } : {};
</script>

<svelte:head>
  <title>Editar Funcionário</title>
</svelte:head>

<Header title="Cadastro de Funcionário" />

<NewEmployeeForm {initial_value} />
