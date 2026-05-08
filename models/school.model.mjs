import { DataTypes } from "sequelize";
import sequelize from "../configs/database.mjs";

const School = sequelize.define(
    "School",
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [2, 100],
            },
        },

        address: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [2, 255],
            },
        },

        latitude: {
            type: DataTypes.DECIMAL(10, 7),
            allowNull: false,
            validate: {
                min: -90,
                max: 90,
            },
        },

        longitude: {
            type: DataTypes.DECIMAL(10, 7),
            allowNull: false,
            validate: {
                min: -180,
                max: 180,
            },
        },
    },
    {
        tableName: "schools",

        timestamps: true,

        indexes: [
            {
                name: "idx_school_coordinates",
                fields: ["latitude", "longitude"],
            },
        ],
    }
);

export default School;