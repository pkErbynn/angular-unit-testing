import { TodoFormComponent } from './todo-form.component'; 
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should have 2 from control names', () => {
    var res = component.form.contains('name');
    expect(res).toBeTruthy()
    var res2 = component.form.contains('email');
    expect(res2).toBeTruthy()
  });

  it('should make the name form control required', () => {
    var control = component.form.get('name');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
});