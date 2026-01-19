import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "School Events Calendar",
    description: "Modern calendar for school activities",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body>{children}</body>
        </html>
    );
}
