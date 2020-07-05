<script>
  import Form from "./index.svelte";
  import FloatingButtons from "../Buttons/FloatingButtons.svelte";
  import { createEventDispatcher } from "svelte";
  import { goto } from "@sapper/app";
  import { create_address, update_address } from "../../store/address";
  import { create_user, update_user } from "../../store/user";
  import { create_employee, update_employee, selected } from "../../store/employees";

  const dispatch = createEventDispatcher();

  export let isEdit = false;
  export let initial_value = {
    fname: "",
    lname: "",
    pis: "",
    salary: "",
    ucpf: "",
    email: "",
    bdate: "",
    phone: "",
    user_type: "",
    street_num: "",
    street_name: "",
    city: "",
    postal_code: ""
  };

  let schema = {
    column1: [
      { key: "fname", label: "Nome", type: "String" },
      { key: "lname", label: "Sobrenome", type: "String" },
      { key: "pis", label: "PIS", type: "String" },
      { key: "salary", label: "Salário", type: "Number" },
      { key: "ucpf", label: "CPF", type: "String" },
      { key: "email", label: "Email", type: "String" },
      { key: "bdate", label: "Aniversário", type: "Date" }
    ],
    column2: [
      { key: "phone", label: "Telefone", type: "String" },
      {
        key: "user_type",
        label: "Tipo de Usuário",
        type: "Select",
        options: [
          { id: 1, text: "ADMIN" },
          { id: 2, text: "FUNC" },
          { id: 3, text: "CLIENT" }
        ]
      },
      { key: "street_name", label: "Rua", type: "String" },
      { key: "street_num", label: "Numero", type: "String" },
      { key: "city", label: "Cidade", type: "String" },
      { key: "postal_code", label: "CEP", type: "String" }
    ]
  };
  let data = initial_value;

  function handleChange({ detail: { value } }) {
    data = value;
  }

  function handleCancel() {
    data = initial_value;
  }

  async function handleSave() {
    try {
      const postal_code = await create_address(data);
      const user = await create_user({ ...data, postal_code });
      const employee = await create_employee({ ...data, cpf: user });
      await goto("/employees");
    } catch (err) {
      console.error(err);
    }
  }

  async function handleUpdate() {
    try {
      const user = await update_user(data);
      const address = await update_address(data);
      const employee = await update_employee(data);
    } catch (err) {
      console.error(err);
    }
    console.log(data);
  }
</script>

<div class="container flex items-center content-center">
  <div class="self-center w-full grid grid-cols-2 grid-rows-1 gap-4">
    <div class="col-start-1 col-end-2">
      <Form metadata={schema.column1} {data} on:change={handleChange} />
    </div>
    <div class="col-start-2 col-end-3">
      <Form metadata={schema.column2} {data} on:change={handleChange} />
    </div>
  </div>
  <FloatingButtons
    on:cancel={handleCancel}
    on:save={handleSave}
    on:update={handleUpdate}
    {isEdit} />
</div>
