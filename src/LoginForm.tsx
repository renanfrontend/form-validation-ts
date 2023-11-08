import React, { useState, useEffect } from 'react';
import { validatePassword } from './validation';

const LoginForm: React.FC = () => {
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState<string[]>([]);

  useEffect(() => {
    const validationResults = validatePassword(password);
    setErrors(validationResults.errors);
    setSuccess(validationResults.success);
  }, [password]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (errors.length === 0) {
      // Se a validação for bem-sucedida, prossiga com o login...
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Senha:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
      {errors.map((error, index) => (
        <p key={index}>
          <span role="img" aria-label="error">❌</span>
          {error}
        </p>
      ))}
      {success.map((message, index) => (
        <p key={index}>
          <span role="img" aria-label="check">✅</span>
          {message}
        </p>
      ))}
    </form>
  );
};

export default LoginForm;