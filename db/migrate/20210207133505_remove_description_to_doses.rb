class RemoveDescriptionToDoses < ActiveRecord::Migration[6.0]
  def change
    remove_column :doses, :description
  end
end
