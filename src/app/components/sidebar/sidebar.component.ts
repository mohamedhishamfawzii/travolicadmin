import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Numbers',  icon: 'dashboard', class: '' },
    { path: '/searches', title: ' Searches',  icon:'search', class: '' },
    { path: '/redirects', title: 'Redirects',  icon:'exit_to_app', class: '' },
  { path: '/newsletter', title: 'Newsletter',  icon:'email', class: '' },
  { path: '/blog', title: 'Post to the Blog',  icon:'theaters', class: '' },
  { path: '/news', title: 'Post to the News',  icon:'notifications', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
