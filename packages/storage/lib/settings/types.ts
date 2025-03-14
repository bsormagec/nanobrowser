export enum AgentNameEnum {
  Planner = 'planner',
  Navigator = 'navigator',
  Validator = 'validator',
}

// String literal constants for supported LLM providers
export const OPENAI_PROVIDER = 'openai';
export const ANTHROPIC_PROVIDER = 'anthropic';
export const GEMINI_PROVIDER = 'gemini';
export const OLLAMA_PROVIDER = 'ollama';

// Provider type for determining which LangChain ChatModel package to use
export enum ProviderTypeEnum {
  OpenAI = 'openai',
  Anthropic = 'anthropic',
  Gemini = 'gemini',
  Ollama = 'ollama',
  CustomOpenAI = 'custom_openai',
}

// Default model names for each built-in provider
export const llmProviderModelNames = {
  [OPENAI_PROVIDER]: ['gpt-4o', 'gpt-4o-mini', 'o1', 'o1-mini', 'o3-mini'],
  [ANTHROPIC_PROVIDER]: ['claude-3-7-sonnet-latest', 'claude-3-5-sonnet-latest', 'claude-3-5-haiku-latest'],
  [GEMINI_PROVIDER]: [
    'gemini-2.0-flash',
    'gemini-2.0-flash-lite',
    'gemini-2.0-pro-exp-02-05',
    // 'gemini-2.0-flash-thinking-exp-01-21', // TODO: not support function calling for now
  ],
  [OLLAMA_PROVIDER]: [],
  // Custom OpenAI providers don't have predefined models as they are user-defined
};

// Default parameters for each agent per provider
export const llmProviderParameters = {
  [OPENAI_PROVIDER]: {
    [AgentNameEnum.Planner]: {
      temperature: 0.01,
      topP: 0.001,
    },
    [AgentNameEnum.Navigator]: {
      temperature: 0,
      topP: 0.001,
    },
    [AgentNameEnum.Validator]: {
      temperature: 0,
      topP: 0.001,
    },
  },
  [ANTHROPIC_PROVIDER]: {
    [AgentNameEnum.Planner]: {
      temperature: 0.1,
      topP: 0.1,
    },
    [AgentNameEnum.Navigator]: {
      temperature: 0.1,
      topP: 0.1,
    },
    [AgentNameEnum.Validator]: {
      temperature: 0.05,
      topP: 0.1,
    },
  },
  [GEMINI_PROVIDER]: {
    [AgentNameEnum.Planner]: {
      temperature: 0.01,
      topP: 0.1,
    },
    [AgentNameEnum.Navigator]: {
      temperature: 0.01,
      topP: 0.1,
    },
    [AgentNameEnum.Validator]: {
      temperature: 0.1,
      topP: 0.1,
    },
  },
  [OLLAMA_PROVIDER]: {
    [AgentNameEnum.Planner]: {
      temperature: 0,
      topP: 0.001,
    },
    [AgentNameEnum.Navigator]: {
      temperature: 0.01,
      topP: 0.001,
    },
    [AgentNameEnum.Validator]: {
      temperature: 0,
      topP: 0.001,
    },
  },
};
