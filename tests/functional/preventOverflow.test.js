/**
 * @jest-environment puppeteer
 * @flow
 */
import { scroll, screenshot } from '../utils/puppeteer.js';

it('should not overflow when small reference is at edge of boundary', async () => {
  const page = await browser.newPage();
  await page.goto(`${TEST_URL}/modifiers/preventOverflow/edge.html`);

  await scroll(page, '#scroll', 300);

  expect(await screenshot(page)).toMatchImageSnapshot();
});

it('should overflow with the arrow length taken into account', async () => {
  const page = await browser.newPage();
  await page.goto(`${TEST_URL}/modifiers/preventOverflow/arrow.html`);

  await scroll(page, '#scroll', 330);

  expect(await screenshot(page)).toMatchImageSnapshot();
});

it('should not be tethered if `tether: false`', async () => {
  const page = await browser.newPage();
  await page.goto(`${TEST_URL}/modifiers/preventOverflow/no-tether.html`);

  await scroll(page, '#scroll', 1500);

  expect(await screenshot(page)).toMatchImageSnapshot();
});

it('should be prevented from overflowing', async () => {
  const page = await browser.newPage();
  await page.goto(`${TEST_URL}/modifiers/preventOverflow/main.html`);

  await scroll(page, '#scroll', 670);

  expect(await screenshot(page)).toMatchImageSnapshot();
});

it('(min) should be allowed to overflow once the opposite edges are level', async () => {
  const page = await browser.newPage();
  await page.goto(`${TEST_URL}/modifiers/preventOverflow/main.html`);

  await scroll(page, '#scroll', 780);

  expect(await screenshot(page)).toMatchImageSnapshot();
});

it('(max) should be allowed to overflow once the opposite edges are level', async () => {
  const page = await browser.newPage();
  await page.goto(`${TEST_URL}/modifiers/preventOverflow/main.html`);

  await scroll(page, '#scroll', 4);

  expect(await screenshot(page)).toMatchImageSnapshot();
});

it('(min) (start-variation) should be allowed to overflow once the opposite edges are level', async () => {
  const page = await browser.newPage();
  await page.goto(`${TEST_URL}/modifiers/preventOverflow/start-variation.html`);

  await scroll(page, '#scroll', 780);

  expect(await screenshot(page)).toMatchImageSnapshot();
});

it('(max) (start-variation) should be allowed to overflow once the opposite edges are level', async () => {
  const page = await browser.newPage();
  await page.goto(`${TEST_URL}/modifiers/preventOverflow/start-variation.html`);

  await scroll(page, '#scroll', 4);

  expect(await screenshot(page)).toMatchImageSnapshot();
});

it('(min) (end-variation) should be allowed to overflow once the opposite edges are level', async () => {
  const page = await browser.newPage();
  await page.goto(`${TEST_URL}/modifiers/preventOverflow/end-variation.html`);

  await scroll(page, '#scroll', 780);

  expect(await screenshot(page)).toMatchImageSnapshot();
});

it('(max) (end-variation) should be allowed to overflow once the opposite edges are level', async () => {
  const page = await browser.newPage();
  await page.goto(`${TEST_URL}/modifiers/preventOverflow/end-variation.html`);

  await scroll(page, '#scroll', 4);

  expect(await screenshot(page)).toMatchImageSnapshot();
});