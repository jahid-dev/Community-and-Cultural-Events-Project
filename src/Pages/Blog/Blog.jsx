const events = [
    {
      "id": 1,
      "name": "Summer Festival Extravaganza",
      "image": "https://i.ibb.co/gmZh2b1/premium-photo-1665203511885-40139d7543a8-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A.jpg",
      "price": "$30 - $50",
      "description": "Join us for a sizzling summer festival filled with music, food, and fun for all ages.",
      "details": "Experience the magic of summer with live music performances, mouthwatering street food, and a lively carnival atmosphere. Don't miss out on this annual celebration of community and culture."
    },
    {
      "id": 2,
      "name": "Cultural Fusion Parade",
      "image": "https://i.ibb.co/MnwhcGk/pawns-world-globe-with-blue-background-23-2149407876.jpg",
      "price": "Free Admission",
      "description": "Witness a mesmerizing parade showcasing the rich tapestry of cultures from around the world.",
      "details": "Be part of the Cultural Fusion Parade, where diverse communities come together to celebrate their heritage. Enjoy colorful floats, traditional costumes, and vibrant music that will transport you to different corners of the globe."
    },
    {
      "id": 3,
      "name": "Spring Garden Party",
      "image": "https://i.ibb.co/JHKdXhw/premium-photo-1661299216916-60a554a9942a-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A.jpg",
      "price": "$35 - $55",
      "description": "Welcome spring with our delightful garden party in full bloom.",
      "details": "Experience the beauty of spring at our annual Spring Garden Party. Stroll through lush gardens, enjoy a tea tasting, and savor delectable pastries. It's a picturesque celebration of nature's renewal."
    },
    {
      "id": 4,
      "name": "Music in the Park",
      "image": "https://i.ibb.co/MPhCBnG/photo-1532959640694-679ee8a20aa3-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg",
      "price": "Free Admission",
      "description": "Relax and unwind with live music in a scenic park setting.",
      "details": "Join us for Music in the Park, where you can enjoy live performances by local musicians in a tranquil outdoor setting. Bring a picnic and your favorite blanket for a perfect evening under the stars."
    },
    {
      "id": 5,
      "name": "Dance Around the World",
      "image": "https://i.ibb.co/xX4MCwH/pexels-pixabay-209948.jpg",
      "price": "$25 - $35",
      "description": "Experience the beauty of global dance traditions at our event.",
      "details": "Join us for a captivating journey of dance from around the world. Witness breathtaking performances showcasing diverse cultural dance forms. You can even participate in dance workshops and learn the steps yourself!"
    }
  ];



const BlogComponent = () => {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Upcoming Events</h1>
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden mt-6">
            <img src={event.image} alt={event.name} className="w-full h-48 object-cover object-center" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800">{event.name}</h2>
              <p className="text-gray-600 mt-2">Price: {event.price}</p>
              <p className="text-gray-700 mt-4">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default BlogComponent;