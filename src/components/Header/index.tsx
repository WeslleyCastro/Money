import { Coins } from "phosphor-react";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./Style";
import * as Dialog from "@radix-ui/react-dialog"
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div className="logo">
          <Coins size={30}/> Money
        </div>
        <Dialog.Root> 
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal/>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}