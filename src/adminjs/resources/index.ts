import { ResourceWithOptions } from 'adminjs';
import { Category, Project } from '../../models';
import { categoryResourceOptions } from './category';
import { projectResourceOptions } from './Project';

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions,
  },
  {
    resource: Project,
    options: projectResourceOptions,
  },
];
