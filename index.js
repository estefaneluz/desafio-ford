function createRoutes() {
  routes = [
    norte = {
      entrada: [],
      saida: ["nordeste"]
    },
    nordeste = {
      entrada: ["norte"],
      saida: []
    },
    sudeste = {
      entrada: [],
      saida: ["centro-oeste", "sul"]
    },
    centroOeste = {
      entrada: ["sudeste"],
      saida: []
    },
    sul = {
      entrada: ["sudeste"],
      saida: []
    }
  ]

  // const counter = 0;
  // // while(counter < 3) {
  // //   if(routes)
  // // }
}

createRoutes();