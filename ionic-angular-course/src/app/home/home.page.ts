import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  document: any;

  constructor(private router: Router) {}

  onClicked() {
    this.document.location.href = 'https://ionicframework.com/docs/components';
  }

}
