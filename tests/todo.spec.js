import { test, expect } from "@playwright/test";
import { TodoPage } from "../pages/todoPage";

let todoPage;

test.describe("Todo Tests", () => {
  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.open();
  });

  test("add a todo", async () => {
    const todo = "Learn Playwright";

    await todoPage.addTodo(todo);

    await expect(todoPage.getTodoItem(todo)).toBeVisible();
  });

  test("complete a todo", async () => {
    const todo = "Learn Playwright";

    await todoPage.addTodo(todo);
    await todoPage.completeTodo(todo);

    await expect(todoPage.getTodoCheckbox(todo)).toBeChecked();
  });

  test("add multiple todos", async () => {
    const firstTodo = "Learn Playwright";
    const secondTodo = "Practice JavaScript";

    await todoPage.addTodo(firstTodo);
    await todoPage.addTodo(secondTodo);

    await expect(todoPage.getTodoItem(firstTodo)).toBeVisible();
    await expect(todoPage.getTodoItem(secondTodo)).toBeVisible();
  });
});
