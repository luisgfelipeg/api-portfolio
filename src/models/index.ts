import { Category } from './Category';
import { Project } from './Project';

Category.hasMany(Project);
Project.belongsTo(Category);

export { Category, Project };
