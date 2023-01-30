import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LetraSopaJokuaPage } from './letra-sopa-jokua.page';

describe('LetraSopaJokuaPage', () => {
  let component: LetraSopaJokuaPage;
  let fixture: ComponentFixture<LetraSopaJokuaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraSopaJokuaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LetraSopaJokuaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
