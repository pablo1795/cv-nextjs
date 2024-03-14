import { useState } from "react";
import data from "@/libs/lenguaje/data-es.json";
import useDarkMode from "@/libs/hooks/useDarkMode";
import { Button, IconClose, IconDarkMode, IconLightMode, IconMenu, Text } from "@/components";

const DarkModeButton = () => {
  const [darkMode, handleSetDarkMode] = useDarkMode();

  return (
    <Button
      key={1}
      onClick={typeof handleSetDarkMode === "function" ? handleSetDarkMode : undefined}
      styles="flex justify-between items-center gap-2"
      title={darkMode ? data.navBar.lightMode : data.navBar.darkMode}
    >
      {darkMode ? data.navBar.lightMode : data.navBar.darkMode}
      {darkMode ? <IconLightMode /> : <IconDarkMode />}
    </Button>
  )
}

const NavbarModal = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Button
        title={data.navBar.openMenu}
        onClick={() => setOpenMenu(!openMenu)}
        styles="fixed top-0 right-0 m-2 md:m-4"
      >
        <IconMenu />
      </Button>

      {
        openMenu &&
        <div className="bg-stone-900 bg-opacity-50 aboslute top-0 left-0 fixed h-full w-full">
          <nav className="bg-stone-300 dark:bg-stone-700 absolute rounded-s-2xl h-full w-3/4 md:w-1/4 right-0 flex flex-col pl-6 pr-2 py-2 lg:py-4 lg:pr-4">
            <div className="flex justify-between items-center">
              <Text text="opciones de pagina" styles="text-lg uppercase" />

              <Button title={data.navBar.closeMenu} onClick={() => setOpenMenu(!openMenu)}><IconClose /></Button>
            </div>

            <ul className="flex justify-end py-4">
              <li>
                <DarkModeButton />
              </li>
            </ul>
          </nav>
        </div>
      }
    </>
  )
}

export { NavbarModal };