import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Users = {
  id: number;
  email: string;
  name: string;
};

export type Stores = {
  user: Users;
  setUser: (user: Users) => void;
  reset: () => void;
};

const defaultUser: Users = {
  id: 0,
  email: "",
  name: "",
};

export const useStore = create<Stores>()(
  persist(
    (set) => ({
      user: defaultUser,
      setUser: (user) => set({ user }),
      reset: () => set({ user: defaultUser }),
    }),
    {
      name: "user",
    }
  )
);

export type Transaction = {
  phoneNumber: number | null;
  quota: string;
  price: number | null;
};

type TransactionStores = {
  transaction: Transaction;
  setTransaction: (data: Transaction) => void;
  resetTransaction: () => void;
};

const transactionData: Transaction = {
  phoneNumber: null,
  quota: "",
  price: null,
};

export const useTransaction = create<TransactionStores>()(
  persist(
    (set) => ({
      transaction: transactionData,
      setTransaction: (transaction) => set({ transaction }),
      resetTransaction: () => set({ transaction: transactionData }),
    }),
    {
      name: "transaction",
    }
  )
);
