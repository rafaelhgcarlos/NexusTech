import SideBar from "../components/Sidebar/SideBar.tsx";
import React from "react";

export default function ProtectedLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex h-dvh">
            <SideBar/>
            <main className="flex-1 p-4">{children}</main>
        </div>
    );
}
