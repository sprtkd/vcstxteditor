import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcsEditorComponent } from './vcs-editor.component';

describe('VcsEditorComponent', () => {
  let component: VcsEditorComponent;
  let fixture: ComponentFixture<VcsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
