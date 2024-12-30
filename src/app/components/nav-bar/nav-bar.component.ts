import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { MenuItem } from 'primeng/api';
import { StyleClassModule } from 'primeng/styleclass';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [CommonModule, MenubarModule, BadgeModule, StyleClassModule],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'About us',
        icon: 'pi pi-star',
      },
      {
        label: 'Join us',
        icon: 'pi pi-star',
      },
      {
        label: 'Our offer',
        icon: 'pi pi-envelope',
      },
      {
        label: 'Pricing plans',
        icon: 'pi pi-envelope',
      },
      {
        label: 'FAQ',
        icon: 'pi pi-envelope',
      },
    ];
  }
}
