import { FormEvent } from "react";

export type ApiKeys = {
  username: string | undefined;
  email: string | undefined;
  apiKey: string;
  privateKey: string;
};

export type BotSettings = {
  strategy: string;
  bot_on: boolean;
  risk: number;
};

export type StrategyProps = {
  strategy: BotSettings;
  setStrategy: React.Dispatch<React.SetStateAction<BotSettings>>;
  handleSubmit?: (event: FormEvent) => Promise<void>;
};

export type ApiProps = {
  apiKeys: ApiKeys;
  setApiKeys: React.Dispatch<React.SetStateAction<ApiKeys>>;
  handleSubmit: (event: FormEvent<Element>) => Promise<void>;
};
