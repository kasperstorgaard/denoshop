import { useNotifications } from "../../app/notifications-context.ts";

export function AppNotifications() {
  const notifications = useNotifications();
  const notificationItems = notifications.drain();

  if (!notificationItems.length) return <></>;

  return (
    <aside class="app-notifications">
      {notificationItems}
    </aside>
  );
}