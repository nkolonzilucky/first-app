// app/dashboard/layout.tsx
import React from "react";
import Navbar from "@/components/Navbar";

const links = [
  {
    id: "0",
    href: "/",
    Title: "ACADEMIND",
  },
  {
    id: "1",
    href: "/clone1/courses",
    Title: "Courses",
  },
  {
    id: "2",
    href: "/clone1/membership",
    Title: "Membership",
  },
  {
    id: "3",
    href: "/",
    Title: "Home",
  },
  {
    id: "4",
    href: "/clone1/tutorials",
    Title: "Tutorials",
  },
  {
    id: "5",
    href: "/clone1/community",
    Title: "Community",
  },
];

export default function DashboardLayout({ children }) {
  return (
      <>
        <header>
          <Navbar links={links} />
        </header>
        <main>{children}</main>
      </>
  
  );
}

// {/* <aside className="w-64 bg-gray-100 p-4">    <plassName="font-bold">Dashboard Sidebar</plassName=> {/* Navigation links can goere */ }  </aside > */}
