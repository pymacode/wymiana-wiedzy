import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import 'anychart';
import { Flashcard } from 'src/app/shared/interfaces';
import { WorkspaceApiService } from 'src/app/shared/services/workspace-api.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FlashcardDetailComponent } from '../flashcard-detail/flashcard-detail.component';

export interface nodeDB {
  nodes: {
    id: string;
    link: string;
  }[];
  edges: { from: string; to: string }[];
}

declare var anychart: any;

@Component({
  selector: 'app-network-graph',
  templateUrl: './network-graph.component.html',
  styleUrls: ['./network-graph.component.scss'],
})
export class NetworkGraphComponent implements OnInit {
  @ViewChild('chartContainer') chartContainer!: ElementRef;

  flashcards!: Flashcard[];

  data2: nodeDB = { nodes: [], edges: [] };
  data = {
    nodes: [
      {
        id: 'Introduction To Responsive Design With Angular Material',
        fill: '#64b5f6',
        link: 'https://www.google.com/',
      },
      { id: 'Reece Gray' },
      { id: 'Darren Burch' },
      { id: 'Leslie Bailey' },
      { id: 'Nova Fisher' },

      { id: 'Jack Austin', fill: '#64b5f6' },
      { id: 'Jamie Montoya' },
      { id: 'Sawyer Mack' },
      { id: 'Hugo Love' },

      { id: 'Sophie Lilly', fill: '#64b5f6' },
      { id: 'Ivy Mcintyre' },
      { id: 'Evie West' },

      { id: 'Elsie Mcbride', fill: '#64b5f6' },
      { id: 'Jude Mcbride' },
    ],

    edges: [
      {
        from: 'Introduction To Responsive Design With Angular Material',
        to: 'Reece Gray',
      },
      {
        from: 'Introduction To Responsive Design With Angular Material',
        to: 'Darren Burch',
      },
      {
        from: 'Introduction To Responsive Design With Angular Material',
        to: 'Leslie Bailey',
      },
      {
        from: 'Introduction To Responsive Design With Angular Material',
        to: 'Nova Fisher',
      },
      {
        from: 'Introduction To Responsive Design With Angular Material',
        to: 'Jack Austin',
      },

      { from: 'Jack Austin', to: 'Jamie Montoya' },
      { from: 'Jack Austin', to: 'Sawyer Mack' },
      { from: 'Jack Austin', to: 'Hugo Love' },
      { from: 'Jack Austin', to: 'Sophie Lilly' },
      { from: 'Jack Austin', to: 'Elsie Mcbride' },

      { from: 'Elsie Mcbride', to: 'Jude Mcbride' },

      { from: 'Sophie Lilly', to: 'Ivy Mcintyre' },
      { from: 'Sophie Lilly', to: 'Evie West' },
    ],
  };

  chart!: anychart.charts.Graph;

  constructor(
    private workspaceApi: WorkspaceApiService,
    public dialog: MatDialog
  ) {}

  Parse(flashcards: Flashcard[]) {
    flashcards.forEach((card) => {
      this.data2.nodes.push({ id: card.title, link: card.url });
      // let nodeObj = { id: '' };
      // nodeObj.id = card.title;

      // let edgeObj = { from: '', to: '' };
      card.backlinks.forEach((link) => {
        this.data2.edges.push({ from: card.title, to: link.title });
      });
      // edgeObj.from = card.title;
    });
  }

  ngOnInit(): void {
    this.workspaceApi.workspace$.subscribe((workspace) => {
      // console.log(workspace);

      this.flashcards = workspace.flashcards;
      // console.log(this.flashcards);

      this.Parse(workspace.flashcards);
      console.log(this.data2);

      // create a chart
      this.chart = anychart.graph(this.data2);
      // this.chart.title('Jebany w dupe graf');
      // this.chart.nodes().labels().fontSize(12);
      this.chart.nodes().labels().enabled(true);
      this.chart.nodes().normal().fill('white');
      this.chart.nodes().normal().stroke('1 black');
      this.chart.nodes().shape('circle');
      this.chart.nodes().hovered().fill('white');
      this.chart.nodes().hovered().stroke('2 black');
      this.chart.labels().useHtml(true);

      this.chart
        .labels()
        .format(
          `<a href="{%link}" style="margin-left: auto;" target="_blank">{%id}</a>`
        );
      this.chart.nodes().labels().fontSize(6);

      this.chart.nodes().height(80);
      this.chart.nodes().tooltip().enabled(true);

      this.chart.layout().type('force');
      this.chart.container('chartContainer').draw();
    });
  }
}
