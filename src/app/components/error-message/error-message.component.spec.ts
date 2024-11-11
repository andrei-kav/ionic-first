import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErrorMessageComponent } from './error-message.component';
import {FormControl, FormGroup} from "@angular/forms";

fdescribe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  const validators: Array<'required' | 'email'> = ['required', 'email']

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMessageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  validators.forEach(validator => {
    it(`should show error message on field touched and ${validator} error present`, () => {
      component.field = new FormGroup<any>({any: new FormControl()})
      component.validator = validator
      component.field.markAsTouched()
      component.field.setErrors({[validator]: true})
      expect(component.shouldShow()).toBeTruthy()
    });
  });

  validators.forEach(validator => {
    it(`should hide error message on field not touched and ${validator} error present`, () => {
      component.field = new FormGroup<any>({any: new FormControl()})
      component.validator = validator
      component.field.setErrors({[validator]: true})
      expect(component.shouldShow()).toBeFalsy()
    });
  })

  validators.forEach(validator => {
    it(`should hide error message on field touched, but no errors`, () => {
      component.field = new FormGroup<any>({any: new FormControl()})
      component.validator = validator
      component.field.markAsTouched()
      expect(component.shouldShow()).toBeFalsy()
    });
  })

  validators.forEach(validator => {
    it('should hide error message on field touched and has error, but it is a different error', () => {
      component.field = new FormGroup<any>({any: new FormControl()})
      component.validator = validator
      component.field.markAsTouched()
      component.field.setErrors({'any': true})
      expect(component.shouldShow()).toBeFalsy()
    });
  })

});
