ServiceManager.define_service "solr" do |s|

  # this is the host and port the service will be available on. If something is responding here, don't try to start it again because it's already running
  s.host       = "localhost"
  s.port       = 8090

  s.start_cmd  = "bundle exec rake sunspot:solr:start"

  # When this regexp is matches, ServiceManager will know that the service is ready
  s.loaded_cue = /Solr ready/

  # ServiceManager will colorize the output as specified by this terminal color id.
  s.color      = 33

  # The directory
  s.cwd        = Dir.pwd

  s.pid_file = 'solr_service.pid'
end
