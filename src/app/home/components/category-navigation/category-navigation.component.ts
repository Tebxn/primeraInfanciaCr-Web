import { Component, EventEmitter, Output } from '@angular/core';
import { ResourceType } from '../../types/resourceType.type';
import { ResourceTypeService } from '../../services/resource-type.service';

@Component({
  selector: 'app-category-navigation',
  standalone: true,
  imports: [],
  templateUrl: './category-navigation.component.html',
  styleUrl: './category-navigation.component.scss'
})
export class CategoryNavigationComponent {
  resourceTypes: ResourceType[] = [];
  
  constructor(private resourceTypeService: ResourceTypeService){
    this.resourceTypes = this.resourceTypeService.getAllResourceTypes();
  }
  
  @Output() optionSelected = new EventEmitter<string>();

selectOption(option: string) {
  this.optionSelected.emit(option);
}
}
