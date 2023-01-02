class CreateBids < ActiveRecord::Migration[6.1]
  def change
       create_table :bids do |t|
      t.integer :buyer_id
      t.integer :artwork_id
      t.datetime :bid_time
      t.integer :bid_price
      t.timestamps
    end
  end
end
