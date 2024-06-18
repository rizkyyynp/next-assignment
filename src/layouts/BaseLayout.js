import Navbar from "@/components/Navigation/Navbar";

export default function BaseLayout({ children }) {
    return (
        <div className="bg-abstract">
            <Navbar />
            <div className="p-8 min-h-screen h-screen">
                {children}
            </div>
        </div>
    );
}