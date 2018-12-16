class Meeting < ApplicationRecord
	belongs_to :player
	belongs_to :coach
end
