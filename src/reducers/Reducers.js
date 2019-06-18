const initialState = { time: 0 };

export function changeTime(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE":
      if (action.toggle === "START") {
        return {
          time: state.time + 1
        };
      } else {
        return {
          time: state.time
        };
      }

    default:
      return state;
  }
}
