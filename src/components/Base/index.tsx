import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import About from "@/components/About";

const Base: React.FunctionComponent<any> = (): JSX.Element => {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <About />
    </>
  );
};

export default Base;
