export function validatePassword(password: string): {message: string, isError: boolean}[] {
  const messages = [];

  if (password.length < 8) {
    messages.push({message: 'A senha deve ter pelo menos 8 caracteres', isError: true});
  } else {
    messages.push({message: 'A senha tem pelo menos 8 caracteres', isError: false});
  }

  if (!/\d/.test(password)) {
    messages.push({message: 'A senha deve conter pelo menos 1 número', isError: true});
  } else {
    messages.push({message: 'A senha contém pelo menos 1 número', isError: false});
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    messages.push({message: 'A senha deve conter pelo menos 1 caractere especial', isError: true});
  } else {
    messages.push({message: 'A senha contém pelo menos 1 caractere especial', isError: false});
  }

  if (!/[A-Z]/.test(password)) {
    messages.push({message: 'A senha deve conter pelo menos 1 letra maiúscula', isError: true});
  } else {
    messages.push({message: 'A senha contém pelo menos 1 letra maiúscula', isError: false});
  }

  if (!/[a-z]/.test(password)) {
    messages.push({message: 'A senha deve conter pelo menos 1 letra minúscula', isError: true});
  } else {
    messages.push({message: 'A senha contém pelo menos 1 letra minúscula', isError: false});
  }

  return messages;
}