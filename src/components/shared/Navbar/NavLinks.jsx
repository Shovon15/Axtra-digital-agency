import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../../config/docs";
import { RiArrowUpSLine } from "react-icons/ri";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {navLinks.map((link) => (
        <div key={link}>
          <div className="w-24  text-left md:cursor-pointer group tracking-wide hover:tracking-widest ">
            <h1
              className="flex justify-center items-center cursor-pointer md:pr-0 pr-5 font-semibold text-md group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
            </h1>
            {link.submenu && (
              <div className="">
                <div className="absolute bg-transparent text-white top-10 hidden group-hover:md:block hover:md:block duration-75">
                  <div className="py-3">
                  </div>
                  <div className="bg-color-secondary p-5 flex gap-0 ">
                    {link.sublinks.map((mysublinks, i) => (
                      <div key={i} className="inset-x-3">
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink, i) => (
                          <div key={i} className="text-sm text-gray-200 my-2.5 tracking-wide duration-300  pr-10 py-1.5">
                            <Link
                              to={slink.link}
                              className="hover:text-primary"
                            >
                              <p className="">{slink.name}</p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden " : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks, i) => (
              <div key={i}>
                <div className="text-white">
                  <div
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center !text-white cursor-pointer "
                  >
                    {slinks.Head}
                    <RiArrowUpSLine className={`${subHeading === slinks.Head ? "" : "rotate-180"
                      } w-5 h-5`} />
                  </div>
                  <div
                    className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                      }`}
                  >
                    {slinks.sublink.map((slink, i) => (
                      <div key={i} className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
