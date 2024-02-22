export interface State {
  value: number;
}

export type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "incrementByAmount"; payload: string }
  | { type: "reset" };

export const initialState: State = {
  value: 0,
};

export function reducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case "increment": {
      return {
        value: state.value + 1,
      };
    }
    case "decrement": {
      return {
        value: state.value - 1,
      };
    }
    case "incrementByAmount": {
      return {
        value: state.value + Number(action.payload),
      };
    }
    case "reset": {
      return initialState;
    }
    default: {
      throw new Error("Unknown action type");
    }
  }
}
