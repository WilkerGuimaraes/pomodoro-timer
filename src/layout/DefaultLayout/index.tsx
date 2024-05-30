import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header/index";

import { LayoutContainet } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainet>
      <Header />
      <Outlet />
    </LayoutContainet>
  );
}
