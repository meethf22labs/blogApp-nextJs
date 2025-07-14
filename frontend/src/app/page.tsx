import HomePage from "./pages/HomePage/page";
import NavBar from "./components/Navbar";

export default function Home() {
  return (
    <>
    <div className="h-full w-screen">
    <NavBar />
    <div className=" pt-[112px] px-[80px] py-10">
      <HomePage/>
    </div>
    </div>
    </>
  );
}
