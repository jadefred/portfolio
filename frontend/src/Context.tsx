import { createContext, useContext, useReducer, ReactNode, SetStateAction } from "react";
import usePreferenceReducer from "./usePreferenceReducer";
import { UserActionKind, IContext } from "./usePreferenceReducer";

const initialState: IContext = {
  language: localStorage.getItem("lng") || "fr",
  modal: false,
  projectDetails: {},
  darkMode: localStorage.getItem("darkMode") || "false",
};

type Action = {
  language: IContext["language"];
  modal: IContext["modal"];
  projectDetails: IContext["projectDetails"];
  darkMode: IContext["darkMode"];
  changeLanguage: (language: string) => void;
  hamburgerToggle: React.Dispatch<SetStateAction<boolean>>;
  toggleModal: (modal: boolean) => void;
  toggleProjectDetails: (project_id: string) => void;
  toggleDarkMode: (darkMode: string) => void;
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

  const toggleModal = (modal: boolean) => {
    dispatch({
      type: UserActionKind.TOGGLEMODAL,
      payload: {
        ...state,
        modal: !modal,
      },
    });
  };

  const toggleProjectDetails = (project_id: string) => {
    dispatch({
      type: UserActionKind.TOGGLEPROJECTDETAILS,
      payload: {
        ...state,
        projectDetails: { ...state.projectDetails, [project_id]: Boolean(!state.projectDetails[project_id]) },
      },
    });
  };

  const toggleDarkMode = (darkMode: string) => {
    dispatch({
      type: UserActionKind.TOGGLEDARKMODE,
      payload: {
        ...state,
        darkMode: darkMode,
      },
    });
  };

  const value = {
    language: state.language,
    modal: state.modal,
    projectDetails: state.projectDetails,
    darkMode: state.darkMode,
    changeLanguage,
    hamburgerToggle,
    toggleModal,
    toggleProjectDetails,
    toggleDarkMode,
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
