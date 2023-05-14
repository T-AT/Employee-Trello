import { Component } from '@angular/core';

// Import Font Awesome Icon
import { faBackward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  // Set the icon property
  back = faBackward;

}
