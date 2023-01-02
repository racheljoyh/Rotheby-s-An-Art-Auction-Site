class ArtworkController < ApplicationController
  get '/artworks' do 
    artworks = Artwork.all
    artworks.to_json
  end

  get '/artworks/:id' do 
    artwork = Artwork.find(params[:id])

    artwork.to_json
  
  end

  post '/artworks/:id'
    
  end

  


end
