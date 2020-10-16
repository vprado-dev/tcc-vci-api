'use strict';
const questoes = [
  {
    idgame: "10",
    json_question:  {
      'enunciado':'Seu produto / serviço deve procurar sempre atender as necessidades do:',
      "respostas":{
         "q1":{
            "enunciado":"gestor da produção",
            "certa":"false"
         },
         "q2":{
            "enunciado":"cliente",
            "certa":"true"
         },
         "q3":{
            "enunciado":"líder da produção",
            "certa":"false"
         },
         "q4":{
            "enunciado":"dono da empresa",
            "certa":"false"
         }
      }
   },
   toten_fk: 1, 
   created_at: new Date(),
   updated_at: new Date()
  },
  {
    idgame: "10",
    json_question:   {
      "enunciado":"É considerado um tipo de capacitação:",
      "respostas":{
         "q1":{
            "enunciado":"curso",
            "certa":"true"
         },
         "q2":{
            "enunciado":"produção de um pedido",
            "certa":"false"
         },
         "q3":{
            "enunciado":"prestação de um serviço",
            "certa":"false"
         },
         "q4":{
            "enunciado":"manutenção de equipe",
            "certa":"false"
         }
      }
   },
   toten_fk: 1, 
   created_at: new Date(),
   updated_at: new Date()
  },
  
  
]


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("questions", questoes, {});
},

down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("questions", null, {});
},
};
