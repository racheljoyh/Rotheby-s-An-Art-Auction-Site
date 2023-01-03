class Buyer < ActiveRecord::Base
  has_many :bids
  has_many :artworks, through: :bids


  def getAllBids
    self.bids 
  end
  
end