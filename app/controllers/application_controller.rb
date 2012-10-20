class ApplicationController < ActionController::Base
  protect_from_forgery

  attr_accessor :json_res

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  def initialize
  	@json_res = {
  		success: true,
  		message: 'OK',
  		data: []
  	}
  end

protected

  def compose_response(hash)
  	@json_res.merge!(hash)
  end

private

	def record_not_found
		respond_to do |format|
		  format.json {render json: compose_response( 
            success: false,
            message: "Data not found"
      )}
		end
	end

end
