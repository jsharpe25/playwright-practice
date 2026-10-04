import { test, expect } from '@playwright/test';

test('add a todo item', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  const todoInput = page.getByPlaceholder('What needs to be done?');

  await todoInput.fill('Learn Playwright');
  await todoInput.press('Enter');
  const firstTodoItem = page.getByText('Learn Playwright');
  await expect(firstTodoItem).toBeVisible();

  const checkbox = page.getByRole('checkbox', { name: 'Toggle Todo' });
  await checkbox.check();
  await expect(checkbox).toBeChecked();

  await todoInput.fill('Practice JavaScript');
  await todoInput.press('Enter');
  const secondTodoItem = page.getByText('Practice JavaScript');
  await expect(secondTodoItem).toBeVisible();

});