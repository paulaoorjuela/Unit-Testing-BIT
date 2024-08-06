import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crear el componente TodoList', () => {
    expect(component).toBeTruthy();
  });

  it('Debe crear una nueva tarea', () => {
    component.addTodo('Nueva Tarea');
    expect(component.todos.length).toBe(1);
    expect(component.todos[0].title).toBe('Nueva Tarea');
  });

  it('No debe agreagar una tarea vacia', () => {
    component.addTodo('');
    expect(component.todos.length).toBe(0);
  });

  it('Debe eliminar una tarea', () => {
    component.addTodo('Tarea que se va a eliminar');
    component.removeTodo(1);
    expect(component.todos.length).toBe(0);
  });

  it('Debe cambiar el estado de la tarea a terminado', () => {
    component.addTodo('Tarea terminada');
    component.toggleTodoCompletion(1);
    expect(component.todos[0].completed).toBeTrue();
    component.toggleTodoCompletion(1);
    expect(component.todos[0].completed).toBeFalse();
  });
});
