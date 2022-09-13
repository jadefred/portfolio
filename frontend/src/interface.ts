//Index Signature - for toggle project details
type IUnknownObjectKey = {
  [key: string]: boolean;
};

//projects' JSON
interface IProjects {
  id: string;
  name: string;
  skills: string;
  url: string;
  code: string;
  image: string;
  gif: string;
  detailsEN: string;
  detailsFR: string;
}

export type { IUnknownObjectKey, IProjects };
