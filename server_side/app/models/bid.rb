class Bid < ActiveRecord::Base
  belongs_to :artwork
  belongs_to :buyer


  def self.highest_bid (artwork)
    self.all.where(artwork_id: artwork).order(:bid_price).last
  end


end