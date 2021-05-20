declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

declare namespace JSX {
  interface IntrinsicElements {
    import: React.DetailedHTMLProps<
      React.EmbedHTMLAttributes<HTMLEmbedElement>,
      HTMLEmbedElement
    >;
    [key: string]: any;
  }
}

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV:
      | "weapp"
      | "swan"
      | "alipay"
      | "h5"
      | "rn"
      | "tt"
      | "quickapp"
      | "qq"
      | "jd";
    [key: string]: any;
  };
};

declare const __devtoolsConfig: any;

// @ts-ignore
declare const wx: {
// @ts-ignore
  // interface Wx {
  aldPushSendOpenid: any;
  getStorageSync: any
  // }
}
