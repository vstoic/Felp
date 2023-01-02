json.extract! user, :id, :email, :username
json.profilePhoto url_for(user.profile_photo) if user.profile_photo.attached?
