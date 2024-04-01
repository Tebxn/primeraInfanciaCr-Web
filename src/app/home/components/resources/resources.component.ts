import { Component } from '@angular/core';
import { ResourcesService } from './resources.service';
import { ResourceItem } from './resource.type';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.scss',
  providers: [ResourcesService]
})
export class ResourcesComponent {

  resourceList: ResourceItem[] = [];
  constructor(private resourcesService: ResourcesService){
    this.resourceList = resourcesService.getResourceList();
  }
}
