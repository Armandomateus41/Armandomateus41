# Armando Capita · Engenheiro de Software Sênior Full Stack

Desenvolvo produtos web e mobile. Da definição do projeto à publicação, tomo decisões de engenharia e acompanho as entregas com a equipe.

[Portfólio](https://armandomateus.com) · [Dynner Sight Solutions](https://dynnersight.com.br) · [LinkedIn](https://www.linkedin.com/in/armandocapita/)

## [AfroPedido](https://afropedido.com.br/)

Participei do desenvolvimento do AfroPedido, um marketplace na web e no Android para encontrar negócios da comunidade africana e afrodescendente no Brasil. Cada pedido reúne itens de uma única loja. O cliente monta o pedido e acompanha o andamento, enquanto o lojista gerencia os produtos e atualiza o status pelo painel.

## [Ondela](https://ondela.com.br/)

Na Ondela, rede social brasileira disponível na web e no [Android](https://play.google.com/store/apps/details?id=app.ondela.mobile), trabalhei em recursos para conversar e compartilhar vídeos curtos e Flashes. Quem publica um Flash escolhe o público daquela publicação e pode deixá-la visível para todos ou apenas para o círculo “Entre nós”.

## Código público

- **bank-simulator-api** — Verifico que a API [recusa um saque maior que o saldo disponível](https://github.com/Armandomateus41/bank-simulator-api/blob/cb78b81f9e6247a9c5a65f5383223123347067aa/src/__tests__/transaction.service.test.ts#L37-L41). No [workflow de integração contínua](https://github.com/Armandomateus41/bank-simulator-api/blob/cb78b81f9e6247a9c5a65f5383223123347067aa/.github/workflows/ci-cd-github-actions.yaml#L45-L49), aplico as migrações antes de executar os testes.
- **onfly-booking-system** — No [teste de autorização do pedido de viagem](https://github.com/Armandomateus41/onfly-booking-system/blob/1bcd095f65de2473d577a5eed4abe3bef358c648/tests/Feature/TravelRequestTest.php#L83-L96), verifico que o solicitante recebe HTTP 403 ao tentar aprovar o próprio pedido.

**Stack** · React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL e Docker.
