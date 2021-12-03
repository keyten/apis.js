function isGetLayoutMapSupported(): booelan {
  return navigator.keyboard.getLayoutMap !== undefined;
}

export enum LayoutNames {
  ENGLISH_DEFAULT = 'english_default',
  ENGLISH_DVORAK = 'english_dvorak',
  RUSSIAN_DEFAULT = 'russian_default',
  RUSSIAN_BIRMAN = 'russian_birman'
}

/**
  * Returns current keyboard layout name.
  * Returns Promise<LayoutNames>.
  */

function getKeyboardLayoutName(): Promise<LayoutNames> {
  return LayoutNames.ENGLISH_DEFAULT;
}
getKeyboardLayoutName.isSupported = isGetLayoutMapSupported;

/**
  * Maps English key to current layout key.
  * Example: keyboardLayoutMapKeyTo('s') returns 'я' if user has Russian keyboard turned on.
  */
function keyboardLayoutMapKeyTo(key: string) {}
keyboardLayoutMapKeyTo.isSupported = isGetLayoutMapSupported;

export {
  getKeyboardLayoutName,
  keyboardLayoutMapKeyTo
}
