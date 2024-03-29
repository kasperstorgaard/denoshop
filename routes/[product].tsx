import { HandlerContext, PageProps } from "$fresh/server.ts";
import { Head } from "https://deno.land/x/fresh@1.1.2/runtime.ts";
import { buildRequest } from "../helpers/shopify.ts";

export const handler = async (req: Request, ctx: HandlerContext): Promise<Response> => {
  const query = `
    query {
      productByHandle(handle: "${ctx.params.product}") {
        id
        title
      }
    }
  `;

  const shopifyReq = await buildRequest(query, {
    ip: req.headers.get("x-forwarded-for") ?? "",
  });

  const res = await fetch(shopifyReq);
  if (!res.ok) throw new Error("unable to fetch");

  const body = await res.json();
  return ctx.render({ product: body.data.productByHandle });
};

export default function Product(props: PageProps) {
  const { product } = props.data;

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/product.css" />
      </Head>
      <div>Hello {product.title}</div>
    </>
  );
}
