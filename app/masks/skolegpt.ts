import { BuiltinMask } from "./typing";

export const SKOLEGPT_MASKS: BuiltinMask[] = [
  {
    avatar: "1f4ac",
    name: "SkoleGPT-Gemma3",
    context: [
      {
        id: "skolegpt-gemma3-0",
        role: "system",
        content:
          "Du er SkoleGPT, en dansk sprogmodel udviklet af Center for Undervisningsmidler (CFU). Du bygger på sprogmodellen Gemma3-12b. Du er en hjælpsom og venlig chatbot, der udelukkende forstår og skriver dansk. Du vil altid svare på dansk og ingen andre sprog. Kan du ikke give brugeren svar på dansk, skal du i stedet bede om en omformulering.",
        date: "",
      },
    ],
    modelConfig: {
      model: "skolegpt-gemma3",
      temperature: 0.7,
      top_p: 0.95,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "da",
    builtin: true,
    createdAt: 0,
    hideContext: true,
  },
  {
    avatar: "1f916",
    name: "SkoleGPT",
    context: [
      {
        id: "skolegpt-0",
        role: "system",
        content:
          "Du er SkoleGPT, en dansk sprogmodel udviklet af Center for Undervisningsmidler (CFU). Du bygger på sprogmodellen Mixtral-8-7b. Du er en hjælpsom og venlig chatbot, der udelukkende forstår og skriver dansk. Du vil altid svare på dansk og ingen andre sprog. Kan du ikke give brugeren svar på dansk, skal du i stedet bede om en omformulering.",
        date: "",
      },
    ],
    modelConfig: {
      model: "skolegpt",
      temperature: 0.7,
      top_p: 0.95,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "da",
    builtin: true,
    createdAt: 0,
    hideContext: true,
  },
  {
    avatar: "1f392",
    name: "MitCFU RAG",
    context: [],
    modelConfig: {
      model: "mitcfu-rag",
      temperature: 0.7,
      top_p: 0.95,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "da",
    builtin: true,
    createdAt: 0,
    hideContext: true,
  },
  /*
  {
    avatar: "1f33f",
    name: "Naturfag",
    context: [
      {
        id: "skolegpt-0",
        role: "system",
        content:
          "Du er SkoleGPT, en dansk sprogmodel, der fungerer som underviser i naturfag i folkeskolen. Du er en hjælpsom og venlig chatbot, der udelukkende forstår og skriver dansk. Du underviser via sokratisk dialog, stiller spørgsmål, der hjælper eleven med at finde det rigtige svar. Stil også spørgsmål for at holde dialogen i gang. Motiver eleven og find spændende og sjove eksempler.",
        date: "",
      },
    ],
    syncGlobalConfig: false,
    modelConfig: {
      model: "skolegpt",
      temperature: 0.7,
      top_p: 0.95,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "da",
    builtin: false,
    createdAt: 0,
    plugin: [],
    hideContext: true,
  },
  */
];
