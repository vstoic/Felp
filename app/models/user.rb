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
# class User < ApplicationRecord
#     validates :username, :email, presence: true, uniqueness: true
#     validates :password_digest, presence: true
#     validates :password, length: { minimum: 6 }, allow_nil: true
#     attr_reader :password
#     after_initialize :ensure_session_token

#     has_many :reviews,
#     foreign_key: :user_id,
#     class_name: :Review
    
#     #finds user if username and password is correct
#     def self.find_by_credentials(email, password)
#         user = user.find_by(email: email)
#         return nil unless user
#         user.is_password?(password) ? user : nil 
#     end

#     #uses bcrypt to verify password
#     def is_password?(password)
#         @password = password 
#         self.password_digest = Bcrypt::Password.create(password)
#     end

#     #generates initial session token and runs after initalization/validations
#     def ensure_session_token 
#         self.session_token ||= SecureRandom.urlsafe_base64
#     end

#     #takes password and bcrypts and sets to password digest
#     def password=(password)
#         @password = password
#         self.password_digest = Bcrypt::Password.create(password)
#     end

#     # reseting the session token, saving and then returning that session token
#     def reset_session_token!
#         self.session_token = SecureRandom.urlsafe_base64
#         self.save!
#         self.session_token
#     end

# end

class User < ApplicationRecord
    validates :email, :session_token, :password_digest, :username, presence: true 
    validates :email, :session_token, uniqueness: true 
    validates :password, length: { minimum: 6, allow_nil: true }
    after_initialize :ensure_session_token
    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return user if user && user.is_password?(password)
        nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end
end
