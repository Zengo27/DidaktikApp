import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IgeldoArgazkiakPage } from './igeldo-argazkiak.page';

describe('IgeldoArgazkiakPage', () => {
  let component: IgeldoArgazkiakPage;
  let fixture: ComponentFixture<IgeldoArgazkiakPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IgeldoArgazkiakPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IgeldoArgazkiakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
