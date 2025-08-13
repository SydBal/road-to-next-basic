import { initialTickets } from "@/data";

// src/app/tickets/[ticketId]/page.tsx
type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;

  const ticket = initialTickets.find(t => t.id === ticketId);

  if (!ticket) {
    return <h2 className="text-lg">Ticket Not Found!</h2>;
  }

  return <h2 className="text-lg">TicketPage: {ticket.id}</h2>;
};

export default TicketPage;