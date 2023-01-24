import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DanborradaArgazkiakPage } from './danborrada-argazkiak.page';

describe('DanborradaArgazkiakPage', () => {
  let component: DanborradaArgazkiakPage;
  let fixture: ComponentFixture<DanborradaArgazkiakPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DanborradaArgazkiakPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DanborradaArgazkiakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
