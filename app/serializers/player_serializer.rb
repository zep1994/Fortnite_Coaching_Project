class PlayerSerialzer < ActiveModel::Serializer
	attributes :id, :name, :email
	has_many :meetings
end  