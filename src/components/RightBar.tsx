import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Transaction from "@/features/dashboard/Transaction";
import { useTransaction } from "@/store/stores";
import { IoCart } from "react-icons/io5";
import ButtonCancelTransaction from "./ButtonCancelTransaction";
import { useCheckTransaction } from "@/features/dashboard/hook/useCheckTransaction";
const RightBar = () => {
  const { transaction } = useTransaction();
  const { isDisabled } = useCheckTransaction();
  return (
    <Sheet>
      <SheetTrigger className="p-2 cursor-pointer bg-white/50 rounded-md">
        <div className="relative">
          <IoCart size={20} className="" />
          <div className="absolute -top-5 -right-2 font-bold text-xl text-red-500">
            {transaction.phoneNumber !== null ? "1" : ""}
          </div>
        </div>
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle className="font-bold text-4xl">Cart</SheetTitle>
          <SheetDescription>
            <hr />
            {isDisabled ? (
              <>
                <div className="grid grid-cols-2 my-2">
                  <div>Phone Number</div>
                  <div>: {transaction.phoneNumber}</div>

                  <div>Quota:</div>
                  <div>: {transaction.quota}</div>

                  <div>Price:</div>
                  <div>: Rp.{transaction.price?.toLocaleString()}</div>
                </div>
                <div className="flex gap-2 my-4">
                  <Transaction text="Continue payment" />
                  <ButtonCancelTransaction />
                </div>
                <hr />
              </>
            ) : (
              <div className="my-4">
                <h1>You have no transaction history</h1>
              </div>
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default RightBar;
