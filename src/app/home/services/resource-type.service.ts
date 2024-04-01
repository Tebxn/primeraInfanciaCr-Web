import { Injectable } from '@angular/core';
import { ResourceType } from '../types/resourceType.type';
import { resourceTypes } from '../sampleData/resourceType.data';

@Injectable({
  providedIn: 'root'
})
export class ResourceTypeService {

  constructor() { }

  getAllResourceTypes():ResourceType[]{
    return resourceTypes;
  }
}
