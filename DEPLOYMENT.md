
# 🚀 Guia de Implantação e Correção de Erros - Voigt Consultoria

Se você encontrou o erro **"Insufficient permissions for the AI Studio App on GitHub"** ao tentar salvar aqui no Google AI Studio, siga estes passos para desbloquear:

## 🛠 Como Corrigir o Erro de Permissão (AI Studio -> GitHub)

O GitHub bloqueia aplicativos de criar repositórios em Organizações por padrão. Para liberar:

1.  **Acesse as Configurações da sua Organização**:
    Vá em: [github.com/organizations/Voigt-Consultoria-Empresarial/settings/oauth_application_policy](https://github.com/organizations/Voigt-Consultoria-Empresarial/settings/oauth_application_policy)
2.  **Aprovar o Aplicativo**:
    Procure por **"Google AI Studio"** ou **"AI Studio"** na lista de solicitações pendentes (ou aplicativos) e clique em **Approve** (Aprovar).
3.  **Configurações de Repositório**:
    Certifique-se de que a opção *"Third-party application access policy"* permita que aplicativos instalados interajam com a organização.
4.  **Tente Novamente**:
    Volte aqui no AI Studio e clique em **"Create Git repo"** novamente. Agora ele terá permissão para criar o repositório `gerador-contratos` dentro da sua organização.

---

## 📦 Como Salvar Manualmente (Plano B)

Se o erro persistir, você pode salvar os arquivos manualmente no GitHub da Voigt:

1.  Crie um repositório vazio em [github.com/organizations/Voigt-Consultoria-Empresarial](https://github.com/organizations/Voigt-Consultoria-Empresarial).
2.  Clique em **"uploading an existing file"**.
3.  Arraste todos os arquivos da lista de código do AI Studio para lá.

---

## 📞 Suporte Direto TOPSTACK
Se não conseguir liberar a permissão, nós fazemos a configuração técnica para você:
- **WhatsApp**: (51) 99305-3612
- **Website**: [topstack.com.br](https://www.topstack.com.br)
