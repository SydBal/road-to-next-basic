import Link from 'next/link';
import { initialTickets } from "@/data";
import { getTicketPath } from '@/paths';

const TicketsPage = () => {
  return (
    <div>
      <h1 className="text-lg mb-4">Tickets</h1>
      {initialTickets.map(ticket => (
        <div key={ticket.id} className='mb-4'>
          <h2 className="text-lg">{ticket.title}</h2>
          <Link href={getTicketPath(ticket.id)} className="underline">
            View
          </Link>
        </div>
      ))}
    </div>
  );
}

export default TicketsPage;
