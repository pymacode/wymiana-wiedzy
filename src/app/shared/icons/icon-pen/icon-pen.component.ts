import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-icon-pen',
  templateUrl: './icon-pen.component.html',
  styleUrls: ['./icon-pen.component.scss'],
})
export class IconPenComponent implements OnInit {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'pen',
      sanitizer.bypassSecurityTrustResourceUrl('assets/pen.svg')
    );
  }

  ngOnInit(): void {}
}
