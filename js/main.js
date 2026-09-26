/**
 * LOUCOS POR VITROLA — MAIN JS & CART MANAGER
 * Gerenciador global de carrinho via localStorage, integração WhatsApp,
 * drawer lateral, navegação responsiva e microinterações.
 */

const CART_STORAGE_KEY = 'loucosPorVitrolaCart';
const WHATSAPP_PHONE = '5511996176660';

class CartManager {
  constructor() {
    this.cart = this.loadCart();
    this.init();
  }

  loadCart() {
    try {
      const data = localStorage.getItem(CART_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Erro ao ler carrinho do localStorage', e);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cart));
    } catch (e) {
      console.error('Erro ao salvar carrinho no localStorage', e);
    }
    this.updateBadges();
    this.renderDrawer();
  }

  init() {
    this.updateBadges();
    this.setupListeners();
  }

  setupListeners() {
    // Tecla Escape para fechar drawer do carrinho
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        this.closeDrawer();
      }
    });
  }

  addToCart(productId, quantity = 1) {
    const product = window.getProductById ? window.getProductById(productId) : null;
    if (!product) {
      console.error('Produto não encontrado:', productId);
      return;
    }

    if (!product.available) {
      this.showToast('Este equipamento não está disponível no momento.');
      return;
    }

    const existingIndex = this.cart.findIndex(item => item.id === product.id);
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        quantity: quantity
      });
    }

    this.saveCart();
    this.showToast(`Adicionado ao carrinho: ${product.name}`);
    this.openDrawer();
  }

  updateQuantity(productId, delta) {
    const itemIndex = this.cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
      const newQty = this.cart[itemIndex].quantity + delta;
      if (newQty <= 0) {
        this.removeFromCart(productId);
      } else {
        this.cart[itemIndex].quantity = newQty;
        this.saveCart();
      }
    }
  }

  removeFromCart(productId) {
    const item = this.cart.find(i => i.id === productId);
    this.cart = this.cart.filter(i => i.id !== productId);
    this.saveCart();
    if (item) {
      this.showToast(`Removido do carrinho: ${item.name}`);
    }
  }

  clearCart() {
    if (this.cart.length === 0) return;
    if (confirm('Tem certeza que deseja esvaziar seu carrinho de compras?')) {
      this.cart = [];
      this.saveCart();
      this.showToast('Seu carrinho foi esvaziado.');
    }
  }

  getTotals() {
    const count = this.cart.reduce((total, item) => total + item.quantity, 0);
    const subtotal = this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    return { count, subtotal, total: subtotal };
  }

  updateBadges() {
    const { count } = this.getTotals();
    const badges = document.querySelectorAll('.cart-count-badge');
    badges.forEach(b => {
      b.textContent = count;
      if (count > 0) {
        b.classList.remove('hidden');
      } else {
        b.classList.add('hidden');
      }
    });
  }

  openDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('cart-drawer-backdrop');
    if (drawer && backdrop) {
      this.renderDrawer();
      drawer.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  closeDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('cart-drawer-backdrop');
    if (drawer && backdrop) {
      drawer.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  renderDrawer() {
    const container = document.getElementById('cart-drawer-items');
    const footer = document.getElementById('cart-drawer-footer');
    if (!container) return;

    const { count, total } = this.getTotals();

    if (this.cart.length === 0) {
      container.innerHTML = `
        <div class="h-full flex flex-col items-center justify-center text-center p-6 my-auto">
          <div class="w-20 h-20 rounded-full bg-amber-950/40 border border-amber-800/30 flex items-center justify-center text-[#EED68A] mb-4">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          </div>
          <h3 class="font-serif text-xl font-bold text-amber-100 mb-2">Seu carrinho está vazio.</h3>
          <p class="text-sm text-stone-400 mb-6 max-w-xs leading-relaxed">Explore nosso catálogo e encontre sua próxima vitrola restaurada com garantia de 90 dias.</p>
          <a href="produtos.html" onclick="window.cartManager.closeDrawer()" class="btn-primary text-sm">
            Ver Catálogo de Produtos
          </a>
        </div>
      `;
      if (footer) footer.innerHTML = '';
      return;
    }

    container.innerHTML = this.cart.map(item => `
      <div class="flex items-center gap-3 p-3.5 bg-black/40 border border-amber-900/30 rounded-xl transition-all hover:border-amber-700/50">
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          class="w-16 h-16 object-cover rounded-lg bg-black border border-amber-900/40 shrink-0"
          onerror="this.src='assets/images/produtos/gradiente-b35.jpg';"
        />
        <div class="flex-1 min-w-0">
          <h4 class="font-serif text-sm font-bold text-amber-100 truncate">${item.name}</h4>
          <span class="text-xs text-amber-300 font-bold block mb-2">${formatCurrency(item.price)}</span>
          
          <div class="flex items-center gap-2">
            <div class="flex items-center border border-amber-800/40 rounded-lg overflow-hidden bg-stone-900/60">
              <button 
                onclick="window.cartManager.updateQuantity(${item.id}, -1)" 
                class="w-7 h-7 flex items-center justify-center text-amber-200 hover:bg-amber-900/50 transition-colors"
                aria-label="Diminuir quantidade de ${item.name}"
              >
                &minus;
              </button>
              <span class="w-8 text-center text-xs font-bold text-white">${item.quantity}</span>
              <button 
                onclick="window.cartManager.updateQuantity(${item.id}, 1)" 
                class="w-7 h-7 flex items-center justify-center text-amber-200 hover:bg-amber-900/50 transition-colors"
                aria-label="Aumentar quantidade de ${item.name}"
              >
                &plus;
              </button>
            </div>
            
            <button 
              onclick="window.cartManager.removeFromCart(${item.id})" 
              class="text-xs text-stone-500 hover:text-red-400 p-1.5 transition-colors ml-auto"
              title="Remover produto"
              aria-label="Remover ${item.name}"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    if (footer) {
      footer.innerHTML = `
        <div class="pt-4 border-t border-amber-900/40 space-y-3">
          <div class="flex justify-between items-center text-sm text-stone-300">
            <span>Itens selecionados (${count}):</span>
            <span class="font-bold text-amber-200">${formatCurrency(total)}</span>
          </div>

          <div class="flex justify-between items-center text-base">
            <span class="font-bold font-serif text-white">Total do Pedido:</span>
            <span class="font-serif font-bold text-xl text-[#EED68A]">${formatCurrency(total)}</span>
          </div>

          <p class="text-xs text-stone-400 text-center">Atendimento humano via WhatsApp &bull; Garantia de 90 dias &bull; Envio seguro para todo o Brasil</p>

          <button 
            onclick="window.cartManager.sendToWhatsApp()" 
            class="btn-whatsapp w-full py-3.5 text-sm font-bold shadow-lg"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.203c.044.072.044.419-.1.824z"/></svg>
            Enviar Pedido pelo WhatsApp
          </button>

          <button 
            onclick="window.cartManager.clearCart()" 
            class="text-xs text-stone-500 hover:text-stone-300 w-full text-center block pt-1 transition-colors"
          >
            Esvaziar carrinho
          </button>
        </div>
      `;
    }
  }

  sendToWhatsApp() {
    if (this.cart.length === 0) {
      alert('Seu carrinho está vazio.');
      return;
    }

    const { total } = this.getTotals();
    
    // Montagem exata da mensagem conforme especificação (Seção 26 do SPEC.md)
    let message = "Olá! Tenho interesse nos seguintes produtos:\n\n";

    this.cart.forEach(item => {
      const itemSubtotal = formatCurrency(item.price * item.quantity);
      message += `${item.quantity}x ${item.name} — ${itemSubtotal}\n`;
    });

    message += `\nTotal: ${formatCurrency(total)}\n\n`;
    message += "Gostaria de mais informações sobre disponibilidade e pagamento.";

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
    
    window.open(url, '_blank');
  }

  showToast(text) {
    let toast = document.getElementById('toast-notification');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-notification';
      toast.className = 'toast-notification';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <svg class="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
      <span class="text-xs sm:text-sm font-medium text-amber-100">${text}</span>
    `;

    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 3200);
  }
}

// Inicia CartManager global
window.cartManager = new CartManager();

/**
 * Controle do Menu Hambúrguer Mobile
 */
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn = document.getElementById('mobile-menu-btn');
  if (!menu) return;

  const isHidden = menu.classList.contains('hidden');
  if (isHidden) {
    menu.classList.remove('hidden');
    if (btn) btn.setAttribute('aria-expanded', 'true');
  } else {
    menu.classList.add('hidden');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }
}

/**
 * Cria a estrutura base do Drawer do Carrinho em qualquer página
 */
function injectCartDrawerHTML() {
  if (document.getElementById('cart-drawer')) return;

  const drawerHTML = `
    <!-- Backdrop do Carrinho -->
    <div id="cart-drawer-backdrop" class="cart-drawer-backdrop" onclick="window.cartManager.closeDrawer()"></div>

    <!-- Drawer Lateral do Carrinho -->
    <aside id="cart-drawer" class="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
      <!-- Header do Drawer -->
      <div class="p-5 border-b border-amber-900/40 flex items-center justify-between bg-gradient-to-r from-[#200707] to-[#120505]">
        <div class="flex items-center gap-2">
          <svg class="w-6 h-6 text-[#EED68A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          <h2 id="cart-title" class="font-serif text-lg font-bold text-amber-100">Seu Carrinho</h2>
        </div>
        <button 
          onclick="window.cartManager.closeDrawer()" 
          class="w-9 h-9 rounded-full bg-black/50 hover:bg-black border border-amber-700/40 text-amber-200 flex items-center justify-center transition-colors"
          aria-label="Fechar carrinho"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <!-- Lista de Itens com Scroll -->
      <div id="cart-drawer-items" class="flex-1 overflow-y-auto p-5 space-y-3">
        <!-- Renderizado dinamicamente -->
      </div>

      <!-- Rodapé do Drawer com Totais e Botão WhatsApp -->
      <div id="cart-drawer-footer" class="p-5 bg-gradient-to-t from-[#100303] to-[#160606] border-t border-amber-900/40">
        <!-- Renderizado dinamicamente -->
      </div>
    </aside>

    <!-- Container do Modal de Produto -->
    <div id="product-modal-container"></div>
  `;

  document.body.insertAdjacentHTML('beforeend', drawerHTML);
  window.cartManager.renderDrawer();
  window.cartManager.updateBadges();
}

// Injeção automática no DOM
document.addEventListener('DOMContentLoaded', () => {
  injectCartDrawerHTML();

  // Scroll Header Effect
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('shadow-xl', 'bg-[#180505]/95', 'backdrop-blur-md');
      } else {
        header.classList.remove('shadow-xl');
      }
    });
  }
});
