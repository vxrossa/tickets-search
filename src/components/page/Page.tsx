import { PropsWithChildren } from "react";
import "./style.css";

function Page({ children }: PropsWithChildren) {
  return <main className="app-page">{children}</main>;
}

export default Page;
