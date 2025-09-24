type TProps = {
  children: React.ReactNode;
  className?: string;
};

export function NavItem({ children, className }: TProps) {
  return <li className={className}>{children}</li>;
}
