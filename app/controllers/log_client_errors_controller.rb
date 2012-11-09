class LogClientErrorsController < ApplicationController

	# POST /log_client_errors
	def index
		logger.info("CLIENT_ERROR: " + params[:error_message])
	end
end
