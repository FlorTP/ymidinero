import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css',
})
export class LoaderComponent implements OnInit {

  constructor(public router: Router){}

  ngOnInit(): void {
    setTimeout(() => {

      this.router.navigateByUrl('/home');
    }, 2000);
  }
}
