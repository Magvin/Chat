/* eslint-disable import/prefer-default-export */
export const classModifier = (classname) => {
  if (classname.length) {
    return `chat-${classname}`;
  }

  return classname;
};
