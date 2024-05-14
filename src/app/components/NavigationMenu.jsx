"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import "./NavigationMenu.css";

export default function NavigationDemo() {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Item one
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            Item one content
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Item two
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            Item Two content
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
