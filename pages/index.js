import Link from "next/link";

export default function Home() {
  return (
   <main>
    <h2 className="text-amber-500 text-[3rem]">home Page</h2>
    <Link href='/ring'>
      Go To 
    </Link>
   </main>
  );
}
