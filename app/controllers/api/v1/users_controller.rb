class Api::V1::UsersController < ApiController
  def current
    if current_user
      render json: current_user
    else
      render json: { errors: "No user is currently signed in." }
    end
  end
end