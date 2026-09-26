/**
 * LOUCOS POR VITROLA — CATÁLOGO DE PRODUTOS
 * Estrutura oficial de dados e funções de renderização, busca e filtros.
 */

const products = [
  {
    id: 1,
    name: "Toca-discos Gradiente B35",
    brand: "Gradiente",
    category: "Toca-discos",
    price: 1250.00,
    image: "assets/images/produtos/gradiente-b35.jpg",
    description: "Clássico nacional da era de ouro do áudio. Toca-discos Gradiente B35 Belt Drive (tração por correia nova), com controle de velocidade calibrado em 33 e 45 RPM. Acompanha cápsula magnética de alta fidelidade e agulha nova. Totalmente revisado em bancada eletrônica e mecânica, com tampa acrílica polida sem riscos. Equipamento autêntico com garantia Loucos por Vitrola de 90 dias.",
    specs: ["Tração: Belt Drive (correia nova)", "Velocidades: 33 1/3 e 45 RPM", "Cápsula: Magnética de alta fidelidade", "Tampa: Acrílica original polida", "Garantia: 90 dias com revisão completa"],
    available: true,
    featured: true
  },
  {
    id: 2,
    name: "Toca-discos Technics SL-BD20",
    brand: "Technics",
    category: "Toca-discos",
    price: 1450.00,
    image: "assets/images/produtos/technics-sl-bd20.jpg",
    description: "Ícone de precisão japonesa, o Technics SL-BD20 é um toca-discos semiautomático com sistema de retorno suave do braço ao final do disco. Equipado com montagem T4P original da Technics para reprodução límpida e estabilidade impecável. Mecanismo revisado, lubrificado e regulado por nossos especialistas.",
    specs: ["Fabricação: Japão (Technics / Panasonic)", "Sistema: Semiautomático com Auto-Return", "Padrão da cápsula: P-Mount / T4P", "Pitch e Rotação: 33 e 45 RPM estritamente calibrados", "Garantia: 90 dias"],
    available: true,
    featured: true
  },
  {
    id: 3,
    name: "Toca-discos Technics SL-Q03 Direct Drive",
    brand: "Technics",
    category: "Toca-discos",
    price: 2400.00,
    image: "assets/images/produtos/technics-sl-q03.jpg",
    description: "Uma verdadeira joia do áudio audiófilo vintage. O Technics SL-Q03 conta com motor Direct Drive com travamento a quartzo (Quartz-Lock) de altíssima precisão e operação totalmente automática. Construção pesada anti-vibração em alumínio fundido injetado (TNRC). Revisado integralmente em Santo André.",
    specs: ["Motor: Direct Drive Quartz-Locked", "Operação: Totalmente Automática (Start / Stop / Repeat)", "Chassi: Alumínio fundido anti-ressonante", "Uso: Alta fidelidade e colecionadores exigentes", "Garantia: 90 dias"],
    available: true,
    featured: true
  },
  {
    id: 4,
    name: "Toca-discos Akai AP-A2",
    brand: "Akai",
    category: "Toca-discos",
    price: 1100.00,
    image: "assets/images/produtos/akai-ap-a2.jpg",
    description: "Toca-discos japonês Akai AP-A2 com retorno automático e acionamento suave. Destaca-se pelo design limpo e moderno dos anos 80, excelente isolamento de vibrações externas e som detalhado. Produto testado e certificado na oficina dos Loucos por Vitrola.",
    specs: ["Origem: Japão (Akai Electric Co.)", "Mecanismo: Auto-Return e Cueing suave", "Cápsula: Magnética calibrada", "Condição: Totalmente revisado e higienizado", "Garantia: 90 dias"],
    available: true,
    featured: false
  },
  {
    id: 5,
    name: "Toca-discos Sony PS-X23 Direct Drive",
    brand: "Sony",
    category: "Toca-discos",
    price: 1650.00,
    image: "assets/images/produtos/sony-psx23.jpg",
    description: "Toca-discos de tração direta com motor Sony BSL sem escovas e retorno automático. Equipamento robusto com resposta de transientes impecável e wow & flutter praticamente nulo. Gabinete em acabamento acetinado com pés amortecedores de borracha natural restaurados.",
    specs: ["Tração: Direct Drive Sony BSL Motor", "Mecanismo: Semiautomático com retorno seguro", "Braço: Equilibrado estaticamente em J", "Tampa: Acrílica transparente impecável", "Garantia: 90 dias"],
    available: true,
    featured: false
  },
  {
    id: 6,
    name: "Toca-discos Gradiente DD-200Q Quartz",
    brand: "Gradiente",
    category: "Toca-discos",
    price: 2950.00,
    image: "assets/images/produtos/gradiente-dd-200q.jpg",
    description: "O mais cobiçado toca-discos nacional de todos os tempos. O lendário Gradiente DD-200Q possui tecnologia Direct Drive Quartz Synthesizer com estroboscópio integrado e comando eletrônico frontal. Uma verdadeira obra de arte do design brasileiro, restaurado artesanalmente por nossa equipe.",
    specs: ["Tecnologia: Direct Drive Quartz Synthesizer", "Painel: Controle por toque com iluminação estroboscópica", "Status: Edição de colecionador impecável", "Restauração: Marcenaria, pintura e eletrônica 100%", "Garantia: 90 dias"],
    available: true,
    featured: true
  },
  {
    id: 7,
    name: "Toca-discos Kenwood KD-1",
    brand: "Kenwood",
    category: "Toca-discos",
    price: 1350.00,
    image: "assets/images/produtos/kenwood-bd1.jpg",
    description: "Kenwood KD-1 com base acústica em acabamento de madeira natural e mecanismo Belt Drive de alta estabilidade. Traz o calor e a musicalidade característicos dos equipamentos clássicos dos anos 70. Braço em S cromado de alta precisão.",
    specs: ["Base: Madeira nobre com amortecimento acústico", "Braço: Formato em S com ajuste micrométrico de peso", "Cápsula: Novinha em folha com excelente palco sonoro", "Garantia: 90 dias"],
    available: true,
    featured: false
  },
  {
    id: 8,
    name: "Vitrola Garrard 6300 Inglesa",
    brand: "Garrard",
    category: "Vitrola",
    price: 1550.00,
    image: "assets/images/produtos/garrard-6300.jpg",
    description: "A clássica engenharia britânica Garrard em seu esplendor mecânico. Vitrola automática changer Garrard 6300 montada em gabinete de madeira com acabamento impecável. Mecanismo de engrenagens limpo e lubrificado com graxa especial sintética.",
    specs: ["Origem: Swindon, Inglaterra", "Tipo: Vitrola mecânica com trocador", "Velocidades: 33, 45 e 78 RPM", "Gabinete: Madeira nobre tratada", "Garantia: 90 dias"],
    available: true,
    featured: false
  },
  {
    id: 9,
    name: "Toca-discos Gradiente DD-100Q",
    brand: "Gradiente",
    category: "Toca-discos",
    price: 2200.00,
    image: "assets/images/produtos/gradiente-dd-100q.jpg",
    description: "Gradiente DD-100Q com tração direta controlada por quartzo. Muito raro e procurado pelo design minimalista e qualidade de som soberba. Este exemplar foi reservado recentemente por um de nossos clientes.",
    specs: ["Tração: Direct Drive Quartz", "Painel: Serigrafia original 100% conservada", "Tampa: Acrílico polido sem trincas", "Garantia: 90 dias"],
    available: false,
    featured: false
  },
  {
    id: 10,
    name: "Toca-discos Gradiente D-40",
    brand: "Gradiente",
    category: "Toca-discos",
    price: 1200.00,
    image: "assets/images/produtos/gradiente-d40.jpg",
    description: "Excelente aparelho para quem deseja mergulhar no mundo do vinil com fidelidade. O Gradiente D-40 possui sistema Belt Drive, retorno automático e controle de pitch independente com lâmpada estroboscópica.",
    specs: ["Sistema: Belt Drive com correia sob medida", "Pitch: Regulagem fina de rotação", "Estroboscópio: Em perfeito funcionamento", "Garantia: 90 dias"],
    available: true,
    featured: false
  },
  {
    id: 11,
    name: "Toca-discos Gradiente B-25",
    brand: "Gradiente",
    category: "Toca-discos",
    price: 980.00,
    image: "assets/images/produtos/gradiente-b25.jpg",
    description: "Toca-discos versátil, confiável e com excelente custo-benefício. O Gradiente B-25 conta com braço reto de baixa massa, retorno automático suave e estrutura sólida. Ajustado milimetricamente para proteger seus discos de vinil.",
    specs: ["Mecanismo: Semiautomático", "Braço: Baixa massa com calibragem de tracking force", "Prato: Alumínio balanceado", "Garantia: 90 dias"],
    available: true,
    featured: false
  },
  {
    id: 12,
    name: "Vitrola Garrard S95 Edição Clássica",
    brand: "Garrard",
    category: "Vitrola",
    price: 1800.00,
    image: "assets/images/produtos/garrard-s95.jpg",
    description: "Raridade em estado de conservação superior. A Garrard S95 é uma vitrola clássica com chassi restaurado, mecanismo changer automático e gabinete de madeira polida artesanalmente por Emilio Colonic. Sonoridade quente e nostálgica.",
    specs: ["Mecanismo: Garrard Auto Changer britânico", "Acabamento: Madeira nobre encerada e polida", "Agulha: Nova de ponta dupla (LP / 78 RPM)", "Garantia: 90 dias"],
    available: true,
    featured: false
  },
  {
    id: 13,
    name: "Vitrola Garrard S95 Green Custom Art",
    brand: "Garrard",
    category: "Vitrola",
    price: 1950.00,
    image: "assets/images/produtos/garrard-s95-green.jpg",
    description: "Peça única e exclusiva feita na oficina Loucos por Vitrola! Vitrola Garrard S95 com acabamento personalizado Verde Vintage e gabinete artesanal restaurado. Combina o charme retrô dos anos 60 com uma estética visual marcante.",
    specs: ["Customização: Pintura automotiva especial Verde Vintage", "Marcenaria: Gabinete artesanal em madeira maciça", "Mecânica: Revisão completa com desmonte total", "Garantia: 90 dias"],
    available: true,
    featured: true
  },
  {
    id: 14,
    name: "Toca-discos ION Profile LP USB",
    brand: "ION",
    category: "Toca-discos",
    price: 750.00,
    image: "assets/images/produtos/ion-profile.jpg",
    description: "Toca-discos contemporâneo ION Profile LP com pré-amplificador embutido e saída USB para computador. Permite ouvir diretamente em qualquer caixa com entrada auxiliar ou converter seus discos de vinil favoritos para arquivos digitais.",
    specs: ["Conectividade: Saída RCA com pré-amplificador e USB", "Praticidade: Liga direto em receivers, caixas ativas ou PC", "Velocidades: 33 1/3 e 45 RPM", "Garantia: 90 dias"],
    available: true,
    featured: false
  },
  {
    id: 15,
    name: "Toca-discos Gradiente TD-34",
    brand: "Gradiente",
    category: "Toca-discos",
    price: 1150.00,
    image: "assets/images/produtos/gradiente-td34.jpg",
    description: "Modelo clássico vintage Gradiente TD-34 com operação mecânica simplificada e suspensão amortecida. Este exemplar foi vendido em nossa loja física e mantido no catálogo como referência do nosso acervo histórico.",
    specs: ["Status: Exemplar vendido / Consulte encomenda similar", "Sistema: Belt Drive mecânico", "Compatibilidade: 33 e 45 RPM", "Garantia: 90 dias"],
    available: false,
    featured: false
  }
];

/**
 * Formata um valor numérico para o padrão de moeda brasileira (R$ 1.300,00)
 */
function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);
}

/**
 * Retorna todos os produtos
 */
function getProducts() {
  return products;
}

/**
 * Busca produto por ID
 */
function getProductById(id) {
  const numericId = parseInt(id, 10);
  return products.find(p => p.id === numericId);
}

/**
 * Filtra produtos com base em parâmetros de busca, filtros e ordenação
 */
function filterProducts({ query = '', category = '', brand = '', availability = '', sortBy = 'recent' } = {}) {
  let list = [...products];

  // Busca textual (nome, categoria, marca, descrição)
  if (query && query.trim() !== '') {
    const q = query.toLowerCase().trim();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  // Filtro por Categoria
  if (category && category !== 'todas') {
    list = list.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  // Filtro por Marca
  if (brand && brand !== 'todas') {
    list = list.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
  }

  // Filtro por Disponibilidade
  if (availability === 'disponivel') {
    list = list.filter(p => p.available === true);
  } else if (availability === 'indisponivel') {
    list = list.filter(p => p.available === false);
  }

  // Ordenação
  if (sortBy === 'price-asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    list.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name-asc') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // Padrão: mais recentes / id desc
    list.sort((a, b) => b.id - a.id);
  }

  return list;
}

/**
 * Cria o HTML de um Card de Produto individual
 */
function createProductCardHTML(p) {
  const statusBadge = p.available
    ? `<span class="badge-available">Disponível</span>`
    : `<span class="badge-unavailable">Indisponível</span>`;

  const buyButton = p.available
    ? `<button onclick="window.cartManager.addToCart(${p.id});" class="btn-primary text-xs py-2 px-3 flex-1" aria-label="Adicionar ${p.name} ao carrinho">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
        Comprar
       </button>`
    : `<button disabled class="bg-stone-800 text-stone-500 text-xs py-2 px-3 rounded-full flex-1 cursor-not-allowed border border-stone-700" title="Produto Indisponível">
        Indisponível
       </button>`;

  return `
    <article class="vintage-card flex flex-col h-full group" data-product-id="${p.id}">
      <div class="relative overflow-hidden bg-black aspect-[4/3]">
        <img 
          src="${p.image}" 
          alt="${p.name} - Loucos por Vitrola" 
          loading="lazy" 
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onerror="this.src='assets/images/produtos/gradiente-b35.jpg';"
        />
        <div class="absolute top-3 left-3">
          ${statusBadge}
        </div>
        <div class="absolute top-3 right-3">
          <span class="badge-category">${p.category}</span>
        </div>
      </div>
      
      <div class="p-5 flex flex-col flex-1 justify-between bg-gradient-to-b from-[#180606] to-[#0d0303]">
        <div>
          <div class="flex items-center justify-between text-xs text-amber-200/70 mb-1">
            <span class="tracking-wider uppercase font-semibold">${p.brand}</span>
            <span class="flex items-center gap-1 text-amber-400">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              Garantia 90 dias
            </span>
          </div>
          <h3 class="font-serif text-lg font-bold text-amber-100 group-hover:text-amber-300 transition-colors line-clamp-1 mb-2">
            ${p.name}
          </h3>
          <p class="text-xs text-stone-300 line-clamp-2 mb-4 leading-relaxed">
            ${p.description}
          </p>
        </div>

        <div class="pt-3 border-t border-amber-900/30">
          <div class="mb-3">
            <span class="text-xs text-stone-400 block">Valor à vista ou parcelado</span>
            <span class="text-xl font-bold font-serif text-[#EED68A] tracking-tight">
              ${formatCurrency(p.price)}
            </span>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="openProductModal(${p.id})" class="btn-outline text-xs py-2 px-3 flex-1" aria-label="Ver detalhes de ${p.name}">
              Ver Detalhes
            </button>
            ${buyButton}
          </div>
        </div>
      </div>
    </article>
  `;
}

/**
 * Renderiza produtos em um container específico
 */
function renderProductsGrid(containerId, productList) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (productList.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-900/20 border border-amber-700/40 flex items-center justify-center text-amber-300">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>
        <h4 class="font-serif text-xl font-bold text-amber-100 mb-2">Nenhum equipamento encontrado</h4>
        <p class="text-sm text-stone-400 max-w-md mx-auto mb-6">Tente ajustar sua busca ou limpar os filtros para visualizar outros clássicos do nosso acervo.</p>
        <button onclick="resetFilters()" class="btn-secondary text-sm">Limpar Filtros</button>
      </div>
    `;
    return;
  }

  container.innerHTML = productList.map(p => createProductCardHTML(p)).join('');
}

/**
 * Renderiza produtos em destaque (para a Home)
 */
function renderFeaturedProducts(containerId, limit = 4) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const featured = products.filter(p => p.featured).slice(0, limit);
  container.innerHTML = featured.map(p => createProductCardHTML(p)).join('');
}

/**
 * Abre o Modal de Detalhes do Produto
 */
function openProductModal(productId) {
  const p = getProductById(productId);
  if (!p) return;

  const modalContainer = document.getElementById('product-modal-container');
  if (!modalContainer) return;

  const statusBadge = p.available
    ? `<span class="badge-available">Disponível para Envio Imediato</span>`
    : `<span class="badge-unavailable">Produto Indisponível no Momento</span>`;

  const specsList = p.specs && p.specs.length > 0
    ? p.specs.map(spec => `
        <li class="flex items-start gap-2 text-xs text-stone-300">
          <svg class="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          <span>${spec}</span>
        </li>
      `).join('')
    : '';

  const buyButton = p.available
    ? `
      <button onclick="window.cartManager.addToCart(${p.id}); closeProductModal();" class="btn-primary w-full py-3.5 text-sm sm:text-base">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
        Adicionar ao Carrinho (${formatCurrency(p.price)})
      </button>
      <a href="https://wa.me/5511996176660?text=${encodeURIComponent(`Olá Loucos por Vitrola! Tenho interesse no ${p.name} (${formatCurrency(p.price)}). Ele está disponível?`)}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp w-full py-3 text-sm">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.203c.044.072.044.419-.1.824z"/></svg>
        Tirar dúvidas no WhatsApp
      </a>
    `
    : `
      <div class="p-4 rounded-xl bg-amber-950/40 border border-amber-800/40 text-center">
        <p class="text-sm text-amber-200 mb-2 font-medium">Este equipamento foi comercializado recentemente.</p>
        <p class="text-xs text-stone-400 mb-3">Deseja um aparelho deste mesmo modelo ou equivalente? Converse diretamente com nossos especialistas.</p>
        <a href="https://wa.me/5511996176660?text=${encodeURIComponent(`Olá! Gostaria de saber se vocês têm ou conseguem restaurar um modelo similar ao ${p.name}.`)}" target="_blank" rel="noopener noreferrer" class="btn-secondary w-full py-2.5 text-xs">
          Consultar Lista de Espera / Encomenda
        </a>
      </div>
    `;

  modalContainer.innerHTML = `
    <div class="modal-backdrop active" id="modal-backdrop" onclick="handleModalBackdropClick(event)">
      <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-product-title">
        <!-- Botão Fechar -->
        <button onclick="closeProductModal()" class="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-amber-600/30 text-amber-200 hover:text-white flex items-center justify-center transition-all" aria-label="Fechar janela de detalhes">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <div class="grid grid-cols-1 md:grid-cols-2">
          <!-- Coluna Imagem -->
          <div class="relative bg-black flex items-center justify-center min-h-[300px] md:min-h-[460px] p-6 border-b md:border-b-0 md:border-r border-amber-900/30">
            <img 
              src="${p.image}" 
              alt="${p.name}" 
              class="max-h-[380px] w-full object-contain rounded-lg shadow-2xl"
              onerror="this.src='assets/images/produtos/gradiente-b35.jpg';"
            />
            <div class="absolute bottom-4 left-4">
              <span class="badge-category">${p.category}</span>
            </div>
          </div>

          <!-- Coluna Informações -->
          <div class="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div class="mb-3">
                ${statusBadge}
              </div>

              <div class="text-xs text-amber-300/80 uppercase tracking-widest font-semibold mb-1">
                ${p.brand} &bull; Santo André, SP
              </div>

              <h2 id="modal-product-title" class="font-serif text-2xl md:text-3xl font-bold text-amber-100 mb-3">
                ${p.name}
              </h2>

              <div class="mb-5 pb-4 border-b border-amber-900/40">
                <span class="text-xs text-stone-400 block mb-0.5">Preço à vista com garantia</span>
                <span class="text-2xl md:text-3xl font-serif font-bold text-[#EED68A]">
                  ${formatCurrency(p.price)}
                </span>
                <span class="text-xs text-emerald-400 block mt-1 flex items-center gap-1">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  Garantia integral de 90 dias pelos Loucos por Vitrola
                </span>
              </div>

              <div class="mb-6">
                <h4 class="text-xs uppercase tracking-wider text-amber-200/90 font-bold mb-2">Sobre este equipamento:</h4>
                <p class="text-sm text-stone-300 leading-relaxed">
                  ${p.description}
                </p>
              </div>

              ${specsList ? `
                <div class="mb-6 bg-black/40 p-4 rounded-xl border border-amber-900/30">
                  <h4 class="text-xs uppercase tracking-wider text-amber-300 font-bold mb-2">Ficha Técnica & Revisão:</h4>
                  <ul class="space-y-1.5">
                    ${specsList}
                  </ul>
                </div>
              ` : ''}

              <!-- Selo de Envio Especializado -->
              <div class="flex items-center gap-3 p-3 rounded-lg bg-amber-950/20 border border-amber-800/20 text-xs text-stone-300 mb-6">
                <svg class="w-6 h-6 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                <span>Embalagem personalizada e reforçada com proteção tripla para envio seguro a todo o Brasil via transportadora ou Correios.</span>
              </div>
            </div>

            <!-- Ações -->
            <div class="space-y-2.5 pt-2">
              ${buyButton}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.style.overflow = 'hidden';

  // Listener de tecla Escape
  document.addEventListener('keydown', handleModalKeyDown);
}

/**
 * Fecha o Modal de Detalhes
 */
function closeProductModal() {
  const modalContainer = document.getElementById('product-modal-container');
  if (modalContainer) {
    modalContainer.innerHTML = '';
  }
  document.body.style.overflow = '';
  document.removeEventListener('keydown', handleModalKeyDown);
}

/**
 * Fecha ao clicar no backdrop escuro
 */
function handleModalBackdropClick(event) {
  if (event.target.id === 'modal-backdrop') {
    closeProductModal();
  }
}

/**
 * Suporte à tecla Escape para fechar modal
 */
function handleModalKeyDown(event) {
  if (event.key === 'Escape' || event.key === 'Esc') {
    closeProductModal();
  }
}

// Exportações globais para uso nas páginas
window.products = products;
window.getProducts = getProducts;
window.getProductById = getProductById;
window.filterProducts = filterProducts;
window.renderProductsGrid = renderProductsGrid;
window.renderFeaturedProducts = renderFeaturedProducts;
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.handleModalBackdropClick = handleModalBackdropClick;
window.formatCurrency = formatCurrency;
