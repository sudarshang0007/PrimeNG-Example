import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-viewer',
  templateUrl: './gallery-viewer.component.html',
  styleUrls: ['./gallery-viewer.component.css']
})
export class GalleryViewerComponent implements OnInit {
  _images = [];
  @Input('header') header: string;
  @Input('images')
  public set images(_images: any) { this._images = _images; }
  public get images() { return this._images; }

  constructor() { }

  ngOnInit() {

  }

}
