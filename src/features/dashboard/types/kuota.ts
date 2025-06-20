export type Quota = {
  id: number;
  provider: string;
  name: string;
  quota: string;
  price: number;
  validity: string;
};

export type FormQuota = {
  phoneNumber: number | null;
  quota: string;
  price: number | null;
};
