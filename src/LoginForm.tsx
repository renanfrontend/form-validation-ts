import React, { useState, useEffect } from 'react';
import { validatePassword } from './validation';
import { useTranslation } from 'react-i18next';

const LoginForm: React.FC = () => {
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState<{message: string, isError: boolean}[]>([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const validationResults = validatePassword(password);
    setMessages(validationResults);
  }, [password]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!messages.some(message => message.isError)) {
      // Se a validação for bem-sucedida, prossiga com o login...
    }
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div>
        <label style={{margin: '8px'}} htmlFor="language">{t('select.language')}</label>
        <select
          id="language"
          onChange={(e) => changeLanguage(e.target.value)}
          defaultValue={i18n.language}
        >
          <option style={{margin: '8px'}} value="pt">{t('ln.portuguese')}</option>
          <option style={{margin: '8px'}} value="en">{t('ln.english')}</option>
        </select>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
        {t('password')}
          <input style={{margin: '6px'}} type="text" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <button type="submit">{t('login')}</button>
        {messages.map((messageObj, index) => (
          <p key={index}>
            <span style={{width: '20px', display: 'inline-block'}} role="img" aria-label={messageObj.isError ? 'error' : 'check'}>
              {messageObj.isError ? '❌' : '✅'}
            </span>
            {t(messageObj.message)}
          </p>
        ))}
      </form>
    </>
  );
};

export default LoginForm;