import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex max-w-[1024px] mx-auto justify-between py-4 items-center px-4">
      <div className="flex ">
        <div className="logo">
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              width={100}
              height={70}
              alt="aleia"
            />
          </Link>
        </div>
        <div className="links mx-8">
          <ul className="flex gap-8">
            <li className="text-lg text-gray-700 hover:text-gray-900">
              <Link href={"/about-us"}>About us</Link>
            </li>
            <li className="text-lg text-gray-700 hover:text-gray-900">
              <Link href={"/projects"}>Projects</Link>
            </li>
            <li className="text-lg text-gray-700 hover:text-gray-900">
              <Link href={"/career"}>Career</Link>
            </li>
            <li className="text-lg text-gray-700 hover:text-gray-900">
              <Link href={"/contacts"}>Contacts</Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p>En</p>
      </div>
    </nav>
  );
};

export default Navbar;
