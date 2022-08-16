Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:index, :show]
    resources :users, only: [:index, :create, :show]
    resources :reviews, only: [:show, :create, :update, :destroy, :index]
  end

  root to: "static_pages#root"


end
