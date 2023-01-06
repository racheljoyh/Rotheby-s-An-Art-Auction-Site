puts "🌱 Seeding spices..."

puts "creating buyers"

b1 = Buyer.create(first_name: "Rachel", last_name: "Humes")
b2 = Buyer.create(first_name: "Anna", last_name: "Harder")
b3 = Buyer.create(first_name: "Johnny", last_name: "Turco")

puts "creating artworks"

a1 = Artwork.create(title: "Vase of Flowers (Pink Background)", artist: "Odilon Redon", year_created: "1959" , category: "European Paintings", estimated_value: 200000 , sold: false, sold_to: nil, start_price: 10000 , max_price: 800000 , image_url: "https://images.metmuseum.org/CRDImages/ep/original/DT2159.jpg")
a2 = Artwork.create(title: "Bridge Over a Pond of Water Lilies" , artist: "Claude Monet" , year_created: "1899", category: "European Paintings", estimated_value: 10000000, sold: false, sold_to: nil, start_price: 800000, max_price: 50000000, image_url: "https://www.metmuseum.org/toah/images/h4/h4_29.100.113.jpg")
a3 = Artwork.create(title: "Snow Flowers", artist: "Henri Matisse", year_created: "1951" , category: "European Paintings", estimated_value: 1500000, sold: false, sold_to: nil, start_price: 50000, max_price: 550000, image_url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/490000/1005219/restricted")
a4 = Artwork.create(title: "Flower Garden and Bungalow, Bermuda", artist: "Winslow Homer", year_created: "1899" , category: "American", estimated_value: 300000, sold: false, sold_to: nil, start_price: 150000, max_price: 900000 , image_url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/11121/2030417/main-image")
a5 = Artwork.create(title: "Irises", artist: "Vincent van Gogh", year_created: "1890" , category: "European Painting", estimated_value: 25000000 , sold: false, sold_to: nil, start_price: 500000, max_price:500000000 , image_url: "https://images.metmuseum.org/CRDImages/ep/original/DP346474.jpg")
a6 = Artwork.create(title: "House behind Trees", artist: "Georges Braque", year_created: "1907" , category: "European Paintings", estimated_value: 300000 , sold: false, sold_to: nil, start_price: 100000 , max_price: 700000 , image_url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/459142/preview")
a7 = Artwork.create(title: "Bouquet of Flowers", artist: "Odilon Redon", year_created: "1900-1905" , category: "European Paintings", estimated_value: 175000 , sold: false, sold_to: nil, start_price:80000 , max_price: 500000 , image_url: "https://images.metmuseum.org/CRDImages/ep/original/DT245117.jpg")
a8 = Artwork.create(title: "Queen Nefertari being led by Isis", artist: "unknown", year_created: "1279-1213 BC" , category: "Egyptian", estimated_value: 150000 , sold: false, sold_to: nil, start_price: 10000, max_price: 500000, image_url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/557811/1178342/main-image")
a9 = Artwork.create(title: "Mandala of Jnanadakini" , artist: "Unknown" , year_created: "late 14th century" , category: "Asian", estimated_value: 60000, sold: false, sold_to: nil, start_price: 8000, max_price: 30000, image_url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/37802/148507/main-image")
a10 = Artwork.create(title: "Olive Trees at Collioure", artist: "Henri Matisse", year_created: "1906" , category: "European Paintings", estimated_value: 350000, sold: false, sold_to: nil, start_price: 150000 , max_price: 800000, image_url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/459161/1530777/restricted")
a11 = Artwork.create(title: "Cherry and Maple Trees", artist: "Sakai Hōitsu", year_created: "early 1820s" , category: "Asian", estimated_value: 75000 , sold: false, sold_to: nil, start_price: 30000, max_price: 350000 , image_url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/765976/1801371/main-image")
a12 = Artwork.create(title: "Celia Thaxter's Garden", artist: "Childe Hassam", year_created: "1890" , category: "American", estimated_value: 300000 , sold: false, sold_to: nil, start_price: 10000, max_price: 700000 , image_url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/14930/32440/restricted")



puts "creating bids"

Bid.create(buyer_id: b1.id, artwork_id: a1.id, bid_price: a1.start_price)
Bid.create(buyer_id: b2.id, artwork_id: a2.id, bid_price: a2.start_price)
Bid.create(buyer_id: b3.id, artwork_id: a3.id, bid_price: a3.start_price)
Bid.create(buyer_id: b1.id, artwork_id: a4.id, bid_price: a4.start_price)
Bid.create(buyer_id: b2.id, artwork_id: a5.id, bid_price: a5.start_price)
Bid.create(buyer_id: b3.id, artwork_id: a6.id, bid_price: a6.start_price)
Bid.create(buyer_id: b1.id, artwork_id: a7.id, bid_price: a7.start_price)
Bid.create(buyer_id: b2.id, artwork_id: a8.id, bid_price: a8.start_price)
Bid.create(buyer_id: b3.id, artwork_id: a9.id, bid_price: a9.start_price)
Bid.create(buyer_id: b1.id, artwork_id: a10.id, bid_price: a10.start_price)
Bid.create(buyer_id: b2.id, artwork_id: a11.id, bid_price: a11.start_price)
Bid.create(buyer_id: b3.id, artwork_id: a12.id, bid_price: a12.start_price)

puts "seeding done!"

