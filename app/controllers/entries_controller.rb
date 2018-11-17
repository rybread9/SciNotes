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

  # delete on (by id)
  def delete
    render json: Entry.delete(params["id"])
  end

  # create one
  def create
    render json: Entry.create(params["entry"])
  end

end
