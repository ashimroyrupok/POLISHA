import { ReactNode } from "react";

type TContainer = {
  children: ReactNode;
};

const Container = ({ children }: TContainer) => {
  return <div className="px-4 py-5 bg-[#22262B] bg-opacity-60 fixed top-0 left-0 z-30 w-full ">{children}</div>;
};

export default Container;
