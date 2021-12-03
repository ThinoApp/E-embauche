<template>
  <div class="main">
    <div class="leftComponent">
      <img src="../assets/Thino/pc.png" alt="PC-LOGO"  />
    </div>
    <div class="rightComponent">
      <h1>Simplifier vôs tâches.</h1>
      <h1>L'application qui vous sauve la mise</h1>
      <p>
        Ici vous pouvez consultez les documents
        numériques. Vous pouvez aussi emprunter
        des livres et voir les livres ou documents disponibles
        sur notre platforme
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top left, #2b5876, #4e4376);
  color: white;
}

.leftComponent {
  width: 30vw;
  height: 50vh;
  padding-bottom: 30%;
  margin-right: 20px;
  background: linear-gradient(to top left, #2b5876, #4e4376);
  box-shadow: -10px 13px 20px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
}
.rightComponent {
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
h1 {
  font-size: 2em;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: justify;
}
p {
  font-family: arial;
  width: 40vw;
  font-size: 1em;
  line-height: 1.5em;
  margin-top: 10px;
}
</style>