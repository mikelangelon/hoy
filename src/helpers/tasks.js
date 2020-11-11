import { v1 as uuidv1 } from "uuid";

export const createTask = (text) => {
  const ID = uuidv1();
  return {
    [ID]: {
      id: ID,
      text: text,
      done: false,
      at: Date.now(),
      createdAt: Date.now(),
    },
  };
};
