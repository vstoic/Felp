Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :create, :show]
    resources :businesses, only: [:index, :show] do
      resources :reviews, only: [:index, :show, :create, :update, :destroy]
    end
  end
end
