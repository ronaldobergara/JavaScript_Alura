const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   console.log(objPersonagem)

   console.log("Remover propriedade status")

   delete objPersonagem.status

   console.log(objPersonagem)

   // Valor do retorno do operador delete é um booleano

   const delProp = delete objPersonagem["nivel"]
   const delPropInexistente = delete objPersonagem["endereco"]

   console.log("O retorno do Delete sempre vai ser True, existindo ou não a Propriedade")
   console.log(`Delete propriedade existente retorno: ${delProp}`)
   console.log(`Delete propriedade Inexistente retorno: ${delPropInexistente}`)