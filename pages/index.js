import Model from "@/components/Model";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
   <main>
    <section className='w-[100vw] h-[100vh] overflow-hidden  bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#a18cd1]'>
        <Canvas>
            <Model />
        </Canvas>
    </section>
   </main>
  );
}
