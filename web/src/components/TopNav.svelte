<script>
	import { stores } from '@sapper/app';
	const { preloading, page, session } = stores();

  export let segment;
  let colorClass = false;
  $: {
    switch (segment) {
      case "employees":
        colorClass = "topnav bgGreen";
        break;
      case "customers":
        colorClass = "topnav bgBlue";
        break;
      case "stock":
        colorClass = "topnav bgRed";
        break;
      case "sales":
        colorClass = "topnav bgGrey";
        break;
    }
  }
</script>

<style>
  .topnav {
    overflow: hidden;
  }

  .bgGreen {
    background-color: #4caf50;
  }

  .bgBlue {
    background-color: #2196f3;
  }

  .bgRed {
    background-color: #f44336;
  }

  .bgGrey {
    background-color: #555;
  }

  .topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 28px;
  }

  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }
</style>

<div class={colorClass}>
  <a href="/">Home ></a>
  <a href="{$page.path}">{$page.path.replace("/", " ")}</a>
</div>
