import * as Dialog from "@radix-ui/react-dialog"
import { Close, Content, Overlay, TransactionType, TransactionTypeButton } from "./style"
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react"
import * as zod from "zod"
import { useForm, Controller} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../contexts/TransactionsContext"
import { useContextSelector } from "use-context-selector"

const newTransactionFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.string()
})

type NewTransactionFormInputs = zod.infer<typeof newTransactionFormSchema>


export function NewTransactionModal(){
  const createTransactions = useContextSelector(
    TransactionsContext, 
    (context) => {
    return context.createTransactions
  },
)

  const { 
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: "income",
    }
  })

  
  const handleCreateNewTransaction = handleSubmit(async (data: NewTransactionFormInputs) => {
    const { description, price, category, type } = data
    
    await createTransactions({
      description,
      price,
      category,
      type,
    })
    reset()
  })

  return (
      <Dialog.Portal>
        <Overlay/>
          
          <Content>
            <Dialog.Title>Nova transação</Dialog.Title>

            <Close>
              <X size={24}/>
            </Close>

              <form onSubmit={handleCreateNewTransaction}>
                <input 
                  type="text"
                  placeholder="Descrição"
                  required
                  {...register("description")}
                />
                <input 
                  type="number"
                  placeholder="Preço"
                  required
                  {...register("price", { valueAsNumber: true})}
                />
                <input 
                  type="text"
                  placeholder="Categoria"
                  required
                  {...register("category")}
                />

                <Controller
                  control={control}
                  name="type"
                  render={({ field }) => {
                    return (
                      <TransactionType 
                        onValueChange={field.onChange} 
                        value={field.value}>
                        <TransactionTypeButton 
                          variant="income" value="income">
                            <ArrowCircleUp size={24}/>
                            Entrada
                        </TransactionTypeButton>
                        <TransactionTypeButton 
                          variant="outcome" value="outcome">
                            <ArrowCircleDown size={24}/>
                            Saída
                        </TransactionTypeButton>
                      </TransactionType>
                    )
                  }}
                />
              <button disabled={isSubmitting}  type="submit">Cadastrar</button>
              </form>
           
          </Content>
      
      </Dialog.Portal>
  )
}