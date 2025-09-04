# Site Cabelereira - Site Institucional

Site institucional para apresentação dos serviços de estética e beleza oferecidos por Cabelereira. Desenvolvido em **React** + **TypeScript** com Vite, o projeto destaca os principais tratamentos, informações de contato e um layout moderno e responsivo.

## 🚀 Tecnologias Utilizadas

- **React** (SPA)
- **TypeScript**
- **Framer Motion** (motion.div para animações e drag)
- **Vite** (build e dev server)
- **CSS** modularizado
- **ESLint** (padronização de código)
- **Imagem padrão fallback** (standard_image.webp e standard.webp caso a imagem não seja fornecida)

## 📁 Estrutura do Projeto

```
src/
├── App.tsx
├── main.tsx
├── assets/
│   └── services/         # Imagens dos serviços
         └─ standard.webp
|   └─ imagesSlider/
         └─ standard_image.webp
├── components/           # Componentes reutilizáveis (Navbar, ServiceCard, etc)
├── data/
│   └── services.ts      # Dados dos serviços
|   └── imagesSlider.ts
├── pages/                # Páginas principais (Home, About, Services, Contact)
└── styles/               # CSS modularizado
```

## 🧩 Funcionalidades

- Listagem dos principais serviços de estética e beleza
- Página de apresentação e contato
- Layout responsivo e navegação intuitiva
- Organização por componentes reutilizáveis
- Tipagem forte com TypeScript
- Importação dinâmica de imagens dos serviços

⚙️ Props

O componente recebe as seguintes propriedades:
```bash
interface ServiceType {
  name: string;
  description: string;
  imageUrl?: string | null;
}

type ServiceCardProps = {
  services: ServiceType[];
};
```
```bash
interface ServiceType {
  imageUrl?: string | null; // URL da imagem
  alt: string;              // Texto alternativo da imagem
}

type ImageCardProps = {
  images_Slider: ServiceType[]; // Array de imagens do carrossel
}
```

## ⚙️ Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone <https://github.com/ViniciusMendesLima/cabelereira.git>
   cd cabelereira
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse:**  
   [http://localhost:5173](http://localhost:5173)

---

Projeto desenvolvido para fins de portfólio e demonstração de habilidades em React, TypeScript e frontend moderno.