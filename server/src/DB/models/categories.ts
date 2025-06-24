import { DataTypes, Model } from 'sequelize';
import { Category } from '../../types/interfaces';
import { ModelsNames } from '../../types/enums';
import sequelize from '../sequelize';

export interface CategoryCreationAttributes extends Omit<Category, 'id' | 'createdAt' | 'updatedAt'> { }

const categoriesModel = sequelize.define<Model<Category, CategoryCreationAttributes>>(ModelsNames.CATEGORIES, {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: true,
});

export default categoriesModel;
