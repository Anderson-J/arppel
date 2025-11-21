import { test, expect } from "@playwright/test"

test("landing page carrega seções principais e ancora CTA para diagnóstico", async ({ page }) => {
  await page.goto("/")

  await expect(page.getByRole("heading", { name: /Infraestrutura de Big Tech/i })).toBeVisible()
  await expect(page.locator("#solutions")).toBeVisible()
  await expect(page.locator("#methodology")).toBeVisible()
  await expect(page.locator("#pricing")).toBeVisible()
  await expect(page.locator("#diagnostic")).toBeVisible()

  await page.getByRole("link", { name: /Agendar Diagnóstico/i }).click()
  await expect(page).toHaveURL(/#diagnostic/)
})

test("diagnóstico exibe imagem otimizada e informações de SLA", async ({ page }) => {
  await page.goto("/#diagnostic")

  const optimizedImage = page.locator("#diagnostic img[loading='lazy']")
  await expect(optimizedImage).toBeVisible()
  await expect(optimizedImage).toHaveAttribute("decoding", "async")
  await expect(page.getByText(/Tempo de resposta/i)).toBeVisible()
  await expect(page.getByText(/SLA 24h/i)).toBeVisible()
})
