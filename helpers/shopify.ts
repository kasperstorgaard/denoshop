import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";

export async function buildRequest(query: string, options: {
  ip: string,
}) {
  await config({ safe: true, export: true });

  const headers = new Headers([
    ["Content-Type", "application/graphql"],
    ["X-Shopify-Storefront-Access-Token", Deno.env.get("SHOPIFY_STOREFRONT_TOKEN")!],
    ["Shopify-Storefront-Buyer-IP", options.ip]
  ]);

  return new Request(`https://${Deno.env.get("SHOPIFY_SHOP_NAME")}.myshopify.com/api/2022-10/graphql.json`,
    {
      method: "POST",
      headers,
      body: query,
    }
  );
}
