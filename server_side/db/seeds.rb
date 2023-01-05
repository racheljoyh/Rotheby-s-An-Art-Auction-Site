puts "🌱 Seeding spices..."

puts "creating buyers"

b1 = Buyer.create(first_name: "Rachel", last_name: "Humes")
b2 = Buyer.create(first_name: "Anna", last_name: "Harder")
b3 = Buyer.create(first_name: "Johnny", last_name: "Turco")

puts "creating artworks"

a1 = Artwork.create(title: "Burial Crown" , artist: "Unknown" , year_created: "960 - 1279", category: "Asian", estimated_value: 5000, sold?: false, sold_to: nil, start_price: 1000, max_price: 10000, image_url: "https://images.metmuseum.org/CRDImages/as/original/DP-14791-010.jpg" )
a2 = Artwork.create(title: "Cat" , artist: "Unknown" , year_created: "664 - 30 BC" , category: "Egyptian", estimated_value: 60000, sold?: false, sold_to: nil, start_price: 8000, max_price: 80000, image_url: "https://images.metmuseum.org/CRDImages/eg/original/LC-04_2_472_EGDP031195.jpg")
a3 = Artwork.create(title: "Merry Company on a Terrace", artist: "Jan Steen", year_created: "1670" , category: "European Paintings", estimated_value: 15000, sold?: false, sold_to: nil, start_price: 2500, max_price: 25000, image_url: "https://images.metmuseum.org/CRDImages/ep/original/DP146455.jpg")
a4 = Artwork.create(title: "The American Wing", artist: "Thomas Cole", year_created: "1903" , category: "American", estimated_value: 30000 , sold?: false, sold_to: nil, start_price: 10000, max_price: 100000 , image_url: "https://images.metmuseum.org/CRDImages/ad/original/DT208249.jpg")
a5 = Artwork.create(title: "Pair of Sword-Grip Ornaments", artist: "Menuki", year_created: "1917" , category: "Japanese", estimated_value: 15000 , sold?: false, sold_to: nil, start_price: 10000, max_price: 50000, image_url: "https://images.metmuseum.org/CRDImages/aa/original/LC-17_208_5a_b-001.jpg")
a6 = Artwork.create(title: "Vase of Flowers (Pink Background)", artist: "Odilon Redon", year_created: "1959" , category: "European Paintings", estimated_value: 20000 , sold?: false, sold_to: nil, start_price: 10000 , max_price: 80000 , image_url: "https://images.metmuseum.org/CRDImages/ep/original/DT2159.jpg")
a7 = Artwork.create(title: "Decorated Ware Jar Depicting Boats and Humans", artist: "unknown", year_created: "3500-3300 BC" , category: "Egyptian", estimated_value: 30000, sold?: false, sold_to: nil, start_price: 15000, max_price: 90000 , image_url: "https://images.metmuseum.org/CRDImages/eg/original/DP248749.jpg")

# a8 = Artwork.create(title: "", artist: "", year_created: "" , category: "", estimated_value: , sold?: false, sold_to: nil, start_price: , max_price: , image_url: "")
# a9 = Artwork.create(title: "", artist: "", year_created: "" , category: "", estimated_value: , sold?: false, sold_to: nil, start_price: , max_price: , image_url: "")
# a10 = Artwork.create(title: "", artist: "", year_created: "" , category: "", estimated_value: , sold?: false, sold_to: nil, start_price: , max_price: , image_url: "")
# a11 = Artwork.create(title: "", artist: "", year_created: "" , category: "", estimated_value: , sold?: false, sold_to: nil, start_price: , max_price: , image_url: "")
# a12 = Artwork.create(title: "", artist: "", year_created: "" , category: "", estimated_value: , sold?: false, sold_to: nil, start_price: , max_price: , image_url: "")


puts "creating bids"

Bid.create(buyer_id: b1.id, artwork_id: a3.id, bid_price: 3500)
Bid.create(buyer_id: b2.id, artwork_id: a2.id, bid_price: 8500)
Bid.create(buyer_id: b3.id, artwork_id: a2.id, bid_price: 8000)

puts "seeding done!"

