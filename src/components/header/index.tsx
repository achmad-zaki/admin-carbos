import DropDownAccount from "./dropdown_account";

export default function Header() {
    return (
        <header className="fixed top-0 bg-white border-b p-3.5 flex items-center justify-end w-full">
            <DropDownAccount />
        </header>
    )
}