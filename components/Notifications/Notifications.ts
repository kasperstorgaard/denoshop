import { ComponentChildren } from "preact";
import { useContext } from "preact/hooks";
import { NOTIFICATIONS_CONTEXT, Notifications } from "../../app/notifications-context.ts";

export interface NotificationsProps {
  children: ComponentChildren;
}


export function Notifications(props: NotificationsProps) {
  let notifications: Notifications;

  try {
    notifications = useContext(NOTIFICATIONS_CONTEXT);
  } catch (err) {
    throw new Error(
      "<Notifications> component is not supported in the browser, or during suspense renders.",
      { cause: err },
    );
  }
  notifications.add(props.children);
  return null;
}