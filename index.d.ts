/* eslint-disable no-unused-vars */
export function typeOf(obj: any): void;
export function debounce(): void;
export function throttle(): void;
export function hideMobile(mobile: string): void;
type docElmWithBrowsersFullScreenFunctions = HTMLElement & {
  mozRequestFullScreen(): Promise<void>;
  webkitRequestFullscreen(): Promise<void>;
  msRequestFullscreen(): Promise<void>;
};
export function launchFullscreen(
  element: docElmWithBrowsersFullScreenFunctions
): void;
export function exitFullscreen(): void;
export function turnCase(str: string, type: 1 | 2 | 3): void;
