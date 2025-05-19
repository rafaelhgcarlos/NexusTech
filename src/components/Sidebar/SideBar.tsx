import {
    LayoutDashboard,
    Briefcase,
    Archive,
    FileText,
    Contact,
    Menu,
    X,
    LogOut,
} from "lucide-react";
import NavLinks from "../NavLinks/NavLinks.tsx";
import Button from "../Button/Button.tsx";
import {useAuth} from "../../services/firebase.ts";
import {useState} from "react";

function SideBar() {
    const {user, handleLogout} = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        {id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/dashboard"},
        {id: "product", label: "Product", icon: Briefcase, href: "/product"},
        {id: "stock", label: "Stock", icon: Archive, href: "/stock"},
        {id: "sales", label: "Sales", icon: FileText, href: "/sales"},
        {id: "suppliers", label: "Suppliers", icon: Contact, href: "/suppliers"},
    ];

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-opacity-40 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside
                className={`fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-lg px-4 py-6 flex flex-col justify-between rounded-br-2xl rounded-tr-2xl transition-transform duration-300
                ${isOpen ? "translate-x-0" : "-translate-x-full"} md:static md:translate-x-0`}
            >
                <div>
                    <button
                        className="md:hidden transition-transform duration-300"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div
                            className={`transform transition-transform duration-300 ${
                                isOpen ? "rotate-90" : "rotate-0"
                            }`}
                        >
                            {isOpen ? <X className="w-6 h-6 text-blue-500"/> : <Menu className="w-6 h-6"/>}
                        </div>
                    </button>
                    <h1 className="text-2xl text-center font-bold mb-10">
                        Nexus
                        <span className="text-blue-500">Tech</span>
                    </h1>
                    <NavLinks links={menuItems} size={'lg'}/>
                </div>

                {user && (
                    <div className="mt-8 flex flex-col">
                        <Button
                            label={'Logout'}
                            icon={LogOut}
                            style={'primary'}
                            state={'enabled'}
                            onClick={handleLogout}
                        />
                    </div>
                )}
            </aside>

            {!isOpen && (
                <div className="md:hidden fixed top-4 left-4 z-50">
                    <Button
                        icon={Menu}
                        iconPosition={'alone'}
                        onClick={() => setIsOpen(true)}
                    />
                </div>
            )}
        </>
    );
}

export default SideBar;
