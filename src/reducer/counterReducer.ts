export interface State {
  count: number;
}

export type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "incrementByAmount"; payload: string }
  | { type: "reset" };

export const initialState: State = {
  count: 0,
};

export function reducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case "increment": {
      return {
        count: state.count + 1,
      };
    }
    case "decrement": {
      return {
        count: state.count - 1,
      };
    }
    case "incrementByAmount": {
      return {
        count: state.count + Number(action.payload),
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
