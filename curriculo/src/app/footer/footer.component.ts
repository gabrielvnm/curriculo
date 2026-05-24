import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private audio!: HTMLAudioElement;
  isPlaying: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.audio = new Audio();
    this.audio.src = '/assets/songs/boss-battle.mp3';
  }

  playSong() {
    if (this.audio) {
      this.audio.play();
      this.isPlaying = true;
    }
  }

  pauseSong() {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  ngOnDestroy() {
    if (this.audio) {
      this.audio.pause();
      this.audio = null as any;
    }
  }
}
