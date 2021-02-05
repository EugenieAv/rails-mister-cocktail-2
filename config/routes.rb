Rails.application.routes.draw do
  resources :cocktails, except: [:edit, :update] do
    resources :doses, only: :create
  end
  resources :doses, only: :destroy

end
