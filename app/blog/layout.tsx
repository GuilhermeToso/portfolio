import React from "react";

export default function BlogLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-screen h-screen overflow-hidden">
            {children}
        </div>
    )
}