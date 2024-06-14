import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of, throwError } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const userService = jasmine.createSpyObj("UserService", ["login"]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, HttpClientTestingModule, BrowserAnimationsModule],
      providers: [
        {
          provide: UserService,
          useValue: userService
        }
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have invalid status when form is empty", () => {
    expect(component.loginForm.valid).toBeFalse();
  })

  it("should call login in userservice if form is valid", () => {
    component.loginForm.setValue({username: "test", password: "test"});
    userService.login.and.returnValue(of())
    component.login()
    expect(userService.login).toHaveBeenCalled()
  })

  it("should open snackbar on error", () => {
    userService.login.and.returnValue(throwError(() => new Error()))
    const snackbar = fixture.debugElement.injector.get(MatSnackBar);
    const snackbarSpy = spyOn(snackbar, "open");
    component.loginForm.setValue({username: "test", password: "test"});
    component.login()
    expect(snackbarSpy).toHaveBeenCalled()
  })
});
