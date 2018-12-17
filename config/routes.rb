Rails.application.routes.draw do
   devise_for :users
	resources :players
	resources :meetings
  resources :sessions, only: [:create, :destroy]
end
