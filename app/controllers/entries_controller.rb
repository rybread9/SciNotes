class EntriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  # get index (all)
  def index
    render json: Entry.all
  end

  # get one (by id)
  def show
    render json: Entry.find(params["id"])
  end

end
