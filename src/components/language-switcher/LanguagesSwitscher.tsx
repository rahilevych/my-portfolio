'use client';
import { Button } from '@/shared/logo/button/Button';
import styles from './LanguagesSwitscher.module.css';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n, ready } = useTranslation();
  if (!ready) return null;
  return (
    <div className={styles.btns}>
      <Button
        type='button'
        className={`${styles.btn} ${i18n.language === 'en' ? styles.active : ''}`}
        disabled={i18n.language === 'en'}
        onClick={() => i18n.changeLanguage('en')}
      >
        EN
      </Button>
      <Button
        type='button'
        className={`${styles.btn} ${i18n.language === 'de' ? styles.active : ''}`}
        disabled={i18n.language === 'de'}
        onClick={() => i18n.changeLanguage('de')}
      >
        DE
      </Button>
    </div>
  );
};
