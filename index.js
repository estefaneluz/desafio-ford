function createRoutes() {
  routes = [
    {
      de: "norte",
      para: "nordeste"
    },
    {
      de: "sudeste",
      para: "sul"
    },
    {
      de: "sudeste",
      para: "centro-oeste"
    },
  ]

  const precisamEntradas = ["sudeste", "norte"];
  const precisamSaidas = ["nordeste", "centro-oeste", "sul"]
  const regioes = ["norte", "nordeste", "centro-oeste", "sul"]

  let counter = 0;
  let i = 0;
  let j = 0;
  while(counter < 3) {
    routes.push({
      de: precisamSaidas[j],
      para: precisamEntradas[i] ? precisamEntradas[i] : regioes[0] 
    })

    if(!precisamEntradas[i]) regioes.splice(0, 1);
    i++
    j++;
    counter++;
  }

  console.log(routes);
  console.log(counter);
}

createRoutes();

//pra eu sair de x regiao para y, por quantas rotas eu passo? 
//