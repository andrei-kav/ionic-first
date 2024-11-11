import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoadingComponent } from './loading.component';
import {Store, StoreModule} from "@ngrx/store";
import {loadingReducer} from "../../../store/loading/loadingReducer";
import {AppState} from "../../../store/AppState";
import {hide, show} from "../../../store/loading/loading.actions";

fdescribe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let store: Store<AppState>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent ],
      imports: [
        IonicModule.forRoot(),
        StoreModule.forRoot([]),
        StoreModule.forFeature('loading', loadingReducer)
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingComponent);
    store = TestBed.inject(Store)
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide loading component when it is not loading', () => {
    // access top html code of a page
    const compiled = fixture.nativeElement;
    store.dispatch(hide())
    // in tests need to detect changes after changing
    fixture.detectChanges()
    expect(compiled.querySelector('.backdrop')).toBeNull()
  });

  it('should show loading component when it is loading', () => {
    // access top html code of a page
    const compiled = fixture.nativeElement;
    store.dispatch(show())
    fixture.detectChanges()
    expect(compiled.querySelector('.backdrop')).not.toBeNull()
  });
});
