class AddQuantityToDoses < ActiveRecord::Migration[6.0]
  def change
    add_column :doses, :quantity, :string
  end
end
