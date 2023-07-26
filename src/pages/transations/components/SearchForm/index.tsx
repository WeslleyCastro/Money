import { MagnifyingGlass } from "phosphor-react";
import { SearhFormContainer } from "./style";
import { useForm } from "react-hook-form";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useContextSelector } from "use-context-selector"
import { TransactionsContext } from "../../../../contexts/TransactionsContext";

export function SearchForm() {
  const fetchTransactions = useContextSelector (TransactionsContext, (context) => {
    return context.fetchTransactions
  })

  const searchFormSchema = zod.object({
    query: zod.string()
  })

  type SearchFormInputs = zod.infer<typeof searchFormSchema>

  const { 
    register, 
    handleSubmit,
    formState: { isSubmitting }
   } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchTransactions(data: SearchFormInputs){
    await fetchTransactions(data.query)
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <SearhFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input 
        type="text" 
        placeholder="Busque por transações"
        {...register("query")}
      />


      <button 
        type="submit" 
        disabled={isSubmitting}>
          <MagnifyingGlass size={20}/> Buscar
      </button>
    </SearhFormContainer>
  )
}