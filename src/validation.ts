export function validatePassword(password: string): {errors: string[], success: string[]} {
  const errors = [];
  const success = [];

  if (password.length < 8) {
    errors.push('A senha deve ter pelo menos 8 caracteres');
  } else {
    success.push('A senha tem pelo menos 8 caracteres');
  }

  if (!/\d/.test(password)) {
    errors.push('A senha deve conter pelo menos 1 número');
  } else {
    success.push('A senha contém pelo menos 1 número');
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('A senha deve conter pelo menos 1 caractere especial');
  } else {
    success.push('A senha contém pelo menos 1 caractere especial');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('A senha deve conter pelo menos 1 letra maiúscula');
  } else {
    success.push('A senha contém pelo menos 1 letra maiúscula');
  }

  if (!/[a-z]/.test(password)) {
    errors.push('A senha deve conter pelo menos 1 letra minúscula');
  } else {
    success.push('A senha contém pelo menos 1 letra minúscula');
  }

  return {errors, success};
}