import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './mobile.component.css'],
})
export class AppComponent implements OnInit {
  right = 50;
  title = 'interactivePricing';
  range = 50;
  style!: string | null;
  width!: number;
  mobileView!: boolean;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = screen.width;
    this.mobileView = this.width < 679 || window.innerWidth < 679;
  }

  ngOnInit(): void {
    this.onResize();
  }
  onRangeChange = () => {
    this.style =
      'linear-gradient(to right, hsl(174, 77%, 80%) ' +
      this.range +
      '%, transparent ' +
      0 +
      '%, hsl(224, 65%, 95%) ' +
      (100 - this.range) +
      '%)';
  };
}
