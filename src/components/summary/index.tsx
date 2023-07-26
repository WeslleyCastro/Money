import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryBox, SummaryContainer } from "./style";
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary(){
  const summary = useSummary()

  return (
    <SummaryContainer>
        <SummaryBox>
          <header>
            <span>Entradas</span> <ArrowCircleUp size={32} color="#00b37e"/>
          </header>
          <strong>{priceFormatter.format(summary.income)}</strong>
        </SummaryBox>
        <SummaryBox>
          <header>
            <span>Saídas</span> <ArrowCircleDown size={32} color="#f75a68"/>
          </header>
          <strong>{priceFormatter.format(summary.outcome)}</strong>
        </SummaryBox>
        <SummaryBox variant="green">
          <header>
            <span>Entradas</span><CurrencyDollar size={32} color="#fff"/>
          </header>
          <strong>{priceFormatter.format(summary.total)}</strong>
        </SummaryBox>
    </SummaryContainer>
  )
}