import {LoginPageForm} from "./login.page.form";
import {FormBuilder, FormGroup} from "@angular/forms";

describe('login page form', () => {

  let loginForm: LoginPageForm
  let form: FormGroup

  const getEmail = () => {
    return form?.get('email')
  }

  const getPassword = () => {
    return form?.get('password')
  }

  beforeEach(() => {
    loginForm = new LoginPageForm(new FormBuilder())
    form = loginForm.createForm()
  })

  it('should create login form empty', () => {
    expect(form).not.toBeNull()

    expect(getEmail()).not.toBeNull()
    expect(getEmail()?.value).toEqual('')
    expect(getEmail()?.valid).toBeFalsy()

    expect(getPassword()).not.toBeNull()
    expect(getPassword()?.value).toEqual('')
    expect(getPassword()?.valid).toBeFalsy()
  })

  it('should have email form invalid if the invalid value is provided', () => {
    getEmail()?.setValue('invalid value')
    expect(getEmail()?.valid).toBeFalsy()
  })

  it('should have email form valid if the valid value is provided', () => {
    getEmail()?.setValue('mail@asda.asd')
    expect(getEmail()?.valid).toBeTruthy()
  })

  it('should have a valid form', () => {
    getEmail()?.setValue('mail@asda.asd')
    getPassword()?.setValue('asdasd')
    expect(form.valid).toBeTruthy()
  });

})
