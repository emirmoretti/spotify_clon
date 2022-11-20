import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  mockTracksList = [
    {
      name: 'Bebe oficial',
    },
    {
      name: 'pepe'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
