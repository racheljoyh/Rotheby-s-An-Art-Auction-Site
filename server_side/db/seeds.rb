puts "🌱 Seeding spices..."

puts "creating buyers"

b1 = Buyer.create(first_name: "Rachel", last_name: "Humes")
b2 = Buyer.create(first_name: "Anna", last_name: "Harder")
b3 = Buyer.create(first_name: "Johnny", last_name: "Turco")

puts "creating artworks"

a1 = Artwork.create(title: "Vase of Flowers (Pink Background)", artist: "Odilon Redon", year_created: "1959" , category: "European Paintings", estimated_value: 200000 , sold?: false, sold_to: nil, start_price: 10000 , max_price: 800000 , image_url: "https://images.metmuseum.org/CRDImages/ep/original/DT2159.jpg")
a2 = Artwork.create(title: "Cat" , artist: "Unknown" , year_created: "664 - 30 BC" , category: "Egyptian", estimated_value: 60000, sold?: false, sold_to: nil, start_price: 8000, max_price: 80000, image_url: "https://images.metmuseum.org/CRDImages/eg/original/LC-04_2_472_EGDP031195.jpg")
a3 = Artwork.create(title: "Merry Company on a Terrace", artist: "Jan Steen", year_created: "1670" , category: "European Paintings", estimated_value: 15000, sold?: false, sold_to: nil, start_price: 2500, max_price: 25000, image_url: "https://images.metmuseum.org/CRDImages/ep/original/DP146455.jpg")
a4 = Artwork.create(title: "Decorated Ware Jar Depicting Boats and Humans", artist: "unknown", year_created: "3500-3300 BC" , category: "Egyptian", estimated_value: 30000, sold?: false, sold_to: nil, start_price: 15000, max_price: 90000 , image_url: "https://images.metmuseum.org/CRDImages/eg/original/DP248749.jpg")
a5 = Artwork.create(title: "Irises", artist: "Vincent van Gogh", year_created: "1890" , category: "European Painting", estimated_value: 25000000 , sold?: false, sold_to: nil, start_price: 500000, max_price:500000000 , image_url: "https://images.metmuseum.org/CRDImages/ep/original/DP346474.jpg")
a6 = Artwork.create(title: "Bouquet of Flowers", artist: "Odilon Redon", year_created: "1900-1905" , category: "European Paintings", estimated_value: 175000 , sold?: false, sold_to: nil, start_price:80000 , max_price: 500000 , image_url: "https://images.metmuseum.org/CRDImages/ep/original/DT245117.jpg")
a7 = Artwork.create(title: "House behind Trees", artist: "Georges Braque", year_created: "1907" , category: "European Paintings", estimated_value: 300000 , sold?: false, sold_to: nil, start_price: 100000 , max_price: 700000 , image_url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/459142/preview")
a8 = Artwork.create(title: "Pair of Sword-Grip Ornaments", artist: "Menuki", year_created: "1917" , category: "Japanese", estimated_value: 15000 , sold?: false, sold_to: nil, start_price: 10000, max_price: 50000, image_url: "https://images.metmuseum.org/CRDImages/aa/original/LC-17_208_5a_b-001.jpg")
a9 = Artwork.create(title: "Olive Trees at Collioure", artist: "Henri Matisse", year_created: "1906" , category: "European Paintings", estimated_value: 350000, sold?: false, sold_to: nil, start_price: 150000 , max_price: 800000, image_url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/459161/1530777/restricted")
a10 = Artwork.create(title: "Cherry and Maple Trees", artist: "Sakai Hōitsu", year_created: "early 1820s" , category: "Asian", estimated_value: 75000 , sold?: false, sold_to: nil, start_price: 30000, max_price: 350000 , image_url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/765976/1801371/main-image")
a11 = Artwork.create(title: "Burial Crown" , artist: "Unknown" , year_created: "960 - 1279", category: "Asian", estimated_value: 5000, sold?: false, sold_to: nil, start_price: 1000, max_price: 10000, image_url: "https://images.metmuseum.org/CRDImages/as/original/DP-14791-010.jpg" )
a12 = Artwork.create(title: "The American Wing", artist: "Thomas Cole", year_created: "1903" , category: "American", estimated_value: 30000 , sold?: false, sold_to: nil, start_price: 10000, max_price: 100000 , image_url: "https://images.metmuseum.org/CRDImages/ad/original/DT208249.jpg")


puts "creating bids"

Bid.create(buyer_id: b1.id, artwork_id: a3.id, bid_price: 3500)
Bid.create(buyer_id: b2.id, artwork_id: a2.id, bid_price: 8500)
Bid.create(buyer_id: b3.id, artwork_id: a2.id, bid_price: 8000)

puts "seeding done!"

