<script context="module">
  import Tab from "../../components/Tab.svelte";
  import NewEmployeeForm from "../../components/Forms/NewEmployeeForm.svelte";
  import Header from "../../components/Header.svelte";
  import moment from "moment";
  import { selected } from "../../store/employees.js";

  let initial_value;
  let id;
  export async function preload({ params, query }) {
    id = params.slug;
  }
</script>

<script>
  const employee = $selected;
  const bdate = moment(parseInt($selected.bdate)).format("YYYY-MM-DD");
  initial_value = { ...employee, ...employee.address, bdate };
</script>

<svelte:head>
  <title>Editar Funcionário</title>
</svelte:head>

<Header title="Cadastro de Funcionário" />

<NewEmployeeForm {initial_value} isEdit={true} />
