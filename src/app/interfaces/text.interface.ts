interface Message {
  role: string;
  content: string;
}

interface Choice {
  index: number;
  message: Message;
  logprobs: null;
  finish_reason: string;
}

interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

export interface ApiResponseAiText {
  id: string;
  object: string;
  created: number;
  model: string;
  system_fingerprint: string;
  choices: Choice[];
  usage: Usage;
}
