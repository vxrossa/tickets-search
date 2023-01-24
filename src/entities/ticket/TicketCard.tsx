import { TicketCardProps } from "./ticket.types";
import "./style.css";

import s7Logo from "/s7.png";
import redwingsLogo from "/redwings.png";
import pobedaLogo from "/pobeda.png";

function TicketCard({ ticket }: TicketCardProps) {
  const images: Record<string, string> = {
    "S7 Airlines": s7Logo,
    "Pobeda Airlines": pobedaLogo,
    "Red Wings": redwingsLogo,
  };

  const getTicketConnectionString = () => {
    const { connectionAmount } = ticket;

    if (!connectionAmount) return "Без пересадок";
    if (connectionAmount === 1) return "1 Пересадка";
    return `${connectionAmount} пересадки`;
  };

  return (
    <div className="ticket">
      <div className="ticket__header">
        <p className="ticket__price">
          {ticket.price} {ticket.currency === "RUB" ? "Р" : ticket.currency}
        </p>
        <img src={images[ticket.company]} />
      </div>
      <div className="ticket__info">
        <div className="ticket__info-item">
          {ticket.from} - {ticket.to}
          <div className="ticket__info-data">
            {ticket.time.startTime} - {ticket.time.endTime}
          </div>
        </div>
        <div className="ticket__info-item">
          В пути
          <div className="ticket__info-data">10 часов 0 мин</div>
        </div>
        <div className="ticket__info-item">
          Пересадки
          <div className="ticket__info-data">{getTicketConnectionString()}</div>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
