// 1、校验数据类型
export function typeOf(obj: any) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}
// 2、防抖
export const debounce = (() => {
  let timer: any = 0;
  return (callback: Function, wait = 800) => {
    // eslint-disable-next-line no-unused-expressions
    timer && clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
})();
// 3、节流
export const throttle = (() => {
  let last = 0;
  return (callback: Function, wait = 800) => {
    const now = +new Date();
    if (now - last > wait) {
      callback();
      last = now;
    }
  };
})();

// 4、手机号脱敏
export const hideMobile = (mobile: string) => {
  return mobile.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2');
};
type docElmWithBrowsersFullScreenFunctions = HTMLElement & {
  mozRequestFullScreen(): Promise<void>;
  webkitRequestFullscreen(): Promise<void>;
  msRequestFullscreen(): Promise<void>;
};
// 5、开启全屏
export const launchFullscreen = async (
  element: docElmWithBrowsersFullScreenFunctions
) => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  }
};
// 6、关闭全屏
type docWithBrowsersExitFunctions = Document & {
  mozCancelFullScreen(): Promise<void>;
  webkitExitFullscreen(): Promise<void>;
  msExitFullscreen(): Promise<void>;
};
export const exitFullscreen = () => {
  const element = document as docWithBrowsersExitFunctions;
  if (element.exitFullscreen) {
    element.exitFullscreen();
  } else if (element.msExitFullscreen) {
    element.msExitFullscreen();
  } else if (element.mozCancelFullScreen) {
    element.mozCancelFullScreen();
  } else if (element.webkitExitFullscreen) {
    element.webkitExitFullscreen();
  }
};
// 7、大小写转换
export const turnCase = (str: string, type: 1 | 2 | 3) => {
  switch (type) {
    case 1:
      return str.toUpperCase();
    case 2:
      return str.toLowerCase();
    case 3:
      // return str[0].toUpperCase() + str.substr(1).toLowerCase() // substr 已不推荐使用
      return str[0].toUpperCase() + str.substring(1).toLowerCase();
    default:
      return str;
  }
};
