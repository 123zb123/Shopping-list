import { DataTypes, Model, Sequelize } from 'sequelize';
import { ModelsNames } from '../../types/enums';
import { Item } from '../../types/interfaces';
import sequelize from '../sequelize';

export interface ItemCreationAttributes extends Omit<Item, 'id' | 'createdAt' | 'updatedAt'> { }

export const itemsModel = sequelize.define<Model<Item, ItemCreationAttributes>>(ModelsNames.ITEMS, {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1
        }
    },
    categoryId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: ModelsNames.CATEGORIES,
            key: 'id'
        }
    },
    orderId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: ModelsNames.ORDERS,
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: true,
});
