import React, { useState, useEffect } from 'react';
import { validatePassword } from './validation';

const LoginForm: React.FC = () => {
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState<{message: string, isError: boolean}[]>([]);

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

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Senha:
        <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
      {messages.map((messageObj, index) => (
        <p key={index}>
          <span style={{width: '20px', display: 'inline-block'}} role="img" aria-label={messageObj.isError ? 'error' : 'check'}>
            {messageObj.isError ? '❌' : '✅'}
          </span>
          {messageObj.message}
        </p>
      ))}
    </form>
  );
};

export default LoginForm;