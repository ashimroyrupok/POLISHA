import { ReactNode } from "react";

type TContainer = {
  children: ReactNode;
};

const Container = ({ children }: TContainer) => {
  return <div className="px-4 py-5 bg-[#22262B] bg-opacity-10">{children}</div>;
};

export default Container;
