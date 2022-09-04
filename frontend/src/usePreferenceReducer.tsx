export interface IContext {
  language: string;
  modal: boolean;
}

// An enum with all the types of actions to use in our reducer
export enum UserActionKind {
  CHANGELANGUAGE = "CHANGELANGUAGE",
  HAMBURGERTOGGLE = "HAMBURGERTOGGLE",
  TOOGLEMODAL = "TOOGLEMODAL",
}

// An interface for our actions
export interface UserAction {
  type: UserActionKind;
  payload: IContext;
}

const userReducer = (state: IContext, action: UserAction) => {
  const { type, payload } = action;

  switch (type) {
    case UserActionKind.CHANGELANGUAGE:
      return {
        ...state,
        language: payload.language,
      };

    case UserActionKind.HAMBURGERTOGGLE:
      return {
        ...state,
        modal: payload.modal,
      };

    case UserActionKind.TOOGLEMODAL:
      return {
        ...state,
        modal: payload.modal,
      };

    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default userReducer;
