class Artwork < ActiveRecord::Base
  has_many :bids
  has_many :buyers, through: :bids
  

  # def self.category_sort
  #   self.all.
  # end

  # def winning_buyer
  #   self.buyers.map do |b|
  #     b_name = buyers.find(b.id).first_name
  #     self.sold_to = b_name
  #     "#{sold_to} has won this artwork!"
  #   end
  # end

  # def winning_buyer
  #   self.sold_to
  # end

end