<template>
  <div class="aside-container">
    <div class="prochain-entretien">
      <h3>Prochain entretien dans :</h3>
      <h1 class="time">1:45:20</h1>
      <p>Cliquez ci-dessous pour plus <br />de détail</p>
      <button class="detail">Détail</button>
    </div>
    <div class="entreprise-container">
      <h3>Changer votre statut</h3>
      <p>
        En devenant entreprise, vous garderez toutes vos capacité de candidat
        tout en ayant la possibilité de poster des offres d'emploies et de jouir
        de toutes les capacités qu'un utilisateur entreprise pourrait avoir.
      </p>
      <button>Devenir Entreprise</button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.aside-container {
  max-width: 30%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 3%;
  position: sticky;
  top: 30px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  & p:last-child {
    color: white;
    width: 60%;
    align-self: center;
  }
}

.prochain-entretien {
  width: 60%;
  box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  background-color: #1e1842;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 2em;
  padding-inline: 0.5em;
  & h3 {
    font-size: 0.9em;
    font-family: Poppins;
    color: rgba(255, 255, 255, 0.877);
  }
  & .time {
    font-family: "Arial Rounded MT";
    color: #806fff;
  }
  & p {
    font-size: 0.8em;
    font-family: Raleway;
    color: white;
    text-align: center;
    padding-top: 1em;
  }
  & .detail {
    width: 80%;
    background: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 10px;
    color: #806fff;
    padding-block: 0.2em;
    margin-top: 1em;
    box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.5);
  }
}

.entreprise-container {
  margin-top: 1em;
  align-self: flex-end;
  width: 90%;
  padding: 1em;
  & h3 {
    color: white;
    font-family: Poppins;
    font-size: 1.2em;
  }
  & p {
    font-family: Poppins;
    font-weight: 400;
    color: white;
    font-size: 0.9em;
  }
  & button {
    border: none;
    background-color: #7accfc;
    padding: 0.5em;
    border-radius: 0.5em;
    color: white;
    text-shadow: 0px 3px 12px black;
    box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.5);
    margin-top: 1em;
  }
}
</style>
