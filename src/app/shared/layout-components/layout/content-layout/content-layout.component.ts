import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SwitcherService } from 'src/app/shared/services/switcher.service';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent {

  layoutSub!: Subscription;
  sidenavtoggled1: any;

  constructor(private SwitcherService : SwitcherService) { }

  
  toggleSwitcherBody() {
    this.SwitcherService.emitChange(false);
  }

  ngOnDestroy() {
    location.reload();
  }
}
