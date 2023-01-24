import { ticketData } from "./data";
import { Ticket } from "./types";

interface GetTicketOptions {
  page: number;
}

export class TicketApi {
  public async getTickets(options: GetTicketOptions): Promise<Ticket[]> {
    return new Promise((res) => {
      res(ticketData);
    });
  }
}

export const ticketApi = new TicketApi();
