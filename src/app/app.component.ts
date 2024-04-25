import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarNavigationComponent } from '../components/toolbar-navigation/toolbar-navigation.component';
import { HomeComponent } from '../components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarNavigationComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'cineflix';
}
