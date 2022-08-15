# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    attr_reader :password
    after_initialize :ensure_session_token

    has_many :reviews,
    foreign_key: :user_id,
    class_name: Review
    
    #finds user if username and password is correct
    def self.find_by_credentials(email, password)
        user = user.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil 
    end

    #uses bcrypt to verify password
    def is_password?(password)
        @password = password 
        self.password_digest = Bcrypt::Password.create(password)
    end

    #generates initial session token and runs after initalization/validations
    def ensure_session_token 
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    #sets password to 
    def password=(password)
        @password = password
        self.password_digest = Bcrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

end
