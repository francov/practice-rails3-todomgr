# Getting Started with Todos Manager Application
This introduction explains how you can get started

## Setup
You can run the following commands:
	
	bundle install
	rake db:migrate
	rake db:seeds


## Deploy

### Development
Run
	rake server
And you are ready to go

### Test & Production
Run
	bundle exec rake assets:precompile
To precompile your assets, then
	rails server -e test