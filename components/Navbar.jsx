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
    <div className="bg-blend-darken flex justify-center w-full fixed">
      <NavigationMenu className="bg-amber-500 max-w-5xl justify-between rounded-2xl p-2">
        <div className="flex justify-between gap-9">
          <NavigationMenuList>{filter(links, "logo")}</NavigationMenuList>
          <NavigationMenuList>{filter(links, "content")}</NavigationMenuList>
        </div>
        <NavigationMenuList>{filter(links, "button")}</NavigationMenuList>
      </NavigationMenu>
    </div>
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
