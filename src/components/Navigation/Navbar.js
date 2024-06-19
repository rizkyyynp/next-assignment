import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [navbarSticky, setNavbarSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setNavbarSticky(true);
            } else {
                setNavbarSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="navbar-container">
            <input type="checkbox" id="menu" className="hidden" />
            <header className={`flex items-center justify-between h-15 py-0 px-7.5 fixed w-full shadow-BS1 z-100 transition-all duration-300 ${navbarSticky ? 'bg-primary' : 'bg-transparent'} `}>
                <div className="logo flex gap-3.75">
                    <Link href="/">
                        <h1 className={`text-3xl font-bold ${navbarSticky ? 'text-white' : 'text-primary'} max-md:text-2xl cursor-pointer`}>Rizky Nugraha</h1>
                    </Link>
                </div>
                <label htmlFor="menu" className="max-md:w-11.25 max-md:h-5 max-md:relative max-md:ml-10">
                    <div className={`max-md:w-full max-md:h-1 ${navbarSticky ? 'max-md:bg-white' : 'max-md:bg-primary'} max-md:absolute max-md:translate-y-1/2 max-md:rounded-24.75 max-md:transition-all max-md:duration-300 max-md:scale-100 max-md:top-0`}></div>
                    <div className={`max-md:w-full max-md:h-1 ${navbarSticky ? 'max-md:bg-white' : 'max-md:bg-primary'} max-md:absolute max-md:translate-y-1/2 max-md:rounded-24.75 max-md:transition-all max-md:duration-300 max-md:scale-100 max-md:top-1/2`}></div>
                    <div className={`max-md:w-full max-md:h-1 ${navbarSticky ? 'max-md:bg-white' : 'max-md:bg-primary'} max-md:absolute max-md:translate-y-1/2 max-md:rounded-24.75 max-md:transition-all max-md:duration-300 max-md:scale-100 max-md:top-full`}></div>
                </label>
                <nav className="flex gap-12.5 max-md:absolute max-md:top-17.5 max-md:left-0 max-md:bg-base-100 max-md:flex-col max-md:w-full max-md:items-center max-md:h-0 max-md:transition-all max-md:duration-500 max-md:overflow-hidden max-md:gap-7.5">
                    <Link href="/">
                        <h1
                            className={`relative inline-block ${navbarSticky ? 'text-white max-md:after:bg-primary after:bg-white max-md:text-primary' : 'text-primary after:bg-primary'} text-5.5 font-bold transition-all duration-300  max-md:mt-12.5 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-5px] after:left-1/2  after:transition-all after:duration-300 hover:after:w-full hover:after:left-0`}
                        >
                            Home
                        </h1>
                    </Link>
                    <Link href="/create-food">
                        <h1
                            className={`relative inline-block ${navbarSticky ? 'text-white max-md:after:bg-primary after:bg-white max-md:text-primary' : 'text-primary after:bg-primary'} text-5.5 font-bold transition-all duration-300  max-md:mt-12.5 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-5px] after:left-1/2  after:transition-all after:duration-300 hover:after:w-full hover:after:left-0`}
                        >
                            Add Menu
                        </h1>
                    </Link>
                </nav>
            </header>
        </div>
    );
}