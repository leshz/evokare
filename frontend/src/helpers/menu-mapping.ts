import { MenuSection } from '@/services/general/types';

export const menuMapping = (menu: MenuSection[]) => {
  const menuMapped = menu.map(({ id, link, texto }) => {
    return { id, link, texto };
  });
  return menuMapped;
};
