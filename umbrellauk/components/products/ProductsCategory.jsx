import React from 'react';
import img from '../../src/assets/Shrink-Sleeves.webp';

function ProductsCategory() {
  const productCat = [
    { img, title: "Shrink Sleeves", url: 'https://umbrellapackaging.co.uk/shrink-sleeves/' },
    { img, title: "Shrink Sleeves", url: 'https://umbrellapackaging.co.uk/shrink-sleeves/' },
    { img, title: "Shrink Sleeves", url: 'https://umbrellapackaging.co.uk/shrink-sleeves/' },
    { img, title: "Shrink Sleeves", url: 'https://umbrellapackaging.co.uk/shrink-sleeves/' },
    { img, title: "Shrink Sleeves", url: 'https://umbrellapackaging.co.uk/shrink-sleeves/' },
    { img, title: "Shrink Sleeves", url: 'https://umbrellapackaging.co.uk/shrink-sleeves/' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
      {productCat.map((card, index) => (
        <div
          key={index}
          className="border border-[#D9D9D9E0] rounded-lg p-4 hover:shadow-md transition"
        >
          <a href={card.url} target="_blank" rel="noopener noreferrer">
            <img src={card.img} alt={card.title} className="rounded-lg mb-2" />
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-sm text-[#ff931e] font-semibold">Read More</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default ProductsCategory;
