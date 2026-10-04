export class TodoPage {
  constructor(page) {
    this.page = page;

    this.todoInput = page.getByPlaceholder('What needs to be done?');
    this.checkbox = page.getByRole('checkbox', { name: 'Toggle Todo' });
  }

  async open() {
    await this.page.goto('https://demo.playwright.dev/todomvc/');
  }

  async addTodo(todo) {
    await this.todoInput.fill(todo);
    await this.todoInput.press('Enter');
  }

  async checkFirstTodoItem() {
    await this.checkbox.check();
    await expect(this.checkbox).toBeChecked();
  }

  getTodoItem(todo) {
  return this.page.getByText(todo);
  }

  async completeTodo() {
  await this.checkbox.check();
  }
}