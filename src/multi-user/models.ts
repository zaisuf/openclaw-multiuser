import { DataTypes } from 'sequelize';

export interface User {
  id: string;
  email: string;
  passwordHash: string;
  token: string;
  sessionId: string;
  createdAt: Date;
  updatedAt: Date;
}

export const userSchema = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false
  },
  token: {
    type: DataTypes.STRING,
    unique: true
  },
  sessionId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  }
};
