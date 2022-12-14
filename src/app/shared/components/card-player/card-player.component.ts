import { Component, OnInit, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {

  @Input() track: TrackModel = { _id: 0, name: '', album: '', url: '', cover: '' };
  //@Input() track!: TrackModel; otra forma
  @Input() mode: 'small' | 'big' = 'small'
  constructor() { }

  ngOnInit(): void {
  }

}
