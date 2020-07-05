<script context="module">
  let id;
  export async function preload({ params, query }) {
    id = params.slug;
  }
</script>

<script>
  import Header from "../../../components/Header.svelte";
  import moment from "moment";
  import Form from "../../../components/Forms/index.svelte";
  import FloatingButtons from "../../../components/Buttons/FloatingButtons.svelte";
  import { createEventDispatcher } from "svelte";
  import { goto } from "@sapper/app";
  import {
    create_extra_hour,
    selected
  } from "../../../store/employees";

  const dispatch = createEventDispatcher();

  export let isEdit = false;

  let schema = {
    column1: [
      { key: "amount", label: "Quantidade (em horas)", type: "Float" },
      { key: "date", label: "Data", type: "Date" }
    ]
  };
  let data = {};

  function handleChange({ detail: { value } }) {
    data = value;
  }

  function handleCancel() {
    data = initial_value;
  }

  async function handleSave() {
    try {
      const employee = await create_extra_hour({...data, pis: id});
      // await goto("/employees");
    } catch (err) {
      console.error(err);
    }
  }

  async function handleUpdate() {
    try {
    } catch (err) {
      console.error(err);
    }
    console.log(data);
  }
</script>

<Header title="Cadastro de Hora Extra" />

<div class="container flex items-center content-center">
  <div class="self-center w-full">
    <div>
      <Form metadata={schema.column1} {data} on:change={handleChange} />
    </div>
  </div>
  <FloatingButtons
    on:cancel={handleCancel}
    on:save={handleSave}
    on:update={handleUpdate}
    {isEdit} />
</div>
