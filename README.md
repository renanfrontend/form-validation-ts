## Instalação e Execução do Projeto

### Instalação

Certifique-se de ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados no seu sistema.

1. Clone o repositório:

```bash
git clone https://github.com/renanfrontend/form-validation-ts.git
```

2. Acesse o diretório do projeto:

```bash
cd form-validation-ts
```

3. Instale as dependências:

```bash
npm install
```

### Execução

4. Inicie o aplicativo:

```bash
npm start
```

O aplicativo será iniciado e estará disponível no seu navegador em `http://localhost:3000/`.

## Componente de Validação de Senha

### Função `validatePassword`

A função `validatePassword` foi desenvolvida para avaliar a robustez de uma senha fornecida. Ela retorna um array de mensagens de validação, cada uma contendo uma string de mensagem e um booleano indicando se é uma mensagem de erro ou sucesso.

### Exemplo de Uso:

```typescript
import { validatePassword } from './validation';

const senha = 'exemploSenha123';
const resultadosValidacao = validatePassword(senha);

// Exemplo de saída:
// [
//   { message: 'length.success', isError: false },
//   { message: 'number.success', isError: false },
//   { message: 'specialCharacter.success', isError: false },
//   { message: 'uppercase.success', isError: false },
//   { message: 'lowercase.success', isError: false },
// ]
```

### Mensagens de Validação:

- `length.success`: A senha tem pelo menos 8 caracteres.
- `length.error`: A senha deve ter pelo menos 8 caracteres.

- `number.success`: A senha contém pelo menos um dígito numérico.
- `number.error`: A senha deve conter pelo menos um dígito numérico.

- `specialCharacter.success`: A senha contém pelo menos um caractere especial.
- `specialCharacter.error`: A senha deve conter pelo menos um caractere especial.

- `uppercase.success`: A senha contém pelo menos uma letra maiúscula.
- `uppercase.error`: A senha deve conter pelo menos uma letra maiúscula.

- `lowercase.success`: A senha contém pelo menos uma letra minúscula.
- `lowercase.error`: A senha deve conter pelo menos uma letra minúscula.

## Integração com um Formulário de Login

### Exemplo de Uso:

```typescript
import React, { useState, useEffect } from 'react';
import { validatePassword } from './validation';
import { useTranslation } from 'react-i18next';

const FormularioLogin: React.FC = () => {
  const [senha, setSenha] = useState('');
  const [mensagens, setMensagens] = useState<{ message: string; isError: boolean }[]>([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const resultadosValidacao = validatePassword(senha);
    setMensagens(resultadosValidacao);
  }, [senha]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!mensagens.some((mensagem) => mensagem.isError)) {
      // Prossiga com o login se a validação for bem-sucedida...
    }
  };

  const mudarIdioma = (idioma: string) => {
    i18n.changeLanguage(idioma);
  };

  return (
    <>
      {/* Seletor de Idioma */}
      <div>
        <label style={{ margin: '8px' }} htmlFor="idioma">
          {t('selecionar.idioma')}
        </label>
        <select
          id="idioma"
          onChange={(e) => mudarIdioma(e.target.value)}
          defaultValue={i18n.language}
        >
          <option style={{ margin: '8px' }} value="pt">
            {t('ln.portugues')}
          </option>
          <option style={{ margin: '8px' }} value="en">
            {t('ln.ingles')}
          </option>
        </select>
      </div>

      {/* Formulário de Login */}
      <form onSubmit={handleSubmit}>
        <label>
          {t('senha')}
          <input
            style={{ margin: '6px' }}
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>
        <button type="submit">{t('entrar')}</button>

        {/* Exibição de Mensagens de Validação */}
        {mensagens.map((mensagemObj, index) => (
          <p key={index}>
            <span style={{ width: '20px', display: 'inline-block' }} role="img" aria-label={mensagemObj.isError ? 'erro' : 'check'}>
              {mensagemObj.isError ? '❌' : '✅'}
            </span>
            {t(mensagemObj.message)}
          </p>
        ))}
      </form>
    </>
  );
};

export default FormularioLogin;
```

### Internacionalização (i18n)

O exemplo utiliza a biblioteca `react-i18next` para internacionalização. Essa biblioteca permite traduzir seu aplicativo para vários idiomas.

#### Seleção de Idioma:

- O idioma pode ser selecionado usando o menu suspenso fornecido.

#### Tradução de Mensagens:

- A função `t` de `useTranslation` é usada para traduzir mensagens com base no idioma selecionado.

#### Mudança de Idioma:

- A função `mudarIdioma` é usada para alterar dinamicamente o idioma.
