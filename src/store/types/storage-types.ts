export interface IStorage {
  selectedName: string;
  selectedIndex: number;
  profiles: IProfile[];
}

export interface IProfile {
  profileId: string;
  profileName: string;
  systemAddress: string;
  userName: string;
  password: string;
  currency: string;
  numberInSystem: string;
  orderSum: string;
  language: string;
  returnAddress: string;
  orderDescription: string;
  clientId: string;
  bondId: string;
}
