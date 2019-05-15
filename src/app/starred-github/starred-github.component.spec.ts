import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarredGithubComponent } from './starred-github.component';

describe('StarredGithubComponent', () => {
  let component: StarredGithubComponent;
  let fixture: ComponentFixture<StarredGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarredGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarredGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
