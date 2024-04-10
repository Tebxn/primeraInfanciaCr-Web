import { Injectable } from '@angular/core';
import { CategoryType } from '../types/categoryType.type';
import { categoryTypes } from '../sampleData/categoryType.data';

@Injectable({
  providedIn: 'root'
})
export class ResourceTypeService {

  constructor() { }

  getAllCategoryTypes():CategoryType[]{
    return categoryTypes;
  }
}
