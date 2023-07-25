import { Component } from '@angular/core';

@Component({
  selector: 'app-feladat',
  templateUrl: './feladat.component.html',
  styleUrls: ['./feladat.component.css']
})
export class FeladatComponent {
  vizsgaltSzam!: number;
  PrimE(vizsgaltErtek: number): boolean {
    let osztokSzama = 0;
    for (let i = 1; i <= this.vizsgaltSzam; i++) {
      if (this.vizsgaltSzam % i == 0) {
        osztokSzama++;
      }
    }
    if (osztokSzama == 2) {
      return true;
    }
    else {
      return false;
    }
  }

  EredmenyKiir(): string {
    if (this.PrimE(this.vizsgaltSzam)) {
      return "prím";
    }
    else {
      return "nem prím"
    }
  }
  megoldasok: string[] = [];
  EredmenyMentes(): void {
    if (this.PrimE(this.vizsgaltSzam)) {
      this.megoldasok.push(`A(z)${this.vizsgaltSzam} prím`)
    }
    else {
      this.megoldasok.push(`A(z)${this.vizsgaltSzam} NEM prím`)
    }


  }
}




