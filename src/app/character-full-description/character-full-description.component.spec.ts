import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFullDescriptionComponent } from './character-full-description.component';

describe('CharacterFullDescriptionComponent', () => {
  let component: CharacterFullDescriptionComponent;
  let fixture: ComponentFixture<CharacterFullDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterFullDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterFullDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
