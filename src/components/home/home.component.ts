import { Component } from '@angular/core';
import { ToolbarNavigationComponent } from '../toolbar-navigation/toolbar-navigation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ToolbarNavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

}
