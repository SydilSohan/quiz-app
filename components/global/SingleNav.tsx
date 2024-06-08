'use client';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
  item: {
    label: string;
    href: string;
    icon: JSX.Element;
  };
};
const SingleNav = ({ item }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.href}
      className={`flex items-center gap-2 rounded-lg px-2 py-1  text-sm capitalize transition-all hover:text-primary ${
        item.href === pathname
          ? 'bg-muted text-primary'
          : 'text-muted-foreground '
      }`}
    >
      {item.icon}
      {item.label}
    </Link>
  );
};

export default SingleNav;
