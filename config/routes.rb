XSport::Application.routes.draw do
  
  
  get "members/member_about"
  get "members/member_evaluation"
  get "members/member_products"

  get "personals/profile"
  get "personals/products"
  get "personals/evaluation"
  get "personals/trade_record"
  get "personals/trade_record2"
  get "personals/whisper"
  get "personals/ask_answer"
  get "personals/ready_to_sell"

  match 'contact' => 'statics#contact', :as => :contact
  match 'about_us' => 'statics#about_us', :as => :about_us
  match 'privacy' => 'statics#privacy', :as => :privacy
  match 'secure' => 'statics#secure', :as => :secure
  match 'index' => 'pages#index', :as => :index
  match 'introduce' => 'pages#introduce', :as => :introduce
  
  root :to => 'pages#index'
  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
