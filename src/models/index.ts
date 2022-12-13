import { Category } from './Category';
import { Project } from './Project';
import { Video } from './Video';

Category.hasMany(Project);

Project.belongsTo(Category);
Project.hasMany(Video);

Video.belongsTo(Project);

export { Category, Project, Video };
