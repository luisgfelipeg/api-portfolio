import { sequelize } from '../database';
import { DataTypes, Model, Optional } from 'sequelize';

export interface Project {
  id: number;
  name: string;
  description: string;
  thumbnailUrl: string;
  categoryId: number;
}

export interface ProjectCreationAttributes
  extends Optional<Project, 'id' | 'thumbnailUrl'> {}

export interface ProjectInstance
  extends Model<Project, ProjectCreationAttributes>,
    Project {}

export const Project = sequelize.define<ProjectInstance, Project>('Project', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  thumbnailUrl: {
    type: DataTypes.STRING,
  },
  categoryId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'categories', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  },
});
