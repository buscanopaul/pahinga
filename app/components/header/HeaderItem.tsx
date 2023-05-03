import Link from 'next/link';

type HeaderItemProps = {
  title: string;
};

function HeaderItem({ title }: HeaderItemProps) {
  return <Link href="/">{title}</Link>;
}

export default HeaderItem;
