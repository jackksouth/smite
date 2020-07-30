class Setdefault < ActiveRecord::Migration[6.0]
  def change
    change_column_default(:users, :text, "")
  end
end
