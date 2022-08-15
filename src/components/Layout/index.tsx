import Navbar from "@/components/Navbar";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
