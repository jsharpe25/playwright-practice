import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/todoPage';

test('add and complete todo items', async ({ page }) => {
  const todoPage = new TodoPage(page);

  await todoPage.open();

  await todoPage.addTodo('Learn Playwright');
  await expect(todoPage.getTodoItem('Learn Playwright')).toBeVisible();

  await todoPage.completeTodo();
  await expect(todoPage.checkbox).toBeChecked();

  await todoPage.addTodo('Practice JavaScript');
  await expect(todoPage.getTodoItem('Practice JavaScript')).toBeVisible();
});