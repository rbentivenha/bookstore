<script context="module">
  import Tab from "../../components/Tab.svelte";
  import NewEmployeeForm from "../../components/Forms/NewEmployeeForm.svelte";
  import Header from "../../components/Header.svelte";
  import { get_employee_by_id, update_employee } from "../../store/employees.js";
  import moment from "moment";
  import { goto } from "@sapper/app";

  let initial_value;
  let id;
  export async function preload({ params, query }) {
    id = params.slug
    const employee = await get_employee_by_id(id);
    const bdate = moment(parseInt(employee.bdate)).format("YYYY-MM-DD")
    initial_value = {...employee, ...employee.address, bdate};
  }
</script>

<script>
  async function handleSubmit({ detail: { value } }) {
    await update_employee(value);
    await goto("/employees");
  }
</script>

<svelte:head>
  <title>Editar Funcionário</title>
</svelte:head>

<Header title="Cadastro de Funcionário" />

<NewEmployeeForm {initial_value} on:submit={handleSubmit} />
