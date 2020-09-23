"use strict";
const nomes = [
    "Política de Qualidade",
    "Ordem de Produção",
    "Sobra de Processo",
    "Procedimentos da Qualidade",
    "Instrução Operacional",
    "Ação Corretiva",
    "Controle de Qualidade",
    "Identificação e Rastreabialidade",
    "Indicadores de Qualidade",
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
