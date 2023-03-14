export interface Performance {
  '12m'?: string[];
  '30d'?: string[];
  total?: string[];
}

export interface Integrator {
  id: number;
  username: string;
}

export interface Location {
  city?: string;
  region?: string;
}

export interface Owner {
  email?: string;
  phones?: string[];
  id: string;
  username?: string;
}

export interface Portal {
  id: number;
  name: string;
  icon: string;
}

export interface Status {
  id: number;
  time?: string;
}

export interface Unified {
  id?: number;
  quantity?: number;
}
