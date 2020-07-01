<script>
	import { stores } from '@sapper/app';
	const { preloading, page, session } = stores();

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
</script>

<style>
  #mySidenav a {
    position: absolute;
    left: -115px;
    transition: 0.3s;
    padding: 15px;
    width: 180px;
    z-index: 1;
    text-decoration: none;
    font-size: 20px;
    color: white;
    border-radius: 0 5px 5px 0;
  }

  #mySidenav a:hover {
    left: 0;
  }

  #about {
    top: 90px;
    background-color: #4caf50;
  }

  #customers {
    top: 160px;
    background-color: #2196f3;
  }

  #projects {
    top: 230px;
    background-color: #f44336;
  }

  #contact {
    top: 300px;
    background-color: #555;
  }

  .container {
    display: block;
    width: 100%;
  }

  .left-column {
    width: 70%;
    text-align: start;
    float: left;
  }

  .right-column {
    width: 30%;
    text-align: end;
    float: right;
  }

  i {
    font-size: 28px;
  }
</style>

{#if $session.user}
  <div id="mySidenav" class="sidenav">
    {#if $session.user.user_type === "ADMIN"}
      <a href="/employees" id="about">
        <div class="container">
          <div class="left-column">Funcionários</div>
          <div class="right-column">
            <i class="fas fa-user-tie" />
          </div>
        </div>
      </a>
      <a href="/customers" id="customers">
        <div class="container">
          <div class="left-column">Clientes</div>
          <div class="right-column">
            <i class="fas fa-user" />
          </div>
        </div>
      </a>
    {/if}
    <a href="/stock" id="projects">
      <div class="container">
        <div class="left-column">Estoque</div>
        <div class="right-column">
          <i class="fas fa-book" />
        </div>
      </div>
    </a>
    {#if $session.user.user_type === "ADMIN"}
      <a href="/sales" id="contact">
        <div class="container">
          <div class="left-column">Vendas</div>
          <div class="right-column">
            <i class="fas fa-piggy-bank" />
          </div>
        </div>
      </a>
    {/if}
  </div>
{/if}
