import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nuclear-weapon',
  templateUrl: './nuclear-weapon.component.html'
})
export class NuclearWeaponComponent {
  public nuclearWeapons: NuclearWeapon[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<NuclearWeapon[]>(baseUrl + 'managenuclear').subscribe(result => {
      this.nuclearWeapons = result;
    }, error => console.error(error));
  }
}

interface NuclearWeapon {
  type: string;
  natoName: string;
  maxRange: number;
  status: string;
}
