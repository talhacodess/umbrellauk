import React from 'react';
import img from '../../src/assets/Shrink-Sleeves.webp';
import { Link } from 'react-router-dom';

function ProductsCategory() {
  const productCat = [
    { img, title: "Shrink Sleeves", url: '/single-product' },
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
           <Link to={card.url} >
            <img src={card.img} alt={card.title} className="rounded-lg mb-2" />
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-sm text-[#ff931e] font-semibold">Read More</p>
        </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductsCategory;
