import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  following = false;

  constructor() { }

  ngOnInit(): void {
  }

  onFollow() {
    this.following = !this.following;
  }

}
