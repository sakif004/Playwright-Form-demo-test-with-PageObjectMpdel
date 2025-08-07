// pages/FormPage.js
import { expect } from '@playwright/test';
const path = require('path');

exports.FormPage = class FormPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/automation-practice-form');
  }

  async fillForm() {
    await this.page.getByRole('textbox', { name: 'First Name' }).fill('Sakifur');
    await this.page.getByRole('textbox', { name: 'Last Name' }).fill('Rahman');
    await this.page.getByRole('textbox', { name: 'name@example.com' }).fill('sakif@test.com');
    await this.page.locator('div').filter({ hasText: /^Male$/ }).click();
    await this.page.getByRole('textbox', { name: 'Mobile Number' }).fill('0171234567');

    await this.page.locator('#dateOfBirthInput').click();
    await this.page.getByRole('combobox').nth(1).selectOption('1995');
    await this.page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('4');
    await this.page.getByRole('option', { name: 'Choose Monday, May 15th,' }).click();

    await this.page.locator('#subjectsInput').fill('Co');
    await this.page.getByText('Computer Science', { exact: true }).click();
    await this.page.locator('div').filter({ hasText: /^Sports$/ }).click();
    await this.page.locator('div').filter({ hasText: /^Reading$/ }).click();

    const filePath = path.join(__dirname, '../images/scene 5.jpg');
    await this.page.getByRole('button', { name: 'Select picture' }).setInputFiles(filePath);

    await this.page.getByRole('textbox', { name: 'Current Address' }).fill('Bashundhara R/A, Dhaka');
    await this.page.locator('div').filter({ hasText: /^Select State$/ }).nth(2).click();
    await this.page.getByText('NCR', { exact: true }).click();
    await this.page.locator('div').filter({ hasText: /^Select City$/ }).nth(2).click();
    await this.page.getByText('Delhi', { exact: true }).click();
  }

  async submitForm() {
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }

  async assertSubmitted() {
    await expect(this.page.locator('#example-modal-sizes-title-lg')).toContainText('Thanks for submitting the form');
    await expect(this.page.locator('tbody')).toContainText('15 May,1995');
    await expect(this.page.getByRole('cell', { name: 'Computer Science' })).toBeVisible();
  }
};
