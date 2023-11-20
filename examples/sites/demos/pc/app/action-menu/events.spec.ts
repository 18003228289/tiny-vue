import { test, expect } from '@playwright/test'

test('菜单项点击事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/action-menu/events')

  const preview = page.locator('#preview')
  const actionMenu = preview.locator('.tiny-action-menu')
  const menuItem = actionMenu.locator('.tiny-action-menu__item')
  const notify = page.locator('.tiny-notify')
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu.tiny-popper')

  await menuItem.filter({ hasText: '开机' }).click()
  await expect(notify.filter({ hasText: '{"label":"开机"}' })).toBeVisible()
  await menuItem.filter({ hasText: '更多' }).hover()
  await page.waitForTimeout(200)
  await dropDownMenu.locator('.tiny-dropdown-item').filter({ hasText: '关机' }).click()
  await expect(notify.filter({ hasText: '{"label":"关机"}' })).toBeVisible()
})

test('更多按钮点击事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/action-menu/events')

  const preview = page.locator('#preview')
  const actionMenu = preview.locator('.tiny-action-menu')
  const menuItem = actionMenu.locator('.tiny-action-menu__item')
  const notify = page.locator('.tiny-notify')

  await menuItem.filter({ hasText: '开机' }).click()
  await expect(notify).not.toBeVisible()
  await menuItem.filter({ hasText: '更多' }).click()
  await expect(notify.filter({ hasText: '触发 moreClick 事件' })).toBeVisible()
})


test('下拉面板显示事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/action-menu/events')

  const preview = page.locator('#preview')
  const actionMenu = preview.locator('.tiny-action-menu')
  const menuItem = actionMenu.locator('.tiny-action-menu__item')
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu.tiny-popper')
  const notify = page.locator('.tiny-notify')

  await menuItem.last().hover()
  await expect(dropDownMenu).toBeVisible()
  await expect(notify.filter({ hasText: '触发 visible-change 事件,下拉状态为 true' })).toBeVisible()
  await menuItem.first().click()
  await expect(dropDownMenu).not.toBeVisible()
  await expect(notify.filter({ hasText: '触发 visible-change 事件,下拉状态为 false' })).toBeVisible()
})