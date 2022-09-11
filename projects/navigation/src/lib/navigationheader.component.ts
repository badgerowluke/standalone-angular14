import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-header',
  standalone: true,
  template: `
    <p>
      navigation works!
    </p>
  `,
  styles: []
})
export class NavigationHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
