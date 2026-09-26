````
# 🎵 Loucos por Vitrola

> Uma experiência digital vintage, moderna e apaixonada por música, vinil e vitrolas. 📻🎶

## 📖 Sobre o projeto

O **Loucos por Vitrola** é um projeto de refatoração e modernização do site institucional da marca, preservando sua identidade visual retrô e sua essência ligada ao universo das vitrolas, discos de vinil e equipamentos de áudio vintage.

A proposta é unir:

> **A alma vintage da marca com uma experiência digital moderna.**

O novo projeto transforma o site em uma experiência **multipage, responsiva, acessível e orientada à conversão**, incluindo uma nova área de produtos com catálogo, detalhes dos produtos, carrinho de compras e integração com WhatsApp.

---

## ✨ Principais características

- 🎨 Identidade visual inspirada no logo da Loucos por Vitrola
- 📻 Estética vintage com UX moderna
- 📱 Design totalmente responsivo
- 🖥️ Experiência otimizada para desktop, tablet e mobile
- 🏠 Página inicial institucional
- 👥 Página Sobre Nós
- 🛠️ Página de Serviços
- 🖼️ Galeria com Lightbox
- 📞 Página de Contato
- 🛒 Catálogo de produtos
- 🔎 Busca de produtos
- 🏷️ Filtros e ordenação
- 🔍 Modal com detalhes dos produtos
- 🛍️ Carrinho de compras
- 💾 Persistência do carrinho com `localStorage`
- 📲 Integração com WhatsApp
- ♿ Boas práticas de acessibilidade
- 🚀 Otimizações de performance
- 🔎 SEO técnico básico
- 🧹 Código organizado e modular

---

## 🎨 Identidade visual

A identidade visual foi baseada na paleta extraída do logo da marca.

| Cor | Hex | Utilização |
|---|---|---|
| 🍷 Vermelho vinho | `#650B08` | Cor principal |
| 🔴 Vermelho secundário | `#A9271C` | Hover e destaques |
| 🟡 Creme vintage | `#EED68A` | Textos e detalhes |
| ⚫ Preto | `#080909` | Contraste e textos |
| 🤍 Off-white | `#F5EBD0` | Fundos e superfícies |

### Conceito visual

**Vintage na identidade, moderno na experiência.**

A interface busca referências em:

- discos de vinil;
- vitrolas;
- toca-discos;
- capas de álbuns;
- equipamentos de áudio vintage;
- cultura musical;
- colecionismo;
- estética retrô.

O objetivo não é reproduzir visualmente um site antigo, mas utilizar elementos vintage dentro de uma interface contemporânea.

---

## 🛠️ Tecnologias

O projeto foi desenvolvido utilizando tecnologias web tradicionais e uma arquitetura estática.

### Front-end

- HTML5
- CSS3
- JavaScript Vanilla
- Tailwind CSS

### Armazenamento

- `localStorage`

### Integração

- WhatsApp

### 🚫 Não utilizado

- React
- Next.js
- Vue
- Angular
- Svelte
- PHP
- Laravel
- Node.js como backend
- Banco de dados
- CMS
- WordPress

A ausência de backend torna o projeto adequado para hospedagem estática.

---

## 📂 Estrutura do projeto

```text
/
├── index.html
├── sobre-nos.html
├── servicos.html
├── galeria.html
├── produtos.html
├── contato.html
│
├── assets/
│   ├── images/
│   │   ├── logo/
│   │   ├── produtos/
│   │   └── galeria/
│   │
│   └── icons/
│
├── css/
│   └── styles.css
│
├── js/
│   ├── main.js
│   ├── gallery.js
│   └── products.js
│
└── SPEC.md
````

---

 ## 🛍️ Catálogo de produtos

 Uma das principais evoluções do projeto é a criação de uma área dedicada aos produtos disponíveis para venda.

 O catálogo permite:

 - visualizar produtos;
- pesquisar produtos;
- filtrar por categoria;
- ordenar produtos;
- visualizar disponibilidade;
- abrir detalhes;
- adicionar produtos ao carrinho.

 Os produtos são estruturados em JavaScript, facilitando sua manutenção sem necessidade de banco de dados.

 Exemplo:

```
const products = [
  {
    id: 1,
    name: "Nome do produto",
    category: "Vitrola",
    price: 1300.00,
    image: "assets/images/produto-01.jpg",
    description: "Descrição do produto",
    available: true
  }
];
```

---

 ## 🛒 Carrinho de compras

 O projeto possui um carrinho de compras totalmente implementado no front-end.

 O usuário pode:

 - ➕ adicionar produtos;
- ➖ alterar quantidades;
- 🗑️ remover produtos;
- 🧹 limpar o carrinho;
- 💰 visualizar o total;
- 💾 manter o carrinho após recarregar a página.

 Os dados são armazenados utilizando:

```
localStorage
```

 Chave utilizada:

```
loucosPorVitrolaCart
```

---

 ## 📲 Pedidos via WhatsApp

 O projeto não possui checkout ou pagamento online.

 O fluxo de venda foi pensado para manter o atendimento humano da marca:

```
Produto
   ↓
Adicionar ao carrinho
   ↓
Carrinho
   ↓
Conferir pedido
   ↓
Enviar pelo WhatsApp
   ↓
Atendimento
```

 Ao clicar em **Enviar pedido pelo WhatsApp**, o sistema gera automaticamente uma mensagem contendo:

 - produtos;
- quantidades;
- preços;
- valor total.

 Exemplo:

```
Olá! Tenho interesse nos seguintes produtos:

1x Vitrola XYZ — R$ 1.300,00
2x Vitrola ABC — R$ 900,00

Total: R$ 3.100,00

Gostaria de mais informações sobre disponibilidade e pagamento.
```

---

 ## 📱 Responsividade

 O projeto segue uma abordagem **Mobile First**.

 A interface é projetada para diferentes tamanhos de tela:

```
320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px+
```

 Componentes como:

 - menu;
- catálogo;
- cards;
- modais;
- galeria;
- carrinho;
- formulários;

 foram planejados para funcionar tanto em dispositivos móveis quanto em telas grandes.

---

 ## ♿ Acessibilidade

 O projeto busca seguir boas práticas de acessibilidade, incluindo:

 - HTML semântico;
- textos alternativos em imagens;
- navegação por teclado;
- estados de foco;
- contraste adequado;
- modais acessíveis;
- suporte ao teclado `ESC`;
- botões semanticamente corretos;
- `aria-label` quando necessário.

---

 ## 🔎 SEO

 Cada página possui estrutura preparada para SEO, incluindo:

 - `<title>` específico;
- meta description;
- hierarquia de headings;
- HTML semântico;
- `alt` em imagens;
- URLs amigáveis;
- Open Graph;
- conteúdo específico por página.

 Páginas principais:

```
/
├── Início
├── Sobre Nós
├── Serviços
├── Galeria
├── Produtos
└── Contato
```

---

 ## 🚀 Performance

 O projeto prioriza uma experiência rápida e leve.

 Entre as estratégias utilizadas:

 - imagens otimizadas;
- lazy loading;
- JavaScript modular;
- CSS organizado;
- Tailwind CSS;
- ausência de frameworks desnecessários;
- animações leves;
- carregamento eficiente de recursos.

---

 ## 🧩 Arquitetura

 A aplicação é propositalmente simples e baseada em arquivos estáticos.

```
HTML
 │
 ├── Estrutura das páginas
 │
CSS / Tailwind
 │
 ├── Identidade visual
 ├── Responsividade
 └── Componentes
 │
JavaScript
 │
 ├── Catálogo
 ├── Busca
 ├── Filtros
 ├── Modal
 ├── Carrinho
 ├── LocalStorage
 └── WhatsApp
```

 Essa abordagem permite hospedar o projeto em praticamente qualquer serviço de hospedagem estática.

---

 ## 📋 Páginas

 ### 🏠 Início

 Apresentação da marca, destaques, serviços, produtos, galeria e chamadas para contato.

 ### 👥 Sobre Nós

 História e informações institucionais da Loucos por Vitrola.

 ### 🛠️ Serviços

 Apresentação dos serviços oferecidos pela empresa.

 ### 🖼️ Galeria

 Galeria visual com imagens e visualização ampliada.

 ### 🛍️ Produtos

 Catálogo de produtos disponíveis para venda.

 ### 📞 Contato

 Informações de contato e canais oficiais da marca.

---

 ## 🔗 Canais oficiais

 - 🌐 Website: https://loucosporvitrola.com.br/
- 📘 Facebook: https://www.facebook.com/Loucosporvitrola
- 📸 Instagram: https://www.instagram.com/loucos\_por\_vitrola/
- 💬 WhatsApp: https://wa.me/5511996176660

---

 ## 📐 Princípios de desenvolvimento

 O projeto segue alguns princípios fundamentais:

 ### 1\. 🎵 Preservar a identidade

 A tecnologia deve servir à marca, e não descaracterizá-la.

 ### 2\. 📱 Mobile First

 A experiência mobile é considerada desde o início do desenvolvimento.

 ### 3\. 🧹 Código limpo

 O código deve ser organizado, modular e fácil de manter.

 ### 4\. ♿ Acessibilidade

 A interface deve ser utilizável pelo maior número possível de pessoas.

 ### 5\. 🚀 Performance

 Evitar dependências e recursos desnecessários.

 ### 6\. 🔒 Simplicidade

 Não adicionar complexidade arquitetural sem necessidade.

 ### 7\. 💬 Conversão humanizada

 O WhatsApp funciona como ponte entre o catálogo digital e o atendimento da marca.

---

 ## 📚 Documentação

 A especificação completa do projeto está disponível em:

```
SPEC.md
```

 O arquivo contém:

 - requisitos funcionais;
- requisitos técnicos;
- identidade visual;
- arquitetura;
- catálogo;
- carrinho;
- integração com WhatsApp;
- responsividade;
- SEO;
- acessibilidade;
- performance;
- critérios de aceitação.

---

 ## 🗺️ Roadmap

 - [x] Definição da identidade visual
- [x] Extração da paleta do logo
- [x] Definição da arquitetura multipage
- [x] Especificação técnica
- [x] Definição do catálogo
- [x] Definição do carrinho
- [x] Integração planejada com WhatsApp
- [ ] Implementação das páginas
- [ ] Implementação do catálogo
- [ ] Implementação do carrinho
- [ ] Implementação da galeria
- [ ] Testes responsivos
- [ ] Auditoria de acessibilidade
- [ ] Auditoria de SEO
- [ ] Otimização de performance
- [ ] Revisão final

---

 ## 🤖 Desenvolvimento assistido por IA

 O projeto foi estruturado para ser desenvolvido com auxílio de agentes de desenvolvimento, mantendo regras claras para arquitetura, design e qualidade de código.

 As principais áreas de suporte incluem:

 - 🎨 Frontend Design
- 🌈 Tailwind Patterns
- 📱 Mobile Design
- 🧹 Clean Code
- ♿ Web Design Guidelines
- 🧪 Testing Patterns
- 🌐 Web App Testing
- 🔎 SEO Fundamentals

 A especificação central do projeto permanece em `SPEC.md`, servindo como fonte de verdade para a implementação.

---

 ## 📄 Licença

 Defina aqui a licença do projeto conforme a política da Loucos por Vitrola.

 Exemplo:

```
Copyright © Loucos por Vitrola.
Todos os direitos reservados.
```

---

 ## ❤️ Loucos por Vitrola

 Feito com código, nostalgia e paixão por música. 🎶

 > **Porque algumas histórias não foram feitas para serem transmitidas por streaming. Foram feitas para girar.** 💿🎵

```

```
