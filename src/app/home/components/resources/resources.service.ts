import { Injectable } from '@angular/core';
import { ResourceItem } from './resource.type';
import { resources } from './resource.data';

@Injectable()
export class ResourcesService {

  constructor() { }

  getResourceList(): ResourceItem[]{
    return resources;
  }
}
