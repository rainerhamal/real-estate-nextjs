'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
    { name: "Events", href: "/events" },
    { name: "Learn", href: "/learn" },
    { name: "About", href: "/about" },
    { name: "Sell My Property", href: "/sell-my-property" },
    // { name: "Login", href: "/login" }
];

export default function NavLinksHero ()
{
    const pathname = usePathname();

    return (
        <div className="flex flex-row items-center gap-6">
            {/* Navigation Links */ }
            { links.map( ( link ) => (
                <Link
                    key={ link.name }
                    href={ link.href }
                    className={ clsx(
                        "text-md font-medium rounded-md transition-colors duration-200 hover:text-emerald-400",
                        { "text-emerald-500 font-semibold": pathname === link.href }
                    ) }
                >
                    <p className="hidden md:block">{ link.name }</p>
                </Link>
            ) ) }
        </div>
    );
}