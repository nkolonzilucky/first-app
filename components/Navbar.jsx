import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Navbar({ links }) {
  return (
    <NavigationMenu className="bg-amber-500 flex justify-between w-full">
      <NavigationMenuList>{filter(links, "logo")}</NavigationMenuList>
      <NavigationMenuList>{filter(links, "content")}</NavigationMenuList>
      <NavigationMenuList>{filter(links, "button")}</NavigationMenuList>
    </NavigationMenu>
  );
}

function filter(links, type) {
  return links
    .filter((link) => link.type === type)
    .map((link) => navItem(link));
}

function navItem(link) {
  return (
    <NavigationMenuItem key={link.id}>
      <NavigationMenuLink href={link.href}>{link.title}</NavigationMenuLink>
    </NavigationMenuItem>
  );
}

//   <NavigationMenu>
//     <NavigationMenuList>
//       <NavigationMenuItem>
//         <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
//         <NavigationMenuContent>
//           <NavigationMenuLink>Link</NavigationMenuLink>
//         </NavigationMenuContent>
//       </NavigationMenuItem>
//     </NavigationMenuList>
//   </NavigationMenu>
