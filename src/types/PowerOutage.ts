export interface PowerOutage {
    id: string;        // UUID
    region: string;    // bairro / CEP
    duration: string;  // ex.: “2h 30m”
    losses: string;    // texto livre
    createdAt: string; // ISO
  }
  