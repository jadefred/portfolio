import { createContext, useContext, useReducer, ReactNode, SetStateAction } from "react";
import usePreferenceReducer from "./usePreferenceReducer";
import { UserActionKind, IContext } from "./usePreferenceReducer";

const initialState: IContext = {
  language: localStorage.getItem("lng") || "fr",
  modal: false,
};

type Action = {
  language: IContext["language"];
  modal: IContext["modal"];
  changeLanguage: (language: string) => void;
  togglemodal: React.Dispatch<SetStateAction<boolean>>;
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

  const togglemodal = () => {
    dispatch({
      type: UserActionKind.TOOGLEMODAL,
      payload: {
        ...state,
        modal: !state.modal,
      },
    });
  };

  const value = {
    language: state.language,
    modal: state.modal,
    changeLanguage,
    togglemodal,
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
