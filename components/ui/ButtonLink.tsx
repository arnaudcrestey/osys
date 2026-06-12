import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "alert";
  className?: string;
  showArrow?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  showArrow = false
}: ButtonLinkProps) {
  const styles = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    alert: "btn-alert"
  };

  return (
    <Link href={href} className={cn(styles[variant], "gap-2", className)}>
      <span>{children}</span>
      {showArrow ? <ArrowRight aria-hidden="true" size={16} /> : null}
    </Link>
  );
}
