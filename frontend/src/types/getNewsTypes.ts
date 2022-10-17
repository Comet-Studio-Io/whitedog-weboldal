export interface GetNewsTypes {
  attributes: {
    data: {
      title: string;
      date: string;
      filter: string;
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
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
  id: number;
}
