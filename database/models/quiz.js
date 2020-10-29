const { db, Sequelize } = require("../../config/objetos");

const Quiz = db.define(
    "quiz",
    {
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
    },
    {
        Sequelize,
        tableName: "quiz",
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        schema: "public"
    }
);

module.exports = Quiz;
