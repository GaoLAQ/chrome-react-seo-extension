export type DOMMessage = {
  type: "GET_DOM";
};

export type DOMMessageResponse = {
  title: string;
  headlines: any;
};

export type DOMDetect = {
  tagName: string;
  type: string;
};
