class ApplicationController < ActionController::Base
  protect_from_forgery

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

private

	def record_not_found
		respond_to do |format|
		  format.json { head :not_found }
		end
	end

end
