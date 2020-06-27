<script>
  import Form from "./index.svelte";
  import { createEventDispatcher } from "svelte";
  import moment from "moment";

  const dispatch = createEventDispatcher();
  export let initial_value = [{
    fname: "",
    lname: "",
    cpf: "",
    email: "",
    bdate: "",
    phone: "",
    user_type: "",
    street_num: "",
    city: "",
    postal_code: ""
  }];

  let meta = [
    { key: "fname", label: "Nome", type: "String" },
    { key: "lname", label: "Sobrenome", type: "String" },
    { key: "cpf", label: "CPF", type: "String" },
    { key: "email", label: "Email", type: "String" },
    { key: "bdate", label: "Aniversário", type: "Date" },
    { key: "phone", label: "Telefone", type: "String" },
    { key: "user_type", label: "Tipo de Usuário", type: "String" },
    { key: "street_name", label: "Rua", type: "String" },
    { key: "street_num", label: "Numero", type: "String" },
    { key: "city", label: "Cidade", type: "String" },
    { key: "postal_code", label: "CEP", type: "String" }
  ];

  let bdate = moment(parseInt(initial_value.bdate)).format("YYYY-MM-DD");
  let data = {...initial_value, ...initial_value.address[0], bdate };

  function handleSubmit({ detail: { value } }) {
    dispatch("submit", {
      value
    });
  }
</script>

<Form metadata={meta} {data} on:submit={handleSubmit} />
