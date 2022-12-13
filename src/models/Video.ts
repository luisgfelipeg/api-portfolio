import { sequelize } from '../database';
import { DataTypes, Model, Optional } from 'sequelize';

export interface Video {
  id: number;
  name: string;
  videoUrl: string;
  secondsLong: number;
  projectId: number;
}

export interface VideoCreationAttributes
  extends Optional<Video, 'id' | 'videoUrl' | 'secondsLong'> {}

export interface VideoInstance
  extends Model<Video, VideoCreationAttributes>,
    Video {}

export const Video = sequelize.define<VideoInstance, Video>('Video', {
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
  videoUrl: {
    type: DataTypes.STRING,
  },
  secondsLong: {
    type: DataTypes.INTEGER,
  },
  projectId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'projects', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  },
});
