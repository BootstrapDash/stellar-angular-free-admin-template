import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-settings-panel',
  templateUrl: './settings-panel.component.html',
  styleUrls: ['./settings-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsPanelComponent implements OnInit {

  public isDefaultLayout: boolean;
  public isBoxedLayout: boolean;
  public isSidebarIconOnly: boolean;
  public isCompactMenu: boolean;
  public isFixedSidebar: boolean;
  public isHiddenSidebar: boolean;
  public isOverlaySidebar: boolean;

  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    let body = document.querySelector('body');
    switch(true) {
      case body.classList.contains('boxed-layout'):
        this.isBoxedLayout = true;
        break;
      case body.classList.contains('sidebar-icon-only'):
        this.isSidebarIconOnly = true;
        break;
      case body.classList.contains('sidebar-mini'):
        this.isCompactMenu = true;
        break;
      case body.classList.contains('sidebar-fixed'):
        this.isFixedSidebar = true;
        break;
      case body.classList.contains('sidebar-toggle-display'):
        this.isHiddenSidebar = true;
        break;
      case body.classList.contains('sidebar-absolute'):
        this.isOverlaySidebar = true;
        break;
      default:
        this.isDefaultLayout = true;  
    }
  }

  toggleThemeSettings() {
    document.querySelector('#theme-settings').classList.toggle('open');
  }

  closeSettingsSidebar(el) {    
    if (el === 'theme') {
      document.querySelector('#theme-settings').classList.remove('open');
    } else {
      document.querySelector('#right-sidebar').classList.remove('open');
    } 
  }

  changeSidebarTheme(theme) {
    let body = document.querySelector('body');
    body.classList.remove('sidebar-light','sidebar-dark');
    document.querySelectorAll('.sidebar-bg-options').forEach( (el) => {
      el.classList.remove('selected');
    })  
    if (theme === "dark") {
      body.classList.add('sidebar-dark');
      document.querySelector('#sidebar-default-theme').classList.add('selected');
    } else if (theme === "light") {
      body.classList.add('sidebar-light');
      document.querySelector('#sidebar-light-theme').classList.add('selected');
    }
  }

  changeNavbarTheme( theme ) {
    document.querySelector('.navbar').classList.remove("navbar-dark","navbar-light")
    document.querySelectorAll('.color-tiles .tiles').forEach( (el) => {
      el.classList.remove('selected');
    });
    if(theme === 'dark') {
      document.querySelector('.navbar').classList.add('navbar-dark');
      document.querySelector('.tiles.dark').classList.add('selected');
    }
    if(theme === 'default') {
      document.querySelector(".tiles.default").classList.add('selected');
    }
  }

  changeLayout(value) {
    let layoutClasses = ['boxed-layout', 'sidebar-icon-only', 'sidebar-mini', 'sidebar-fixed', 'sidebar-toggle-display', 'sidebar-hidden', 'sidebar-absolute'];
    let body = document.querySelector('body');
    let themeSettings = document.querySelector('#theme-settings');
    switch(value) {
      case 'boxed':
        body.classList.remove(...layoutClasses);
        body.classList.add('boxed-layout');
        themeSettings.classList.remove('open');
        break;
      case 'icon-menu':
        body.classList.remove(...layoutClasses);
        body.classList.add('sidebar-icon-only');
        themeSettings.classList.remove('open');
        break;
      case 'compact-menu':
        body.classList.remove(...layoutClasses);
        body.classList.add('sidebar-mini');
        themeSettings.classList.remove('open');
        break;
      case 'fixed-sidebar':
        body.classList.remove(...layoutClasses);
        body.classList.add('sidebar-fixed');
        themeSettings.classList.remove('open');
        break;
      case 'hidden-sidebar':
        body.classList.remove(...layoutClasses);
        body.classList.add('sidebar-toggle-display', 'sidebar-hidden');
        themeSettings.classList.remove('open');
        break;
      case 'overlay-sidebar':
        body.classList.remove(...layoutClasses);
        body.classList.add('sidebar-absolute', 'sidebar-hidden');
        themeSettings.classList.remove('open');
        break;
      default:
        body.classList.remove(...layoutClasses);
        themeSettings.classList.remove('open');
    }
  }

}
