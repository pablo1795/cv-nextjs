"use client";
import { Footer, Header, Main, NavbarModal } from "./components";

export default function Home() {
  return (
    <>
      <NavbarModal />

      <section className="w-full md:w-3/4 lg:w-2/3">
        <Header />

        <Main />

        <Footer />
      </section>
    </>
  );
}
