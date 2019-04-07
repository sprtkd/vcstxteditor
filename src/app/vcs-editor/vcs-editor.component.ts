import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vcs-editor',
  templateUrl: './vcs-editor.component.html',
  styleUrls: ['./vcs-editor.component.css']
})
export class VcsEditorComponent implements OnInit {

  htmlContent = '';
  constructor() { }

  ngOnInit() {
  }

}
