import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostContactComponent } from './post-contact.component';

describe('PostContactComponent', () => {
  let component: PostContactComponent;
  let fixture: ComponentFixture<PostContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
