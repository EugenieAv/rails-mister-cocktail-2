Rails.application.routes.draw do
  root to: 'cocktails#home'
  resources :cocktails do
    resources :doses, only: :create
  end
  resources :doses, only: :destroy

end
