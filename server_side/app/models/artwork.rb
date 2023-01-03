class Artwork < ActiveRecord::Base
  has_many :bids
  has_many :buyers, through: :bids
  
end