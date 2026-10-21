export class TodoPage {
  constructor(page) {
    this.page = page;

    this.todoInput = page.getByPlaceholder("What needs to be done?");
  }

  async open() {
    await this.page.goto("https://demo.playwright.dev/todomvc/");
  }

  async addTodo(todo) {
    await this.todoInput.fill(todo);
    await this.todoInput.press("Enter");
  }

  getTodoItem(todo) {
    return this.page.getByText(todo);
  }

  getTodoCheckbox(todo) {
    return this.page
      .getByRole("listitem")
      .filter({ hasText: todo })
      .getByRole("checkbox");
  }

  async completeTodo(todo) {
    await this.getTodoCheckbox(todo).check();
  }
}
