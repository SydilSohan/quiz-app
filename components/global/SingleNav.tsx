import Link from "next/link";
import { SheetClose } from "../ui/sheet";

type Props = {
  item: {
    label: string;
    href: string;
    icon: JSX.Element;
  };
};
const SingleNav = ({ item }: Props) => {
  return (
    <Link
      href={item.href}
      className={`flex items-center gap-2 rounded-lg px-2 py-1  text-sm capitalize transition-all hover:text-primary `}
    >
      {item.icon}
      {item.label}
    </Link>
  );
};

export default SingleNav;
