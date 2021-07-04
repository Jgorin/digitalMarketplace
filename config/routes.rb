Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/users/:id", to: "homes#app"
  namespace :api do
    namespace :v1 do
      resources :users do
        collection do
          get "current"
        end
      end
    end
  end
end
