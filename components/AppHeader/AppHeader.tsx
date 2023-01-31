import { Icon } from "../Icon/Icon.tsx";

type Props = {
  title: string;
};

export function AppHeader({ title }: Props) {
  return (
    <header class="app-header">
      <label for="menu" class="app-header__hamburger">
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="4"></rect>
          <rect y="40" width="100" height="4"></rect>
          <rect y="80" width="100" height="4"></rect>
        </svg>
      </label>
      <input
        id="menu"
        type="checkbox"
        class="app-header__trigger"
        aria-hidden
      />
      <label for="menu" class="app-header__scrim" aria-hidden />
      <h1 class="app-header__title">{title}</h1>
      <nav class="app-header__nav app-nav">
        <ul>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">products</a>
          </li>
        </ul>
      </nav>
      <aside class="app-header__actions">
        <Icon name="search" />
      </aside>
    </header>
  );
}
