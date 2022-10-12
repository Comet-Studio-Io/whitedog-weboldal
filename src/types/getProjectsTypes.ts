export interface GetProjectsTypes {
  attributes: {
    createdAt: string;
    data: {
      title: string;
      tags: string[];
      colStart: number;
      colEnd: number;
      rowStart: number;
      rowEnd: number;
      src: string;
    };
    image: {
      data: {
        attributes: {
          alternativeText: string;
          caption: string;
          createdAt: string;
          ext: string;
          formats: null | string;
          hash: string;
          height: number;
          mime: string;
          name: string;
          previewUrl: null | string;
          provider: string;
          provider_metadata: null | string;
          size: number;
          updatedAt: string;
          url: string;
          width: number;
        };
      };
      id: number;
    };
    locale: string;
    publishedAt: string;
    updatedAt: string;
  };
  id: number;
}
