import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
   <main>
    <Header />
    <Link href='/ring'>
      Go To 
    </Link>
   </main>
  );
}
