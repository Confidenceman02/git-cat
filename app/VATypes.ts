export type AnalyzeProperties = "d" | "cx"

export interface DClassifierProps {
  targetId: string;
  attribute: "d";
}

export interface CxClassifierProps {
  targetId: string;
  attribute: "cx";
}

export interface AnalyzeArgs {
  targetId: string;
  attribute: AnalyzeProperties;
}