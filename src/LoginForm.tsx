import React, { useState } from 'react';
import { validatePassword } from './validation';

const LoginForm: React.FC = () => {
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const validationErrors = validatePassword(password);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
    } else {
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
      {errors.map((error, index) => <p key={index}>{error}</p>)}
    </form>
  );
};

export default LoginForm;