export const getLanguage = () => {
  const language = navigator.language.split(/[-_]/)[0];
  if (language === 'de') return 'de';
  return 'en';
};
