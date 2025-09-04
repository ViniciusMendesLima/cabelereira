const images = import.meta.glob(
  "../assets/imagesSlider/*.(webp|jpg|jpeg|png|avif)",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

const servicesMeta = [
  {
    file: "img_1",
    alt: "img_1",
  },
      {
    file: "img_2",
    alt: "img_2",
  },
      {
    file: "img_3",
    alt: "img_3",
  },
    {
    file: "img_4",
    alt: "img_4",
  },
    {
    file: "img_5",
    alt: "img_5",
  },
    {
    file: "img_6",
    alt: "img_6",
  },
    {
    file: "img_7",
    alt: "img_7",
  },
  
];

export const ImagesData = servicesMeta.map((service) => {
  const imagePath = Object.keys(images).find((path) =>
    path.includes(service.file)
  
  );

  return {
    ...service,
    imageUrl: imagePath ? images[imagePath] : null,
  };
});
