import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProfilePicture } from 'src/app/models/profile/ProfilePicture';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isActive: boolean;
  collapsed: boolean;
  showMenu: string;
  pushRightClass: string;
  user: any;
  profileImg = 'assets/images/accounts.png';
  roles: any;
  cuentaInterna: Boolean = false;
  isAdmin: Boolean = false;
  isAdminRuc: Boolean = false;
  isCoAdminRuc: Boolean = false;
  isConsultorCatastro: Boolean = false;
  isAdminEst: Boolean = false;
  isInsp: Boolean = false;
  isAdminF: Boolean = false;
  isTecnF: Boolean = false;
  isAdminRegC: Boolean = false;
  isGestorPag: Boolean = false;
  isExternal: Boolean = false;
  isCoordinadorZonal: Boolean = false;

  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(private router: Router) {
    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {
    this.isActive = false;
    this.collapsed = false;
    this.showMenu = '';
    this.pushRightClass = 'push-right';
    this.checkRols();
  }

  eventCalled() {
    this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  refreshUser(): Boolean {
    if ( JSON.parse(sessionStorage.getItem('user')) !== null ) {
      this.user = JSON.parse(sessionStorage.getItem('user'));
    }
    if ( JSON.parse(sessionStorage.getItem('profilePicture')) !== null ) {
      const profilePicture = JSON.parse(sessionStorage.getItem('profilePicture')) as ProfilePicture;
      this.profileImg = 'data:' + profilePicture.file_type + ';base64,' + profilePicture.file;
    }
    return true;
  }

  checkShowRegistroActividadesTuristicas(): Boolean {
    return (this.isExternal || this.isAdminRuc || this.isCoAdminRuc || this.isAdminEst || this.isAdminRegC) && !this.cuentaInterna;
  }

  checkCatastro(): Boolean {
    let toReturn: Boolean = false;
    if ( JSON.parse(sessionStorage.getItem('canMoreThanRegister')) !== null ) {
      toReturn = JSON.parse(sessionStorage.getItem('canMoreThanRegister'));
    }
    return toReturn;
  }

  checkRols() {
    this.isAdmin = false;
    this.isAdminRuc = false;
    this.isCoAdminRuc = false;
    this.isAdminEst = false;
    this.isInsp = false;
    this.isAdminF = false;
    this.isTecnF = false;
    this.isConsultorCatastro = false;
    this.isAdminRegC = false;
    this.isGestorPag = false;
    this.isExternal = false;
    this.isCoordinadorZonal = false;
    this.roles = JSON.parse(sessionStorage.getItem('roles'));
    let cuentaIn: Boolean = false;
    if ( JSON.parse(sessionStorage.getItem('cuentaInterna')) !== null ) {
      cuentaIn = JSON.parse(sessionStorage.getItem('cuentaInterna')) as Boolean;
    }
    if (cuentaIn == true) {
      this.cuentaInterna = true;
    } else {
      this.cuentaInterna = false;
    }
    this.roles.forEach(element => {
      if(element.name === 'Administrador') {
        this.isAdmin = true;
      }if(element.name === 'Administrador RUC') {
        this.isAdminRuc = true;
      }
      if(element.name === 'Co-Administrador RUC') {
        this.isCoAdminRuc = true;
      }
      if(element.name === 'Administrador Establecimiento') {
        this.isAdminEst = true;
      }
      if(element.name === 'Inspector') {
        this.isInsp = true;
      }
      if(element.name === 'Técnico Financiero') {
        this.isTecnF = true;
      }
      if(element.name === 'Administrador Financiero') {
        this.isAdminF = true;
      }
      if(element.name === 'Administrador Registro y Control') {
        this.isAdminRegC = true;
      }
      if(element.name === 'Gestor de Pago') {
        this.isGestorPag = true;
      }
      if(element.name === 'Coordinador Zonal') {
        this.isCoordinadorZonal = true;
      }
      if(element.name === 'Consultor-Catastro') {
        this.isConsultorCatastro = true;
      }
      if (!this.isAdmin &&
          !this.isAdminRuc &&
          !this.isCoAdminRuc &&
          !this.isAdminEst &&
          !this.isInsp &&
          !this.isTecnF &&
          !this.isAdminF &&
          !this.isAdminRegC &&
          !this.isGestorPag &&
          !this.isCoordinadorZonal
        ) {
          this.isExternal = true;
        }
    });
  }
}
