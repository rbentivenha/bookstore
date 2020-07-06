<script context="module">
  import NewUserForm from "../../components/Forms/NewUserForm.svelte";
  import Header from "../../components/Header.svelte";
  import moment from "moment";
  import { selected } from "../../store/customers.js";

  let initial_value;
  let id;
  export async function preload({ params, query }) {
    id = params.slug;
  }
</script>

<script>
  const customer = $selected;
  const bdate = moment(parseInt($selected.bdate)).format("YYYY-MM-DD");
  initial_value = { ...customer, ...customer.address, bdate, ucpf: id };
</script>

<svelte:head>
  <title>Editar Cliente</title>
</svelte:head>

<Header title="Edição de Cliente" />

<NewUserForm {initial_value} isEdit={true} />
