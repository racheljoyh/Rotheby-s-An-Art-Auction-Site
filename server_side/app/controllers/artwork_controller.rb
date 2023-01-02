class ArtworkController < ApplicationController
  get '/artworks' do 
    artworks = Artwork.all
    artworks.to_json
  end


end
