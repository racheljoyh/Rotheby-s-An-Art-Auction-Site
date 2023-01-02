puts "🌱 Seeding spices..."

puts "creating buyers"

b1 = Buyer.create(first_name: "Rachel", last_name: "Humes")
b2 = Buyer.create(first_name: "Anna", last_name: "Harder")
b3 = Buyer.create(first_name: "Johnny", last_name: "Turco")

puts "creating artworks"

a1 = Artwork.create(title: "Burial Crown" , artist: "Unknown" , year_created: "960 - 1279", category: "Asian", estimated_value: 5000, sold: false, buyer_id: nil, max_price: 10000, image_url: "https://images.metmuseum.org/CRDImages/as/original/DP-14791-010.jpg" )
a2 = Artwork.create(title: "Cat" , artist: "Unknown" , year_created: "664 - 30 B.C" , category: "Egyptian", estimated_value: 60000, sold: false , buyer_id: nil , max_price: 80000, image_url: "https://images.metmuseum.org/CRDImages/eg/original/LC-04_2_472_EGDP031195.jpg")
a3 = Artwork.create(title: "Merry Company on a Terrace", artist: "Jan Steen", year_created: "1670" , category: "European Paintings", estimated_value: 15000, sold: false, buyer_id: nil, max_price: 25000, image_url: "https://images.metmuseum.org/CRDImages/ep/original/DP146455.jpg")

puts "creating bids"

Bid.create(buyer_id: b1.id, artwork_id: a3.id, bid_time: Time.now, bid_price: 1750)
Bid.create(buyer_id: b2.id, artwork_id: a2.id, bid_time: Time.now, bid_price: 62000)
Bid.create(buyer_id: b3.id, artwork_id: a2.id, bid_time: Time.now, bid_price: 65000)

puts "seeding done!"

