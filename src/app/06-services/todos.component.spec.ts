import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable } from 'rxjs/Observable';

// Testing ngOnInit()
// Component contains service
// Methods in ngOnInit() are stubbed

describe('TodosComponent', () => {
  let todoComponent: TodosComponent;
  let todoService: TodoService;

  beforeEach(() => {
    todoService = new TodoService(null) 
    todoComponent = new TodosComponent(todoService);
  });

  it('should populate the todo property with items returned from server', () => {
    let todoData = [1, 2, 3];
    spyOn(todoService, 'getTodos').and.callFake(() => {
      return Observable.from(todoData);
    })

    todoComponent.ngOnInit();

    expect(todoComponent.todos.length).toBe(3);
    expect(todoComponent.todos).toBe(todoData);
  });
});