import { Component } from '@angular/core';
import { Map } from 'leaflet';
import { RouterModule } from '@angular/router';

@Component({
  imports: [ RouterModule ],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'standalone-example';
  private map: Map;
  private zoom: number;
  
  receiveMap(map: Map) {
    this.map = map;
  }

  receiveZoom(zoom: number) {
    this.zoom = zoom;
  }
}
