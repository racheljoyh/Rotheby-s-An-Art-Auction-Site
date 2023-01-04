class Artwork < ActiveRecord::Base
  has_many :bids
  has_many :buyers, through: :bids
  

  # def self.category_sort
  #   self.all.
  # end

end