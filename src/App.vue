<template>
  <div id="app">
    <div class="headder" id="headder">
        <nav>
            <ul class="menu">
                <li>
                    <a href="#headder">Home</a>
                </li>
                <li>
                    <a href="#About me">About me</a>
                </li>
                <li>
                    <a href="#Projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>

            </ul>
        </nav>
        <img src="./assets/myPic.png" alt="myPic">
        <h1>Arsenii Belyakov</h1>
    </div>
    <div class="secondBackground">
      <div class="blocks"><BlockList v-bind:blocks="blocks"/></div>
    </div>
    <div class="contact" id="contact">
        <h2>You can contact me via:</h2>
        <a class="email" href="mailto:ars9979@icloud.com">E-mail: ars9979@icloud.com</a>
        <a class="phone" href="tel:+31684941756">Tel:+31684941756</a>
    </div>
  </div>
</template>





<script>
  import BlockList from './components/BlockList'
  import json from './components/json/data.json'

  export default {
    name: 'app',
    components: {
      BlockList,
      },
      data() {
        return {
            blocks: json,
        }
      },
      methods: {
          
      }
    
}
</script>





<style>
.blocks{
    background: -webkit-linear-gradient(#fabd9f, #88bdbc,#004092, #112d32);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

body {
    background-color: #88bdbc;
    padding: 0%;
    margin: 0%;
}

.headder {
    height: fit-content;
    background: linear-gradient(#004092, #020202, transparent), url(./assets/background.png) no-repeat center;
    background-size: cover;
    padding: 0%;
}

img {
    padding: 0%;
    margin-left: -400px;
    margin-top: 150px;
}

h1 {
    margin-left: 50%;
    font-size: 6em;
    color: #112d32;
}

nav {
    padding: 0;
}

nav {
    float: right;
    margin-top: 45px;
    padding: 0;
}

.menu {
    padding: 0;
    margin: 0;
    display: block;
}

.menu li {
    float: left;
    display: block;
    margin-right: 41px;
}

.menu a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    color: #88bdbc;
}

.menu a:hover {
    color: #2e9cca;
}

.menu a:active {
    color: #88bdbc;
}

.secondBackground {
    background: linear-gradient(#020202, #fabd9f, transparent);
    width: 100%;
    padding: 0%;
    height: auto;
    margin: 0%;
}

.contact{
    background:#2c3e50;
    height: 200px;
    color: #88bdbc;
    margin: 0;
    
}

h2{
    font-size:50px;
    color: #88bdbc;
}

.email, .phone{
    font-size: 50px;
    color: #88bdbc;
    padding-right: 10%;
    
}
</style>
