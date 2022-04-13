import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-icon-graph',
  templateUrl: './icon-graph.component.html',
  styleUrls: ['./icon-graph.component.scss'],
})
export class IconGraphComponent implements OnInit {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'graph',
      sanitizer.bypassSecurityTrustResourceUrl('assets/graph.svg')
    );
  }

  ngOnInit(): void {}
}
