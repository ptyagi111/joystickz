# @ptyagi111/jsz-web

Web React components for the Joystickz design system. Styled with Tailwind CSS v4.

## Usage

```tsx
import { Button, Card, Heading, Toast } from "@ptyagi111/jsz-web";

export function Example() {
  return (
    <Card>
      <Heading level={2}>Ready to play?</Heading>
      <Button variant="primary" size="big">Start game</Button>
    </Card>
  );
}
```

## Peer dependencies

Consumers must provide `react` and `react-dom` (>=18) and have Tailwind CSS v4 configured with `@ptyagi111/jsz-web` included in the content sources.

## Exported components

Button, Heading, Text, Card, CardHeader, CardContent, Badge, Hud, MenuItem, Tab, TabGroup, LobbyCard, ResultCard, FilterChip, Cursor, DateField, CodeField, PhoneField, Toast.
