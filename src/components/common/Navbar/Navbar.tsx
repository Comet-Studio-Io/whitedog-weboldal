import { memo, MouseEvent, useCallback, useState } from "react";

import { NavbarItem } from "./NavbarItem";

const NavbarComponent = <T extends string>({
  data,
}: {
  data: T[];
}): JSX.Element => {
  const [selectedSection, setSelectedSection] = useState<T>(data[0]);

  const handleNavbarClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setSelectedSection(e.currentTarget.value as T);
  }, []);

  return (
    <div className="flex flex-row w-full h-auto space-x-3 pb-8">
      {data.map(option => {
        return (
          <NavbarItem
            key={option}
            active={selectedSection === option}
            text={option}
            onClick={handleNavbarClick}
          />
        );
      })}
    </div>
  );
};

export const Navbar = memo(NavbarComponent);
