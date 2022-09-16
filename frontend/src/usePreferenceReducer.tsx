export interface IContext {
  language: string;
  modal: boolean;
  projectDetails: { [key: string]: boolean };
  darkMode: string;
}

// An enum with all the types of actions to use in our reducer
export enum UserActionKind {
  CHANGELANGUAGE = "CHANGELANGUAGE",
  HAMBURGERTOGGLE = "HAMBURGERTOGGLE",
  TOGGLEMODAL = "TOGGLEMODAL",
  TOGGLEPROJECTDETAILS = "TOGGLEPROJECTDETAILS",
  TOGGLEDARKMODE = "TOGGLEDARKMODE"
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

    case UserActionKind.TOGGLEMODAL:
      return {
        ...state,
        modal: payload.modal,
      };

    case UserActionKind.TOGGLEPROJECTDETAILS:
      return {
        ...state,
        projectDetails: payload.projectDetails,
      };

      case UserActionKind.TOGGLEDARKMODE:
        return {
          ...state,
          darkMode: payload.darkMode,
        };

    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default userReducer;
