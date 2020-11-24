'use strict';

const questions = [
  {
    json_question: {
        enunciado:
            "Seu produto/serviço deve procurar sempre atender as necessidades do:",
        respostas: {
            q1: { pergunta: "Gestor da produção", certa: false },
            q2: { pergunta: "Cliente", certa: true },
            q3: { pergunta: "Líder da produção", certa: false },
            q4: { pergunta: "Dono da empresa", certa: false }
        },
        key: "01"
    },
    totem_fk: 1
  },
  {
    json_question: {
        enunciado:
            "Seu produto/serviço deve procurar sempre atender as necessidades do:",
        respostas: {
            q1: { pergunta: "Gestor da produção", certa: false },
            q2: { pergunta: "Cliente", certa: true },
            q3: { pergunta: "Líder da produção", certa: false },
            q4: { pergunta: "Dono da empresa", certa: false }
        },
        key: "02"
    },
    totem_fk: 2
  },
  {
    json_question: {
        enunciado:
            "Seu produto/serviço deve procurar sempre atender as necessidades do:",
        respostas: {
            q1: { pergunta: "Gestor da produção", certa: false },
            q2: { pergunta: "Cliente", certa: true },
            q3: { pergunta: "Líder da produção", certa: false },
            q4: { pergunta: "Dono da empresa", certa: false }
        },
        key: "03"
    },
    totem_fk: 3
  },
  {
    json_question: {
        enunciado:
            "Seu produto/serviço deve procurar sempre atender as necessidades do:",
        respostas: {
            q1: { pergunta: "Gestor da produção", certa: false },
            q2: { pergunta: "Cliente", certa: true },
            q3: { pergunta: "Líder da produção", certa: false },
            q4: { pergunta: "Dono da empresa", certa: false }
        },
        key: "04"
    },
    totem_fk: 4
  },
  {
    json_question: {
        enunciado:
            "Seu produto/serviço deve procurar sempre atender as necessidades do:",
        respostas: {
            q1: { pergunta: "Gestor da produção", certa: false },
            q2: { pergunta: "Cliente", certa: true },
            q3: { pergunta: "Líder da produção", certa: false },
            q4: { pergunta: "Dono da empresa", certa: false }
        },
        key: "05"
    },
    totem_fk: 5
  },
  {
    json_question: {
        enunciado:
            "Seu produto/serviço deve procurar sempre atender as necessidades do:",
        respostas: {
            q1: { pergunta: "Gestor da produção", certa: false },
            q2: { pergunta: "Cliente", certa: true },
            q3: { pergunta: "Líder da produção", certa: false },
            q4: { pergunta: "Dono da empresa", certa: false }
        },
        key: "06"
    },
    totem_fk: 6
  },
  {
    json_question: {
        enunciado:
            "Seu produto/serviço deve procurar sempre atender as necessidades do:",
        respostas: {
            q1: { pergunta: "Gestor da produção", certa: false },
            q2: { pergunta: "Cliente", certa: true },
            q3: { pergunta: "Líder da produção", certa: false },
            q4: { pergunta: "Dono da empresa", certa: false }
        },
        key: "07"
    },
    totem_fk: 7
  },
  {
    json_question: {
        enunciado:
            "Seu produto/serviço deve procurar sempre atender as necessidades do:",
        respostas: {
            q1: { pergunta: "Gestor da produção", certa: false },
            q2: { pergunta: "Cliente", certa: true },
            q3: { pergunta: "Líder da produção", certa: false },
            q4: { pergunta: "Dono da empresa", certa: false }
        },
        key: "08"
    },
    totem_fk: 8
  },
  {
    json_question: {
        enunciado:
            "Seu produto/serviço deve procurar sempre atender as necessidades do:",
        respostas: {
            q1: { pergunta: "Gestor da produção", certa: false },
            q2: { pergunta: "Cliente", certa: true },
            q3: { pergunta: "Líder da produção", certa: false },
            q4: { pergunta: "Dono da empresa", certa: false }
        },
        key: "09"
    },
    totem_fk: 9
  },
];

const allQuestions = questions.map((value, index) => {
  let reg = {
      idgame: 2,
      json_question: JSON.stringify(value.json_question),
      totem_fk: value.totem_fk,
      created_at: new Date(),
      updated_at: new Date()
  };
  return reg;
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("questions", allQuestions, {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("questions", null, {});
  }
};