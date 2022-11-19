// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[product].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/_shopify.ts";
import * as $3 from "./routes/api/add-to-cart.ts";
import * as $4 from "./routes/api/joke.ts";
import * as $5 from "./routes/index.tsx";
import * as $$0 from "./islands/Counter.tsx";

const manifest = {
  routes: {
    "./routes/[product].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/_shopify.ts": $2,
    "./routes/api/add-to-cart.ts": $3,
    "./routes/api/joke.ts": $4,
    "./routes/index.tsx": $5,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
