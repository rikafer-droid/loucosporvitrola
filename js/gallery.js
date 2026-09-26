/**
 * LOUCOS POR VITROLA — GALERIA & LIGHTBOX INTERATIVO
 * Grid de acervo com fotos reais de restaurações, manutenções e aparelhos clássicos.
 */

const galleryItems = [
  {
    id: 1,
    title: "Philips 312 Electronic — Restauração Completa",
    category: "restauracao",
    categoryLabel: "Restauração",
    image: "assets/images/galeria/restauracao-philips-312.jpg",
    description: "Restauração primorosa da clássica Philips 312 com botões capacitivos de toque iluminados verde. Chassi refeito, marcenaria envernizada, suspensão flutuante calibrada e cápsula original ajustada.",
    details: "Oficina Loucos por Vitrola &bull; Santo André, SP"
  },
  {
    id: 2,
    title: "Garrard S125 — Manutenção Mecânica & Lubrificação",
    category: "manutencao",
    categoryLabel: "Manutenção",
    image: "assets/images/galeria/manutencao-garrard-s125.jpg",
    description: "Revisão detalhada do mecanismo automático changer inglês da Garrard S125. Remoção de graxa ressecada, troca da roda de atrito (idler wheel), calibragem da força de rastreio e substituição de agulha.",
    details: "Bancada Mecânica &bull; Emilio Colonic"
  },
  {
    id: 3,
    title: "Gradiente DD-200Q Direct Drive Quartz",
    category: "acervo",
    categoryLabel: "Acervo Clássico",
    image: "assets/images/galeria/gradiente-dd-200q.jpg",
    description: "O expoente máximo da Gradiente. Toca-discos Quartz Synthesizer com estroboscópio e painel eletrônico restaurado em estado de loja. Tampa de acrílico cristalina polida à mão.",
    details: "Restauração Eletrônica &bull; André Denani"
  },
  {
    id: 4,
    title: "Garrard S95 Custom Green Vintage",
    category: "restauracao",
    categoryLabel: "Restauração",
    image: "assets/images/galeria/garrard-s95-green.jpg",
    description: "Projeto de customização exclusivo dos Loucos por Vitrola. Chassi com pintura automotiva verde vintage perolizada e base em madeira maciça talhada sob medida.",
    details: "Customização Especial &bull; Peça de Colecionador"
  },
  {
    id: 5,
    title: "Technics SL-Q03 Direct Drive Automático",
    category: "acervo",
    categoryLabel: "Acervo Clássico",
    image: "assets/images/galeria/technics-sl-q03.jpg",
    description: "Exemplar japonês da Technics com chassi TNRC pesado e estabilidade impecável de rotação a quartzo. Revisão completa de pitch, comandos e mecanismo de retorno.",
    details: "Revisado com Garantia &bull; 90 Dias"
  },
  {
    id: 6,
    title: "Gradiente B35 Belt Drive",
    category: "manutencao",
    categoryLabel: "Manutenção",
    image: "assets/images/galeria/gradiente-b35.jpg",
    description: "Aparelho icônico com correia nova sob medida, regulagem minuciosa de pitch nos dois potenciômetros internos e alinhamento milimétrico do cabeçote.",
    details: "Revisão Geral e Polimento &bull; Santo André"
  },
  {
    id: 7,
    title: "Vitrola Garrard 6300 Changer Britânica",
    category: "acervo",
    categoryLabel: "Acervo Clássico",
    image: "assets/images/galeria/garrard-6300.jpg",
    description: "Mecanismo changer britânico clássico para reprodução contínua de bolachões de vinil em 33, 45 e 78 RPM. Gabinete de madeira de lei recuperado.",
    details: "Acervo Histórico &bull; Loucos por Vitrola"
  },
  {
    id: 8,
    title: "Technics SL-BD20 Semiautomático",
    category: "acervo",
    categoryLabel: "Acervo Clássico",
    image: "assets/images/galeria/technics-sl-bd20.jpg",
    description: "Clássico toca-discos da Technics com cápsula T4P original alinhada e excelente fidelidade sonora. Testado rigorosamente antes de entrega ao colecionador.",
    details: "Revisão e Regulagem &bull; Pronto para uso"
  },
  {
    id: 9,
    title: "Kenwood KD-1 Base de Madeira Acústica",
    category: "restauracao",
    categoryLabel: "Restauração",
    image: "assets/images/galeria/kenwood-bd1.jpg",
    description: "Restauração estética do gabinete acústico de madeira do Kenwood KD-1. Braço em S cromado polido e balanceamento de contrapeso efetuado.",
    details: "Restauração de Marcenaria &bull; Emilio Colonic"
  },
  {
    id: 10,
    title: "Akai AP-A2 Auto-Return",
    category: "manutencao",
    categoryLabel: "Manutenção",
    image: "assets/images/galeria/akai-ap-a2.jpg",
    description: "Desmontagem completa para higienização ultra-sônica de peças mecânicas, lubrificação do eixo central e reinstalação com agulha elíptica.",
    details: "Manutenção Preventiva &bull; Testes de Áudio"
  },
  {
    id: 11,
    title: "Sony PS-X23 Direct Drive",
    category: "acervo",
    categoryLabel: "Acervo Clássico",
    image: "assets/images/galeria/sony-psx23.jpg",
    description: "Toca-discos Direct Drive Sony com resposta instantânea e sistema anti-skating de alta precisão. Acabamento prateado vintage impecável.",
    details: "Acervo Especial &bull; Alta Fidelidade"
  },
  {
    id: 12,
    title: "Gradiente DD-100Q Direct Drive",
    category: "restauracao",
    categoryLabel: "Restauração",
    image: "assets/images/galeria/gradiente-dd-100q.jpg",
    description: "Calibração do circuito eletrônico Quartz-Lock do DD-100Q com substituição de capacitores eletrolíticos esgotados e regulagem de fonte.",
    details: "Bancada Eletrônica &bull; André Denani"
  }
];

let currentLightboxIndex = 0;
let currentFilteredList = [...galleryItems];

/**
 * Renderiza a Galeria na página
 */
function renderGallery(containerId = 'gallery-grid', category = 'todas') {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (category === 'todas') {
    currentFilteredList = [...galleryItems];
  } else {
    currentFilteredList = galleryItems.filter(item => item.category === category);
  }

  container.innerHTML = currentFilteredList.map((item, index) => `
    <div class="vintage-card group cursor-pointer overflow-hidden flex flex-col" onclick="openLightbox(${index})" tabindex="0" role="button" aria-label="Ampliar ${item.title}">
      <div class="relative aspect-[4/3] bg-black overflow-hidden">
        <img 
          src="${item.image}" 
          alt="${item.title}" 
          loading="lazy" 
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onerror="this.src='assets/images/produtos/gradiente-b35.jpg';"
        />
        <!-- Overlay com ícone de lupa -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
          <div class="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <span class="badge-category mb-2">${item.categoryLabel}</span>
            <h4 class="font-serif text-base font-bold text-amber-100">${item.title}</h4>
            <span class="text-xs text-amber-300 flex items-center gap-1 mt-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
              Clique para ampliar e ver detalhes
            </span>
          </div>
        </div>
        <div class="absolute top-3 left-3 group-hover:opacity-0 transition-opacity">
          <span class="badge-category">${item.categoryLabel}</span>
        </div>
      </div>
      <div class="p-4 bg-gradient-to-b from-[#180606] to-[#0e0303] border-t border-amber-900/30 flex-1 flex flex-col justify-between">
        <h3 class="font-serif text-sm font-bold text-amber-100 line-clamp-1 mb-1 group-hover:text-amber-300 transition-colors">
          ${item.title}
        </h3>
        <p class="text-xs text-stone-400 line-clamp-2 leading-relaxed">
          ${item.description}
        </p>
      </div>
    </div>
  `).join('');
}

/**
 * Filtro interativo da galeria
 */
function filterGallery(category, buttonElement) {
  // Atualiza classe ativa dos botões
  const buttons = document.querySelectorAll('.gallery-filter-btn');
  buttons.forEach(btn => {
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-outline');
  });

  if (buttonElement) {
    buttonElement.classList.remove('btn-outline');
    buttonElement.classList.add('btn-primary');
  }

  renderGallery('gallery-grid', category);
}

/**
 * Abre o Lightbox na imagem clicada
 */
function openLightbox(index) {
  currentLightboxIndex = index;
  const item = currentFilteredList[index];
  if (!item) return;

  let modal = document.getElementById('gallery-lightbox');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'gallery-lightbox';
    modal.className = 'modal-backdrop';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Visualizador de Imagens');
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-[#140505] border border-amber-700/40 rounded-2xl overflow-hidden shadow-2xl">
      <!-- Botão Fechar -->
      <button 
        onclick="closeLightbox()" 
        class="absolute top-4 right-4 z-30 w-11 h-11 rounded-full bg-black/70 hover:bg-black border border-amber-600/40 text-amber-200 hover:text-white flex items-center justify-center transition-all"
        aria-label="Fechar galeria"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>

      <!-- Botão Anterior -->
      <button 
        onclick="navigateLightbox(-1)" 
        class="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/70 hover:bg-black border border-amber-600/40 text-amber-200 hover:text-white flex items-center justify-center transition-all"
        aria-label="Imagem anterior"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      </button>

      <!-- Botão Próximo -->
      <button 
        onclick="navigateLightbox(1)" 
        class="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/70 hover:bg-black border border-amber-600/40 text-amber-200 hover:text-white flex items-center justify-center transition-all"
        aria-label="Próxima imagem"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </button>

      <!-- Imagem Ampliada -->
      <div class="relative bg-black flex items-center justify-center flex-1 min-h-[350px] md:min-h-[500px] max-h-[68vh] p-2 md:p-6 overflow-hidden">
        <img 
          id="lightbox-img" 
          src="${item.image}" 
          alt="${item.title}" 
          class="max-h-[64vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
          onerror="this.src='assets/images/produtos/gradiente-b35.jpg';"
        />
      </div>

      <!-- Barra de Informações / Legenda -->
      <div class="p-5 md:p-6 bg-gradient-to-r from-[#1c0707] via-[#140505] to-[#1c0707] border-t border-amber-900/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-3 mb-1">
            <span class="badge-category">${item.categoryLabel}</span>
            <span class="text-xs text-amber-300/80">${item.details}</span>
            <span class="text-xs text-stone-500 font-mono">(${currentLightboxIndex + 1} de ${currentFilteredList.length})</span>
          </div>
          <h3 id="lightbox-title" class="font-serif text-lg md:text-xl font-bold text-amber-100">
            ${item.title}
          </h3>
          <p id="lightbox-desc" class="text-xs md:text-sm text-stone-300 max-w-3xl mt-1 leading-relaxed">
            ${item.description}
          </p>
        </div>

        <a 
          href="https://wa.me/5511996176660?text=${encodeURIComponent(`Olá! Vi na galeria a restauração do equipamento "${item.title}" e gostaria de um serviço semelhante.`)}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn-whatsapp text-xs shrink-0 self-start md:self-center"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.203c.044.072.044.419-.1.824z"/></svg>
          Solicitar Serviço Similar
        </a>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Eventos de teclado e backdrop
  modal.onclick = (e) => {
    if (e.target.id === 'gallery-lightbox') {
      closeLightbox();
    }
  };
  document.addEventListener('keydown', handleLightboxKeyDown);
}

/**
 * Navega no Lightbox (-1 = anterior, +1 = próxima)
 */
function navigateLightbox(delta) {
  if (currentFilteredList.length === 0) return;
  
  currentLightboxIndex = (currentLightboxIndex + delta + currentFilteredList.length) % currentFilteredList.length;
  const item = currentFilteredList[currentLightboxIndex];
  if (!item) return;

  const img = document.getElementById('lightbox-img');
  const title = document.getElementById('lightbox-title');
  const desc = document.getElementById('lightbox-desc');

  if (img) {
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = item.image;
      img.alt = item.title;
      img.style.opacity = '1';
    }, 150);
  }
  if (title) title.textContent = item.title;
  if (desc) desc.textContent = item.description;
}

/**
 * Fecha o Lightbox
 */
function closeLightbox() {
  const modal = document.getElementById('gallery-lightbox');
  if (modal) {
    modal.classList.remove('active');
  }
  document.body.style.overflow = '';
  document.removeEventListener('keydown', handleLightboxKeyDown);
}

/**
 * Controle por teclado no Lightbox (Escape, Setas esquerda/direita)
 */
function handleLightboxKeyDown(e) {
  if (e.key === 'Escape' || e.key === 'Esc') {
    closeLightbox();
  } else if (e.key === 'ArrowLeft') {
    navigateLightbox(-1);
  } else if (e.key === 'ArrowRight') {
    navigateLightbox(1);
  }
}

// Inicialização e exportação
window.galleryItems = galleryItems;
window.renderGallery = renderGallery;
window.filterGallery = filterGallery;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.navigateLightbox = navigateLightbox;
