import { createContext, useContext, useReducer, ReactNode, SetStateAction } from "react";
import usePreferenceReducer from "./usePreferenceReducer";
import { UserActionKind, IContext } from "./usePreferenceReducer";

const initialState: IContext = {
  language: localStorage.getItem("lng") || "fr",
  modal: false,
  projectDetails: {},
};

type Action = {
  language: IContext["language"];
  modal: IContext["modal"];
  changeLanguage: (language: string) => void;
  hamburgerToggle: React.Dispatch<SetStateAction<boolean>>;
  toogleModal: (modal: boolean) => void;
  projectDetails: IContext["projectDetails"];
  toogleProjectDetails: (project_id: string) => void;
};

const PreferenceContext = createContext({} as Action);

interface IProps {
  children: ReactNode;
}

export const PreferenceProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(usePreferenceReducer, initialState);

  const changeLanguage = (language: string) => {
    dispatch({
      type: UserActionKind.CHANGELANGUAGE,
      payload: {
        ...state,
        language: language,
      },
    });
  };

  const hamburgerToggle = () => {
    dispatch({
      type: UserActionKind.HAMBURGERTOGGLE,
      payload: {
        ...state,
        modal: !state.modal,
      },
    });
  };

  const toogleModal = (modal: boolean) => {
    dispatch({
      type: UserActionKind.TOOGLEMODAL,
      payload: {
        ...state,
        modal: !modal,
      },
    });
  };

  const toogleProjectDetails = (project_id: string) => {
    dispatch({
      type: UserActionKind.TOOGLEPROJECTDETAILS,
      payload: {
        ...state,
        projectDetails: { ...state.projectDetails, [project_id]: Boolean(!state.projectDetails[project_id]) },
      },
    });
  };

  const value = {
    language: state.language,
    modal: state.modal,
    projectDetails: state.projectDetails,
    changeLanguage,
    hamburgerToggle,
    toogleModal,
    toogleProjectDetails,
  };

  return <PreferenceContext.Provider value={value}>{children}</PreferenceContext.Provider>;
};

const usePreferenceStatus = () => {
  const context = useContext(PreferenceContext);

  if (context === undefined) {
    throw new Error("usePreferenceStatus must be used within PreferenceContext");
  }

  return context;
};

export default usePreferenceStatus;
