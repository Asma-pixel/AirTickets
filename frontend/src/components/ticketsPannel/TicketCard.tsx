import React from "react";
import { useTranslation } from "react-i18next";

import convertCurrency from "../../helpers/convertCurrency.ts";
import { useAppSelector } from "../../hooks/useAppSelector.tsx";
import { Ticket } from "../../types/index.ts";
import CompanyLogoBuilder from "../ui/companyLogo/CompanyLogoBuilder.tsx";

import JourneyPoint from "./JoyrneyPoint/JourneyPoint.tsx";
import StopsInformation from "./StopsInformation/StopsInformation.tsx";
import styles from "./TicketCard.module.scss";

interface IArgs {
  ticket: Ticket;
}

const TicketCard = ({ ticket }: IArgs) => {
  const { t } = useTranslation();
  const selectedCurrency = useAppSelector(
    (state) => state.currenciesReducer.selectedCurrency,
  );

  return (
    <div className={styles.container}>
      <div className={styles.priceContainer}>
        <CompanyLogoBuilder companyName={ticket.carrier} />
        <button>
          {t(`ticketsPannel.buyText${selectedCurrency.name}`, {
            price: convertCurrency(ticket.price, selectedCurrency),
          })
            .split("\n")
            .map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
        </button>
      </div>
      <div className={styles.informationContainer}>
        <JourneyPoint
          date={ticket.departure_date}
          time={ticket.departure_time}
          countryCode={ticket.origin}
          countryName={ticket.origin_name}
        />
        <StopsInformation stopsCount={ticket.stops} />
        <JourneyPoint
          date={ticket.arrival_date}
          time={ticket.arrival_time}
          countryCode={ticket.destination}
          countryName={ticket.destination_name}
        />
      </div>
    </div>
  );
};

export default TicketCard;
