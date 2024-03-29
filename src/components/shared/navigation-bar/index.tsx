import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

import Logo from "../../../../public/static/images/logo.png";

import English from "../../../../public/static/images/america.png";
import Amharic from "../../../../public/static/images/ethiopia.png";
import { Menu, Transition } from "@headlessui/react";
import { AiFillCaretDown, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

const NavigationBar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const { lang } = router.query;

  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  const handleNav = () => {
    setNav(!nav);
  };

  const locales = ["en", "am"];

  const [lanuages, setLanuages] = useState<{
    [key: string]: string | string;
    en: string;
    am: string;
  }>({
    en: "English",
    am: "አማርኛ",
  });

  const [flag, setFlag] = useState<{
    [key: string]: StaticImageData | StaticImageData;
    en: StaticImageData;
    am: StaticImageData;
  }>({
    en: English,
    am: Amharic,
  });

  return (
    <header>
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-16 pl-4 md:pl-8 lg:pt-0">
          <Image src={Logo} alt="Wegenawi Logo" className="relative lg:top-0" />
        </div>
        {/* Mobile Button */}
        <div
          onClick={handleNav}
          className="block lg:hidden z-10 mr-3 pl-8 pr-5"
        >
          {!nav && <AiOutlineMenu className="cursor-pointer" size={20} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            nav ? "block" : "hidden"
          } z-50 lg:hidden fixed left-0 top-0 h-screen bg-white flex flex-col items-start justify-between px-8 pt-20 w-[300px] overflow-auto`}
        >
          <AiOutlineClose
            className="absolute cursor-pointer top-5 left-5 text-black"
            onClick={handleNav}
            size={20}
          />
          <ul className="flex flex-col gap-8 text-black">
            <Link href="/" className="flex items-end">
              <div
                className={`${
                  router.asPath === "/" && "font-poppins-semibold"
                }`}
              >
                <li>{t("home_link")}</li>
              </div>
            </Link>
            <Link href="/about" className="flex items-end">
              <div
                className={`${
                  router.asPath === "/about" && "font-poppins-semibold"
                }`}
              >
                <li>{t("about_link")}</li>
              </div>
            </Link>
            <Link href="/event" className="flex items-end">
              <div
                className={`${
                  router.asPath === "/event" && "font-poppins-semibold"
                }`}
              >
                <li>{t("event_link")}</li>
              </div>
            </Link>
            <Link href="/blog" className="flex items-end">
              <div
                className={`${
                  router.asPath === "/blog" && "font-poppins-semibold"
                }`}
              >
                <li>{t("news_link")}</li>
              </div>
            </Link>
            <Link href="/membership" className="flex items-end">
              <div
                className={`${
                  router.asPath === "/membership" && "font-poppins-semibold"
                }`}
              >
                <li>{t("membership_link")}</li>
              </div>
            </Link>
            <Link href="/research" className="flex items-end">
              <div
                className={`${
                  router.asPath === "/research" && "font-poppins-semibold"
                }`}
              >
                <li>{t("research_link")}</li>
              </div>
            </Link>
            <Link href="/vacancy" className="flex items-end">
              <div
                className={`${
                  router.asPath === "/vacancy" && "font-poppins-semibold"
                }`}
              >
                <li>{t("vacancy_link")}</li>
              </div>
            </Link>
            <Link href="/contact" className="flex items-end">
              <div
                className={`${
                  router.asPath === "/contact" && "font-poppins-semibold"
                }`}
              >
                <li>{t("contact_link")}</li>
              </div>
            </Link>
          </ul>
          <div className="py-4 flex items-start justify-start text-black mb-10 w-full">
            <div className="relative flex items-center w-32">
              <Menu as="div" className="inline-block">
                <Menu.Button className="inline-flex gap-2 w-full text-sm  font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-black">
                  <Image
                    src={lang == "en" ? flag["en"] : flag["am"]}
                    alt={"language selection"}
                  />
                  {t("language")}

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-5 mt-6 bg-white text-black origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        {locales &&
                          locales.map((l) => {
                            return (
                              <Menu.Item key={l}>
                                {({ active }) => (
                                  <LanguageSwitcher lang={l}>
                                    <div
                                      className={`${
                                        active ? "bg-yellow-500 " : "text-black"
                                      } group flex gap-3 rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                      <Image
                                        src={flag[l]}
                                        alt={"language selection"}
                                      />
                                      {lanuages[l]}
                                    </div>
                                  </LanguageSwitcher>
                                )}
                              </Menu.Item>
                            );
                          })}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu.Button>
              </Menu>
            </div>
          </div>
          <div className="w-full">
            <div className="text-black">
              <div>
                <p className="font-poppins-medium text-xs text-gray-400">
                  EMAIL
                </p>
                <div className="mt-2 font-poppins-medium text-sm">
                  info@cgaethiopia.org
                </div>
              </div>
              <div className="mt-8 mb-20">
                <p className="font-poppins-medium text-xs text-gray-400">
                  PHONE NUMBERS
                </p>
                <div className="mt-2 font-poppins-medium text-sm">
                  Tel. +251 115 159 051
                </div>
                <div className="mt-2 font-poppins-medium text-sm">
                  Fax. +251 115 152 862
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop menu */}
        <div className="hidden xl:flex w-full md:items-center md:w-auto z-50">
          <ul className="flex gap-16 items-center">
            <Link href="/" className="flex items-end">
              <div
                className={`${
                  router.asPath === "/" && "font-poppins-semibold"
                }`}
              >
                <li>{t("home_link")}</li>
              </div>
            </Link>
            <Link href="/about" className="flex items-end">
              <div
                className={`${
                  router.asPath === "/about" && "font-poppins-semibold"
                }`}
              >
                <li>{t("about_link")}</li>
              </div>
            </Link>
            <Link href="/event" className="flex items-end">
              <div
                className={`${
                  router.asPath === "/event" && "font-poppins-semibold"
                }`}
              >
                <li>{t("event_link")}</li>
              </div>
            </Link>
            <Link href="/blog" className="flex items-end">
              <div
                className={`${
                  router.asPath === "/blog" && "font-poppins-semibold"
                }`}
              >
                <li>{t("news_link")}</li>
              </div>
            </Link>
            <Link href="/membership" className="flex items-end">
              <div
                className={`${
                  router.asPath === "/membership" && "font-poppins-semibold"
                }`}
              >
                <li>{t("membership_link")}</li>
              </div>
            </Link>
            <Link href="/research" className="flex items-end">
              <div
                className={`${
                  router.asPath === "/research" && "font-poppins-semibold"
                }`}
              >
                <li>{t("research_link")}</li>
              </div>
            </Link>
            <Link href="/vacancy" className="flex items-end">
              <div
                className={`${
                  router.asPath === "/vacancy" && "font-poppins-semibold"
                }`}
              >
                <li>{t("vacancy_link")}</li>
              </div>
            </Link>
            <Link href="/contact" className="flex items-end">
              <div
                className={`${
                  router.asPath === "/contact" && "font-poppins-semibold"
                }`}
              >
                <li>{t("contact_link")}</li>
              </div>
            </Link>
          </ul>
        </div>

        <div className="items-center hidden lg:flex gap-24 z-50">
          <div className="py-3 lg:py-8 px-8 lg:px-14 ">
            <div className="items-center hidden lg:flex gap-24">
              <div className="relative flex space-x-5 items-center pl-5 w-32">
                <Menu as="div" className="inline-block">
                  <Menu.Button className="inline-flex gap-2 w-full px-3 py-2 text-sm  font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-black">
                    <Image
                      src={lang == "en" ? flag["en"] : flag["am"]}
                      alt={"language selection"}
                    />

                    {t("language")}

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-5 mt-6 bg-white text-black origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                          {locales &&
                            locales.map((l) => {
                              return (
                                <Menu.Item key={l}>
                                  {({ active }) => (
                                    <LanguageSwitcher lang={l}>
                                      <div
                                        className={`${
                                          active
                                            ? "bg-yellow-500 "
                                            : "text-black"
                                        } group flex gap-3 rounded-md items-center w-full px-2 py-2 text-sm`}
                                      >
                                        <Image
                                          src={flag[l]}
                                          alt={"language selection"}
                                        />
                                        {lanuages[l]}
                                      </div>
                                    </LanguageSwitcher>
                                  )}
                                </Menu.Item>
                              );
                            })}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu.Button>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
