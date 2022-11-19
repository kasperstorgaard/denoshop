// import { HandlerContext } from "$fresh/server.ts";

export const handler = async (req: Request): Promise<Response> => {
  if (req.method !== "POST") return new Response("not allowed", { status: 405 });

  const data = await req.formData();
  data.get("")

  return new Response(JSON.stringify({}), {
    status: 200,
    statusText: "ok",
    headers: {
      "content-type": "application/json",
    }
  });
};
