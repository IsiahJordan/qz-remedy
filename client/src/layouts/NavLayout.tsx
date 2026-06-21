import NavBar from '@/components/NavBar'
import { Outlet } from 'react-router'
import { useState, useEffect } from 'react'

interface NavItem {
  label: string;
  route: string;
};

export default function NavLayout() {
  const [navItems, setNavItems] = useState<NavItem[]>([
    { label: 'Login', route: '/sign?type=in' },
    { label: 'Register', route: '/sign?type=up' }
  ]);

  useEffect(() => {
    if (localStorage.getItem('id') !== null) {
      setNavItems([
        { label: 'Catalog', route: '/quiz' },
        { label: 'Create', route: '/create' },
        { label: 'Logout', route: '/sign?type=out' }
      ]);
    }
  }, []);

  return (
    <>
      <NavBar navItems={navItems} />
      <Outlet />
    </>
  );
}
