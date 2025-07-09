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


export default function Navbar({links}) {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href={"/"}>ACADEMIND</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
              <NavigationMenuList>{links.filter((link) => link.Title !== 'ACADEMIND').map((link) => {
                  return (
                      <NavigationMenuItem key={link.id}>
                          <NavigationMenuLink href={link.href}>{ link.Title }</NavigationMenuLink>
                      </NavigationMenuItem>
                  )
              }) }</NavigationMenuList>
      </NavigationMenu>
    </div>
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
