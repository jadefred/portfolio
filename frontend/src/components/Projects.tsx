import { FC } from "react";
import { useTranslation } from "react-i18next";

const Projects: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t("projects")}</h2>
    </>
  );
};

export default Projects;
