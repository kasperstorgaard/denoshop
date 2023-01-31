import { useContext } from "preact/hooks";
import { createContext, ComponentChildren } from "preact";

export type Notifications = {
  children: ComponentChildren[];
  add: (value: ComponentChildren) => void;
  drain: () => ComponentChildren[];
};

const children: ComponentChildren[] = [];

export const NOTIFICATIONS_CONTEXT = createContext<Notifications>({
  children,
  add: (value: ComponentChildren) => children.push(value),
  drain: () => {
    const clone = children.slice();
    children.splice(0, children.length);
    return clone;
  },
});

export const useNotifications = () => useContext(NOTIFICATIONS_CONTEXT);