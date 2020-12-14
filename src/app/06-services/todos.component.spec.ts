import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable } from 'rxjs/Observable';
import from 'rxjs/add/observable/from';
import from 'rxjs/add/observable/empty'

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

  // interaction testing....verify other service method got interacted
  it('should call server to save item when new item is added', () => {
    let spy = spyOn(todoService, 'add').and.callFake(() => {
      return Observable.empty();
    })

    todoComponent.add();

    expect(spy).toHaveBeenCalled(); // just called
  });

   // interaction testing....verify other service method got interacted 
   // plus state change(go inner first line)
   // less noisy code with returnVlue()
  it('should return the new item added the server', () => {
    let todo = {id: 1}
    spyOn(todoService, 'add').and.returnValue(Observable.from([todo]))

    todoComponent.add();

    expect(todoComponent.todos.indexOf(todo)).toBeGreaterThan(-1); // means, it exists
  });

  // when error occurs...the second inner line
  it('should set message property if an error occurs from the server when posting new item', () => {
    let errorMessage = 'error occured from the server'
    spyOn(todoService, 'add').and.returnValue(Observable.throw(errorMessage))

    todoComponent.add();

    expect(todoComponent.message).toBe(errorMessage);
  });
});