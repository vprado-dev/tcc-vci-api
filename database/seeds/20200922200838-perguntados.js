"use strict";
const nomes = [
    "Ordem de Produção",
    "Política de Qualidade",
    "Indicadores de Qualidade",
    "Identificação e Rastreabialidade",
    "Controle de Qualidade",
    "Ação Corretiva",
    "Instrução Operacional",
    "Procedimentos da Qualidade",
    "Sobra de Processo",
];
const totens = nomes.map((value, index) => {
    return {
        name_toten : value,
        path_image : `assets/images/jogo_10/image_00${index}`,
        created_at : new Date(),
        updated_at : new Date()
    };
});
module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("perguntados", totens, {});
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("perguntados", null, {});
    },
};
