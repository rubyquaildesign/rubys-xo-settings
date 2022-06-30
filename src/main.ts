import settingsObject from './data.json';

export const xoSettings = { ...settingsObject.xo } as const;
export const prettierSettings = { ...settingsObject.prettier } as const;
export default xoSettings;
