import { createStore } from "vuex";

export default createStore({
  state: {
    entretien: [
      { id: 1, nomPoste: "Développer Odoo", Societe: "E-tech" },
      { id: 2, nomPoste: "Développer Odoo", Societe: "E-tech" },
      { id: 3, nomPoste: "Développer Odoo", Societe: "E-tech" },
    ],
  },
  getters: {
    getAllList(state) {
      return state.entretien;
    },
  },
  mutations: {
    // update(state, payload) {},
  },
  actions: {},
  modules: {},
});
