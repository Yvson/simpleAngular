type TTableDataInputs = {
    title: string;
    defaultType?: 'table' | 'json';
    values: unknown;
    fields?: unknown; //TOfferInputs | TOfferOutputs;
    changes?: {
      [key: string]: boolean
    }
  };