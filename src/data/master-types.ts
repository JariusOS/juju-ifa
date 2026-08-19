export interface RankedRow {
  country: string;
  detail: string;
  share: string;
  valueNum: number;
}

export interface MasterRecord {
  rank: number;
  name: string;
  exportValue: string;
  exportNum: number;
  exportUnit: 'B' | 'M';
  tags: string[];
  globalValue: string;
  africaShare: string;
  price: string;
  hsCode: string;
  comId: string;
  description: string;
  valueLine: string;
  yoy: string;
  confidence: string;
  top3: RankedRow[];
  top5Producers: RankedRow[];
  top5Exporters: RankedRow[];
  top5Consumers: RankedRow[];
  top5Importers: RankedRow[];
}