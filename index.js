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

  //precisam de entradas:
  // norte, sudeste
  //precisam de saidas:
  //nordeste, centro-oeste, sul

  const precisamEntradas = ["norte", "sudeste"];
  const precisamSaidas = ["nordeste", "centro-oeste", "sul"]

  let counter = 0;
  while(counter < 3) {
    for(let i=0; i<routes.length;i++) {
      if(!routes[i].entrada.length) {
        let j = 0;
        if(precisamSaidas[0] === routes[i].saida[0]) {
          j++;
          routes[i].entrada.push(precisamSaidas[j]);
        } else {
          routes[i].entrada.push(precisamSaidas[j]);
        }
        precisamSaidas.splice(j, 1);
        counter++;
      }
      if(!routes[i].saida.length) {
        let j = 0;
        if(precisamEntradas[0] === routes[i].entrada[0]) {
          j++;
          routes[i].saida.push(precisamEntradas[j]);
        } else {
          routes[i].saida.push(precisamEntradas[j]);
        }
        precisamEntradas.splice(j, 1);
        counter++;
      }
    }
  }

  console.log(routes);
  console.log(counter);
}

createRoutes();

//pra eu sair de x regiao para y, por quantas rotas eu passo? 
//