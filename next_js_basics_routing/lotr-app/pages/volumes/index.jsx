import Link from "next/link";

export default function Volumes() {
  return (
    <>
      <li>
        <Link href="/volumes/the-fellowship-of-the-ring">
          {" "}
          The Fellowship Of The Ring
        </Link>
      </li>
      <li>
        <Link href="/volumes/the-return-of-the-king">
          The Return Of The King
        </Link>
      </li>
      <li>
        <Link href="/volumes/the-two-towers">The Two Towers</Link>
      </li>
    </>
  );
}
