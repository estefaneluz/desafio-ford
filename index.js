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
    const route = {
      de: precisamSaidas[j] ? precisamSaidas[j] : regioes[0],
      para: precisamEntradas[i] ? precisamEntradas[i] : regioes[0] 
    }

    if(route.de === route.para) route.de = regioes[1];

    routes.push(route);

    if(!precisamEntradas[i]) regioes.splice(0, 1);
    if(!precisamSaidas[i]) regioes.splice(0, 1);
    i++
    j++;
    counter++;
  }

  console.log(routes);
  console.log(" ");
  console.log("Quantidade de rotas criadas: ", counter);
}

createRoutes();