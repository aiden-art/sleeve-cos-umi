export interface SpecKeyModel {
  id: number;
  name: string;
  unit: string;
  standard: number;
  description: string;
  specValues?: SpecValueModel[];
}

export interface SpecValueModel {
  id: number;
  value: string;
  specKeyId: number;
  extend: string;
}
