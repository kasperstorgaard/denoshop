import { Head } from "$fresh/runtime.ts";
import { Notifications } from "../components/Notifications/Notifications.ts";
// import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Denoshop</title>
      </Head>
      <Notifications>
        Welcome to our store
      </Notifications>
      <div>
      </div>
    </>
  );
}
