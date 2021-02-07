Rails.application.routes.draw do
  root to: 'cocktails#home'
  resources :cocktails, except: [:edit, :update] do
    resources :doses, only: :create
  end
  resources :doses, only: :destroy

end
