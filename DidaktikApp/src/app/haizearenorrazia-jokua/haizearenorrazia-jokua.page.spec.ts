import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HaizearenorraziaJokuaPage } from './haizearenorrazia-jokua.page';

describe('HaizearenorraziaJokuaPage', () => {
  let component: HaizearenorraziaJokuaPage;
  let fixture: ComponentFixture<HaizearenorraziaJokuaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HaizearenorraziaJokuaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HaizearenorraziaJokuaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
