export function validatePassword(password: string): {message: string, isError: boolean}[] {
  const messages = [];

  if (password.length < 8) {
    messages.push({message: 'length.error', isError: true});
  } else {
    messages.push({message: 'length.success', isError: false});
  }

  if (!/\d/.test(password)) {
    messages.push({message: 'number.error', isError: true});
  } else {
    messages.push({message: 'number.success', isError: false});
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    messages.push({message: 'specialCharacter.error', isError: true});
  } else {
    messages.push({message: 'specialCharacter.success', isError: false});
  }

  if (!/[A-Z]/.test(password)) {
    messages.push({message: 'uppercase.error', isError: true});
  } else {
    messages.push({message: 'uppercase.success', isError: false});
  }

  if (!/[a-z]/.test(password)) {
    messages.push({message: 'lowercase.error', isError: true});
  } else {
    messages.push({message: 'lowercase.success', isError: false});
  }

  return messages;
}