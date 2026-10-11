import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/todoPage';

test('add and complete todo items', async ({ page }) => {
  const todoPage = new TodoPage(page);

  const firstTodo = 'Learn Playwright';
  const secondTodo = 'Practice JavaScript';

  await todoPage.open();

  await todoPage.addTodo(firstTodo);
  await expect(todoPage.getTodoItem(firstTodo)).toBeVisible();

  await todoPage.addTodo(secondTodo);
  await expect(todoPage.getTodoItem(secondTodo)).toBeVisible();

  await todoPage.completeTodo(firstTodo);
  await expect(todoPage.getTodoCheckbox(firstTodo)).toBeChecked();
});