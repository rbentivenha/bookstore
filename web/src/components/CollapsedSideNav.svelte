<script>
  /*  TODO: Definir de onde virão os dados e metadados (store ou props) 
        Definir se as seções serão acordion, etc
    */
  function openNav() {
    document.getElementById("mySidebar").style.left = "75%";
    document.getElementById("main").style.left = "-200px";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.left = "100%";
    document.getElementById("main").style.marginLeft = "0";
  }
</script>

<style>
  .content {
    width: 80%;
  }

  .sidebar {
    height: 100%;
    width: 25%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 100%;
    background-color: rgb(59, 58, 58);
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    box-shadow: -1px 0 4px rgb(29, 28, 77);
  }

  .sidebar div {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  .sidebar div:hover {
    color: #f1f1f1;
  }

  .sidebar .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }

  #main {
    transition: margin-right 0.5s;
  }

  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
    .sidebar {
      padding-top: 15px;
    }
    .sidebar div {
      font-size: 18px;
    }
  }
</style>

<div id="mySidebar" class="sidebar">
  <div class="closebtn" on:click={closeNav}>×</div>
  <div class="content">
    <slot name="content" />
  </div>
</div>

<div id="main">
  <div on:click={openNav}>
    <slot />
  </div>
</div>
