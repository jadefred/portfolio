export interface IContext {
  language: string;
}

// An enum with all the types of actions to use in our reducer
export enum UserActionKind {
  CHANGELANGUAGE = "CHANGELANGUAGE",
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

    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default userReducer;
