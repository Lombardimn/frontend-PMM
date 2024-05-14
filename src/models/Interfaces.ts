export interface FormData {
  firstNameClient: string,
  lastNameClient: string,
  prefixCLient: number,
  celClient: number | null,
  streetClient: string | null,
  numbStreetClient: number,
  floorClient: number,
  departmentClient: string,
  blockClient: number,
  lotClient: number,
  localityClient: string,
  provinceClient: string,
  stateClient: string,
}

export interface Province {
  id: number;
  id_countrie: number;
  province: string;
}

export interface City {
  id: number;
  id_province: number;
  city: string;
}