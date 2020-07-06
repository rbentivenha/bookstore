<script>
  import Form from "./index.svelte";
  import moment from "moment";
  import FloatingButtons from "../Buttons/FloatingButtons.svelte";
  import { create_address, update_address } from "../../store/address";
  import { create_user, update_user } from "../../store/user";

  export let isEdit = false;

  export let initial_value = {
    fname: "",
    lname: "",
    ucpf: "",
    email: "",
    bdate: "",
    phone: "",
    user_type: "",
    street_name: "",
    street_num: "",
    city: "",
    postal_code: ""
  };

  let schema = {
    column1: [
      { key: "fname", label: "Nome", type: "String" },
      { key: "lname", label: "Sobrenome", type: "String" },
      { key: "ucpf", label: "CPF", type: "String" },
      { key: "email", label: "Email", type: "String" },
      { key: "bdate", label: "Aniversário", type: "Date" },
      { key: "phone", label: "Telefone", type: "String" }
    ],
    column2: [
      { key: "user_type", label: "Tipo de Usuário", type: "String" },
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

  function handleCancel() {}

  async function handleUpdate() {
    try {
      const postal_code = await update_address(data);
      const user = await update_user({ ...data, postal_code });
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSave() {
    try {
      const postal_code = await create_address(data);
      const user = await create_user({ ...data, postal_code });
    } catch (err) {
      console.error(err);
    }
  }
</script>

<div class="container flex justify-center">
  <Form metadata={schema.column1} {data} on:change={handleChange} />
  <Form metadata={schema.column2} {data} on:change={handleChange} />
  <FloatingButtons
    on:cancel={handleCancel}
    on:save={handleSave}
    on:update={handleUpdate}
    {isEdit} />
</div>
