Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # namespace :api, defaults: {format: :json} do
    # resources :reviews, only: [:create, :show, :update, :delete]
    resource :user, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    # resources :businesses, only: [:create, :show]
  

  root "static_pages#root"

end
