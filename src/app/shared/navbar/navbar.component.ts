import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  isTransparent: boolean = true;
  transparentRoutes: string[] = ['/', '/home'];
  @ViewChild('navbarCollapse') navbarCollapse: ElementRef | undefined;

  constructor(private router: Router) {}

  ngOnInit() {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        
        this.isTransparent = this.transparentRoutes.includes(event.url);
      }
    });
  }

  closeNavbar() {
    if (this.navbarCollapse) {
      this.navbarCollapse.nativeElement.classList.remove('show');
    }
  }
}
