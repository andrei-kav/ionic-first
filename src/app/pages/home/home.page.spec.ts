import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import {Router} from "@angular/router";

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to pickup calls page on see all', () => {
    spyOn(router, 'navigate');
    component.showAll()
    expect(router.navigate).toHaveBeenCalledWith(['pickup-calls']);
  });

  it('should go to create call page on create new call', () => {
    spyOn(router, 'navigate');
    component.creatNewCall()
    expect(router.navigate).toHaveBeenCalledWith(['pickup-call']);
  });
});
