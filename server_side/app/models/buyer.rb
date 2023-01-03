class Buyer < ActiveRecord::Base
  has_many :bids
  has_many :artworks, through: :bids
  
end