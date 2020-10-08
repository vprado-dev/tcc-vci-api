"use strict";
let name_game = [
    "Quiz",
    "Caça Palavras",
    "Associação",
    "Ordem da Produção",
    "Forca",
    "Memória",
    "Ache o erro",
    "Análise de dados",
    "Corrida de Empilhadeira",
    "Perguntados",
];
const games = name_game.map((value, index) => {
    return {
        name_game: value,
        time_game: 150,
        created_at: new Date(),
        updated_at: new Date(),
    };
});
module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("game", games, {});
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("game", null, {});
    },
};
