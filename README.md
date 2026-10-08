# Hotel Reservation SMS

Serviço Node.js responsável pelo envio de SMS relacionados a reservas de hotel. O código separa a inicialização do servidor do serviço de envio, facilitando a integração com um provedor de mensagens.

## Stack

- Node.js
- TypeScript
- Serviço HTTP
- Integração com provedor de SMS configurável

## Executar

```bash
git clone https://github.com/V1TER4/hotel-reservation-sms.git
cd hotel-reservation-sms
npm install
npm run dev
```

Configure no ambiente as credenciais do provedor e os dados necessários para autenticação. O script disponível é `npm run dev`; o arquivo `src/smsService.ts` concentra a integração de mensagens e `src/server.ts` inicializa o serviço.

Não versionar tokens, números de telefone de clientes ou mensagens com dados pessoais.

