class MeetingSerialzer < ActiveModel::Serializer
	attributes :id, :name, :email, :coach, :encrypted_password
	belongs_to :users
	belongs_to :players
end  