class RenameColumnToCocktails < ActiveRecord::Migration[6.0]
  def change
    rename_column :cocktails, :descrition, :description

  end
end
