import { test, expect } from "@playwright/test"

test.describe("responsividade", () => {
  test("desktop exibe navegação completa", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto("/")

    await expect(page.getByRole("link", { name: "Soluções" })).toBeVisible()
    await expect(page.getByRole("link", { name: "Planos" })).toBeVisible()
    await expect(page.getByRole("link", { name: "Diagnóstico" })).toBeVisible()
  })

  test("mobile mantém CTA e ancora para diagnóstico", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto("/")

    await expect(page.getByRole("button", { name: /Falar com Engenheiro/i })).toBeVisible()
    await page.getByRole("link", { name: /Agendar Diagnóstico/i }).click()
    await expect(page).toHaveURL(/#diagnostic/)
  })
})
