import { DataTypes, Model } from 'sequelize';
import { ModelsNames } from '../../types/enums';
import { Order } from '../../types/interfaces';
import sequelize from '../sequelize';

export interface OrderCreationAttributes extends Omit<Order, 'id' | 'createdAt' | 'updatedAt'> { }

const ordersModel = sequelize.define<Model<Order, OrderCreationAttributes>>(ModelsNames.ORDERS, {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  totalItems: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1
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

export default ordersModel;
