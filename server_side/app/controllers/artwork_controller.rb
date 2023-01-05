class ArtworkController < ApplicationController

  get '/artworks' do 
    artworks = Artwork.all
    artworks.to_json
  end

  get '/artworks/:id' do 
    artwork = Artwork.find(params[:id])
    bid = Bid.highest_bid(params[:id])
    [artwork, bid].to_json
  end


  post '/artworks/:id' do

    current_bid = Bid.highest_bid(params[:id]).bid_price
    highest_value = Artwork.find(params[:id]).max_price
     
    
    new_bid = Bid.create(bid_price:params[:bid_price], artwork_id:params[:artwork_id], buyer_id:params[:buyer_id])

    
    puts new_bid.bid_price
    puts current_bid
    puts highest_value
    


    if (new_bid.bid_price > current_bid) 
      new_bid.to_json
      if (new_bid.bid_price >= highest_value)
        "SOLD"
      end
    elsif (new_bid.bid_price <= current_bid)
      "Your bid must be higher than current bid amount!"
    end

    
  end

  patch '/artworks/:id' do 
    status = Artwork.find(params[:id]) 
    highest_value = Artwork.find(params[:id]).max_price
    current_bid = Bid.highest_bid(params[:id]).bid_price
    winning_buyer = Bid.highest_bid(params[:id]).buyer_id

    puts current_bid
    puts highest_value
    puts status
    puts winning_buyer

    if (current_bid >= highest_value)
      status.update(sold?: true, sold_to: winning_buyer)
      status.to_json
    end
       
  end

  get '/artworks/:category' do
    category = Artwork.find(params[:category])
    category.to_json
  end

end
