class Bid < ActiveRecord::Base
  belongs_to :artwork
  belongs_to :buyer
end