import Link from "next/link";

type BrandProps = {
  href?: string;
  compact?: boolean;
};

export function Brand({ href = "/", compact = false }: BrandProps) {
  const content = (
    <>
      <span className="brand-mark" aria-hidden="true">
        KC
      </span>
      {!compact && <span>Kader Club</span>}
    </>
  );

  return href ? (
    <Link className="brand" href={href}>
      {content}
    </Link>
  ) : (
    <span className="brand">{content}</span>
  );
}
