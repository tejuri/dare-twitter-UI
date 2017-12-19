import { Component, ViewChild  } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  title = 'Dare-Twitter';

  someMethod() {
    this.trigger.openMenu();
  }
}
