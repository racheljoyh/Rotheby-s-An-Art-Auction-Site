class CreateArtworks < ActiveRecord::Migration[6.1]
  def change
     create_table :artworks do |t|
      t.string :title
      t.string :artist
      t.string :year_created
      t.string :category
      t.integer :estimated_value
      t.boolean :sold?
      t.integer :sold_to
      t.integer :max_price
      t.integer :start_price
      t.string :image_url
      t.timestamps
    end
  end
end
