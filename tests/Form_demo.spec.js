/*import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/automation-practice-form');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Sakifur');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Rahman');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('sakif@test.com');
  await page.locator('div').filter({ hasText: /^Male$/ }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('0171234567');

  //date picker
  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('combobox').nth(1).selectOption('1995');
  await page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('4');
  await page.getByRole('option', { name: 'Choose Monday, May 15th,' }).click();

  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').fill('Co');
  await page.getByText('Computer Science', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Sports$/ }).click();
  await page.locator('div').filter({ hasText: /^Reading$/ }).click();

  //file uploader
  const path = require('path');
  const filePath = path.join(__dirname, '../images/scene 5.jpg');
  await page.getByRole('button', { name: 'Select picture' }).setInputFiles(filePath);


  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Bashundhara R/A, Dhaka');
  await page.locator('div').filter({ hasText: /^Select State$/ }).nth(2).click();
  await page.getByText('NCR', { exact: true }).click();

  await page.locator('div').filter({ hasText: /^Select City$/ }).nth(2).click();
  await page.getByText('Delhi', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();


  // Assertion at least 3 Fields
  await expect(page.locator('#example-modal-sizes-title-lg')).toContainText('Thanks for submitting the form');
  await expect(page.locator('tbody')).toContainText('15 May,1995');
  await expect(page.getByRole('cell', { name: 'Computer Science' })).toBeVisible();

});
*/


// tests/formTest.spec.js
import { test, expect } from '@playwright/test';
import { FormPage } from '../pages/FormPage';

test('Fill and submit form successfully', async ({ page }) => {
  const form = new FormPage(page);

  await form.goto();
  await form.fillForm();
  await form.submitForm();
  await form.assertSubmitted();
});
