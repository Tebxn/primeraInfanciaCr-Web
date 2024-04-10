import { Injectable } from '@angular/core';
import { ResourceType } from '../types/categoryType.type';
import { resourceTypes } from '../sampleData/categoryType.data';

@Injectable({
  providedIn: 'root'
})
export class ResourceTypeService {

  constructor() { }

  getAllCategoryTypes():ResourceType[]{
    return resourceTypes;
  }
}
