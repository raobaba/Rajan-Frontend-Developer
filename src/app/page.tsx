import Navbar from "@/components/navbar";
import LandingPage from "@/components/landing";
import Tokenomics from "@/components/tokenomics";
import WorkPage from "@/components/works"
export default function Home() {
  return (
    <main>
      <Navbar />
      <LandingPage />
      <WorkPage/>
      <Tokenomics />
    </main>
  );
}