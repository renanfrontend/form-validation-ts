export function validatePassword(password: string): string[] {
    const errors = [];
  
    if (password.length < 8) {
      errors.push('A senha deve ter pelo menos 8 caracteres');
    }
  
    if (!/\d/.test(password)) {
      errors.push('A senha deve conter pelo menos 1 número');
    }
  
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push('A senha deve conter pelo menos 1 caractere especial');
    }
  
    if (!/[A-Z]/.test(password)) {
      errors.push('A senha deve conter pelo menos 1 letra maiúscula');
    }
  
    if (!/[a-z]/.test(password)) {
      errors.push('A senha deve conter pelo menos 1 letra minúscula');
    }
  
    return errors;
  }