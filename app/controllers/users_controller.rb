class UsersController < ApplicationController

   def index
    @users = User.all
    render json: @user
  end
   def show
    @user = User.find(params[:id])
    render json: @user
  end
 end 