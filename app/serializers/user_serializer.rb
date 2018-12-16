class UserSerialzer < ActiveModel::Serializer
	attributes :id, :name, :email, :coach, :encrypted_password
	has_many :meetings
end  