Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # =================================================
  #             ROUTES FOR ENTRIES MODEL
  # =================================================
  get '/entries', to: 'entries#index'
  get '/entries/:id', to: 'entries#show'

end
