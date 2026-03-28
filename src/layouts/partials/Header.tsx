
import Logo from "@/components/Logo";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import React, { useEffect, useState } from "react";
import { type IconType } from "react-icons";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { motion, AnimatePresence } from "motion/react";
import { fadeInDownVariants } from "@/lib/animations";

//  child navigation link interface
export interface IChildNavigationLink {
  name: string;
  url: string;
  description?: string;
  icon?: string;
}

export interface IMegaMenuNavigation {
  company_title: string;
  legal_title: string;
  company_groups: IChildNavigationLink[][];
  legal_links: IChildNavigationLink[];
}

// navigation link interface
export interface INavigationLink {
  name: string;
  url: string;
  hasChildren?: boolean;
  children?: IChildNavigationLink[];
  mega_menu?: IMegaMenuNavigation;
}

const menuIconMap: Record<string, IconType> = {
  HiOutlineBriefcase,
};

const normalizePath = (path: string) => {
  if (path === "/") return "/";
  return path.endsWith("/") ? path.slice(0, -1) : path;
};

const Header = ({ pathname: initialPathname }: { pathname?: string }) => {
  // distructuring the main menu from menu object
  const { main }: { main: INavigationLink[] } = menu;
  const { navigation_button, settings } = config;
  // get current path
  const pathname = initialPathname || (typeof window !== "undefined" ? window.location.pathname : "/");
  const normalizedPathname = normalizePath(pathname);

  const isPathActive = (url?: string) => {
    if (!url) return false;
    return normalizePath(url) === normalizedPathname;
  };

  const getMenuIcon = (iconName?: string) =>
    menuIconMap[iconName || ""] || HiOutlineBriefcase;

  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  // scroll to top on route change
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeInDownVariants}
      className={`header z-30 ${settings.sticky_header && "sticky top-0"}  `}
    >
      <nav className="navbar container ">
        {/* logo */}
        <div className="order-0">
          <Logo />
        </div>
        {/* navbar toggler */}
        <input id="nav-toggle" type="checkbox" className="hidden" />
        <label
          htmlFor="nav-toggle"
          className="order-3 cursor-pointer flex items-center xl:hidden text-text  xl:order-1"
        >
          <svg
            id="show-button"
            className="h-6 fill-current block"
            viewBox="0 0 20 20"
          >
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
          </svg>
          <svg
            id="hide-button"
            className="h-6 fill-current hidden"
            viewBox="0 0 20 20"
          >
            <title>Menu Close</title>
            <polygon
              points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
              transform="rotate(45 10 10)"
            ></polygon>
          </svg>
        </label>
        {/* /navbar toggler */}

        <ul
          id="nav-menu"
          className="navbar-nav order-3 hidden w-full pb-6 xl:order-1 xl:flex xl:w-auto xl:pb-0 xl:space-x-8"
        >
          {main.map((menu, i) => (
            <React.Fragment key={`menu-${i}`}>
              {menu.hasChildren ? (
                <li
                  className="nav-item nav-dropdown group relative"
                  onMouseEnter={() => setHoveredMenu(menu.name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <input
                    type="checkbox"
                    id={`submenu-${menu.name}`}
                    className="peer hidden xl:hidden"
                  />
                  <label
                    htmlFor={`submenu-${menu.name}`}
                    className={`nav-link inline-flex items-center ${
                      [
                        ...(menu.mega_menu?.company_groups?.flat() || []),
                        ...(menu.mega_menu?.legal_links || []),
                        ...(menu.children || []),
                      ].some(({ url }) => isPathActive(url))
                        ? "active"
                        : ""
                    }`}
                  >
                    {menu.name}
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </label>
                  {menu.mega_menu ? (
                    <>
                      {/* Mobile: CSS checkbox-controlled */}
                      <div className="hidden peer-checked:block xl:hidden">
                        <div className="p-2.5 w-full rounded-3xl mt-3 bg-card border border-border/6 grid gap-3">
                          <div className="nav-dropdown-list nav-mega-menu col-span-2">
                            <div className="nav-mega-grid">
                              <p className="nav-mega-title nav-mega-company-title">
                                {menu.mega_menu.company_title}
                              </p>
                              {menu.mega_menu.company_groups?.map(
                                (group, groupIndex) => (
                                  <div
                                    className="nav-mega-company-col"
                                    key={`company-group-${groupIndex}`}
                                  >
                                    {group.map((item, itemIndex) => {
                                      const Icon = getMenuIcon(item.icon);
                                      return (
                                        <a
                                          href={item.url}
                                          key={`company-item-${groupIndex}-${itemIndex}`}
                                          className={`nav-mega-link ${isPathActive(item.url) ? "active" : ""}`}
                                        >
                                          <span className="nav-mega-icon-wrap">
                                            <Icon className="nav-mega-icon" />
                                          </span>
                                          <span className="nav-mega-content">
                                            <span className="nav-mega-name">{item.name}</span>
                                            <span className="nav-mega-description">{item.description}</span>
                                          </span>
                                        </a>
                                      );
                                    })}
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Desktop: AnimatePresence with fadeInUp */}
                      <div className="hidden xl:block">
                        <AnimatePresence>
                          {hoveredMenu === menu.name && (
                            <motion.div
                              className="absolute left-1/5 w-245 -translate-x-1/2"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                              <div className="p-2.5 w-full rounded-3xl mt-4 bg-card border border-border/6 grid gap-3 grid-cols-3 items-start">
                                <div className="nav-dropdown-list nav-mega-menu col-span-2">
                                  <div className="nav-mega-grid">
                                    <p className="nav-mega-title nav-mega-company-title">
                                      {menu.mega_menu.company_title}
                                    </p>
                                    {menu.mega_menu.company_groups?.map(
                                      (group, groupIndex) => (
                                        <div
                                          className="nav-mega-company-col"
                                          key={`company-group-${groupIndex}`}
                                        >
                                          {group.map((item, itemIndex) => {
                                            const Icon = getMenuIcon(item.icon);
                                            return (
                                              <a
                                                href={item.url}
                                                key={`company-item-${groupIndex}-${itemIndex}`}
                                                className={`nav-mega-link ${isPathActive(item.url) ? "active" : ""}`}
                                              >
                                                <span className="nav-mega-icon-wrap">
                                                  <Icon className="nav-mega-icon" />
                                                </span>
                                                <span className="nav-mega-content">
                                                  <span className="nav-mega-name">{item.name}</span>
                                                  <span className="nav-mega-description">{item.description}</span>
                                                </span>
                                              </a>
                                            );
                                          })}
                                        </div>
                                      ),
                                    )}
                                  </div>
                                </div>
                                <div className="col-span-1 p-4">
                                  <p className="nav-mega-title nav-mega-legal-title">
                                    {menu.mega_menu.legal_title}
                                  </p>
                                  <div className="nav-mega-legal-list">
                                    {menu.mega_menu.legal_links?.map((item, index) => {
                                      const Icon = getMenuIcon(item.icon);
                                      return (
                                        <a
                                          href={item.url}
                                          key={`legal-link-${index}`}
                                          className={`nav-mega-legal-link ${isPathActive(item.url) ? "active" : ""}`}
                                        >
                                          <Icon className="nav-mega-legal-icon" />
                                          <span>{item.name}</span>
                                        </a>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Mobile: CSS checkbox-controlled */}
                      <ul className="nav-dropdown-list hidden peer-checked:block xl:hidden">
                        {menu.children?.map((child, i) => (
                          <li className="nav-dropdown-item" key={`children-${i}`}>
                            <a
                              href={child.url}
                              className={`nav-dropdown-link block ${
                                isPathActive(child.url) && "active"
                              }`}
                            >
                              {child.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                      {/* Desktop: AnimatePresence with fadeInUp */}
                      <div className="hidden xl:block">
                        <AnimatePresence>
                          {hoveredMenu === menu.name && (
                            <motion.ul
                              className="nav-dropdown-list absolute top-full left-0"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                              {menu.children?.map((child, i) => (
                                <li className="nav-dropdown-item" key={`children-${i}`}>
                                  <a
                                    href={child.url}
                                    className={`nav-dropdown-link block ${
                                      isPathActive(child.url) && "active"
                                    }`}
                                  >
                                    {child.name}
                                  </a>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    </>
                  )}
                </li>
              ) : (
                <li className="nav-item">
                  <a
                    href={menu.url}
                    className={`nav-link block ${
                      isPathActive(menu.url) && "active"
                    }`}
                  >
                    {menu.name}
                  </a>
                </li>
              )}
            </React.Fragment>
          ))}
          {navigation_button.enable && (
            <li className="mt-4 inline-block xl:hidden">
              <a
                className="btn btn-primary"
                href={navigation_button.link}
                target={
                  navigation_button.link.startsWith("http") ? "_blank" : "_self"
                }
                rel={
                  navigation_button.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {navigation_button.label}
              </a>
            </li>
          )}
        </ul>
        <div className="order-1 ml-auto flex items-center md:order-2 xl:ml-0">
          {navigation_button.enable && (
            <a
              className="btn btn-primary hidden xl:inline-block"
              href={navigation_button.link}
              target={
                navigation_button.link.startsWith("http") ? "_blank" : "_self"
              }
              rel={
                navigation_button.link.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              {navigation_button.label}
            </a>
          )}
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
