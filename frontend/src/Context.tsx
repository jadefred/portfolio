import { createContext, useContext, useReducer, ReactNode } from "react";
import usePreferenceReducer from "./usePreferenceReducer";
import { UserActionKind, IContext } from "./usePreferenceReducer";

const initialState: IContext = {
  language: localStorage.getItem("lng") || "fr",
};

type Action = {
  language: IContext["language"];
  changeLanguage: (language: string) => void;
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
        language: language,
      },
    });
  };

  const value = {
    language: state.language,
    changeLanguage,
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
