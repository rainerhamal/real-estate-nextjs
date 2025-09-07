'use client';

import NavLinksHero from "../ui/heroPage/nav-links-hero";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";

export default function NavBarHero ()
{
    const pathname = usePathname();
    return (
        <nav className="fixed top-0 left-0 z-20 w-full flex items-center justify-between bg-white/10 backdrop-blur-md text-white navbar-padding">
            {/* LEFT */ }
            <div className="flex lg:flex-1">
                <Link href="#" className="-m-1.5 p-1.5">
                    <Image
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                        alt=""
                        width={ 32 }
                        height={ 32 }
                        className="h-8 w-auto"
                        priority
                    />
                </Link>
            </div>

            {/* Center: Links */ }
            <div className="flex flex-1 items-center justify-center">
                <NavLinksHero />
            </div>

            {/* Right: Login */ }
            <div className="flex-1 flex justify-end">
                <Link
                    href="/login"
                    className={ clsx(
                        "transition-colors duration-200 text-md hover:text-emerald-400",
                        { "text-emerald-500 font-semibold": pathname === "/login" }
                    ) }
                >
                    Login
                </Link>
            </div>
        </nav>
    )
}