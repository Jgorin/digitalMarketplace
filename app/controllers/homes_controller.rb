class HomesController < ApplicationController
  def index
    if user_signed_in?
      redirect_to "/users/#{current_user.id}"
    end
  end

  def app
  end
end
