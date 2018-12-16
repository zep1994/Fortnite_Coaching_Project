class Player < ApplicationRecord
	has_many :meetings
	has_many :coaches, through: :meetings
end
