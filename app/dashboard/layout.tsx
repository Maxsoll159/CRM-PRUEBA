import Navbar from "@/components/Navbar/Navbar";
import Menu from '@/components/Navbar/Menu';



export default function LayoutDash({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body className="bg-gray-100">
                <Navbar />
                <div className="container mx-auto py-10">
                    <div className="w-full flex">
                        <Menu />
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}
