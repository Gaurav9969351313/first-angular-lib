/*
 * Public API Surface of my-new-lib
 */

export * from './lib/my-new-lib.service';
export * from './lib/my-new-lib.component';
export * from './lib/my-new-lib.module';

export * from './lib/my-lib.module';
export * from './lib/counter-button/counter-button.component';

export const mobilePattern = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
export const passwordPAttern = new RegExp(/^(?=.*[0-9])[a-zA-Z0-9]{8,16}$/);
export const urlPattern = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);
export const youtubeIdPattern = new RegExp(/(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/);



