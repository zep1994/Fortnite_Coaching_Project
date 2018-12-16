class CreateMeetings < ActiveRecord::Migration[5.2]
  def change
    create_table :meetings do |t|
	  t.string :name
	  t.integer :duration
	  t.float :price
	  t.integer :coach_id
	  t.integer :player_id

      t.timestamps
    end
  end
end
