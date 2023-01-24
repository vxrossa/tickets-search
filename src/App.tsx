import { useState } from "react";
import Header from "./components/header/Header";
import Page from "./components/page/Page";
import FilterByCompanies from "./features/filter-by-companies/FilterByCompanies";
import FilterByConnections from "./features/filter-by-connections/FilterByConnections";
import SortTickets from "./features/sort-tickets/SortTickets";
import ReduxProvider from "./providers/ReduxProvider";
import TicketList from "./widgets/ticket-list/TicketList";

function App() {
  return (
    <ReduxProvider>
      <Page>
        <Header />
        <FilterByCompanies />
        <FilterByConnections />
        <SortTickets />
        <TicketList />
      </Page>
    </ReduxProvider>
  );
}

export default App;
