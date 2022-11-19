import { HandlerContext, PageProps } from "$fresh/server.ts";
import { buildRequest } from "./_shopify.ts";

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

export default function Greet(props: PageProps) {
  const { product } = props.data;

  return <div>Hello {product.title}</div>;
}
