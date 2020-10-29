"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) =>
        await queryInterface.createTable("quiz", {
            idquestion: {
                autoIncrement: true,
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            json_question: {
                type: Sequelize.JSON,
                allowNull: false
            },
            points: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
            }
        }),
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("quiz");
    }
};
