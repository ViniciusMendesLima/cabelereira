const images = import.meta.glob('../assets/services*.(webp|jpg|jpeg|png|avif)', {
  eager: true,
  import: 'default',
});


const servicesMeta = [
  {
    file: 'standard',
    name: 'Microagulhamento',
    description: 'Tratamento estético avançado que estimula a produção de colágeno e melhora a textura da pele e do couro cabeludo. Ideal para rejuvenescimento, redução de marcas e fortalecimento dos fios.',
  },
   {
    file: 'standard',
    name: 'Corte Bordado',
    description: 'Técnica moderna que elimina pontas duplas e danificadas sem reduzir o comprimento do cabelo, garantindo fios mais saudáveis, macios e com brilho natural.',
  },
    {
    file: 'standard',
    name: 'Ozonioterapia',
    description: 'Procedimento que utiliza o ozônio para revitalizar o couro cabeludo, controlar a oleosidade, combater fungos e estimular o crescimento capilar de forma saudável.',
  },
    {
    file: 'standard',
    name: 'Laser Lizze',
    description: 'Tratamento capilar com tecnologia a laser que alinha os fios, reduz o frizz e promove um liso duradouro, preservando a saúde e o movimento natural do cabelo.',
  },
    {
    file: 'standard',
    name: 'Glow Up',
    description: 'Transformação completa que realça sua beleza de forma personalizada, incluindo cuidados capilares e estéticos para renovar sua autoestima e iluminar seu visual.',
  },
    {
    file: 'standard',
    name: 'Mega Hair',
    description: 'TAlongamento capilar com técnicas modernas e seguras, oferecendo fios mais longos, volumosos e naturais para um resultado sofisticado e impecável.',
  },
    {
    file: 'standard',
    name: 'Despigmentação',
    description: 'Procedimento estético que remove pigmentos indesejados de sobrancelhas, lábios ou pele, promovendo uniformidade e preparando a região para novos tratamentos.',
  },
];

export const Services = servicesMeta.map((service) => {
  const imagePath = Object.keys(images).find((path) =>
    path.includes(`${service.file}`)
  );
  const imageUrl = imagePath ? images[imagePath] : null;

  return {
    ...service,
    imageUrl: imageUrl || null,
  }

  
})
