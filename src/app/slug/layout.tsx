// app/[slug]/layout.tsx

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
