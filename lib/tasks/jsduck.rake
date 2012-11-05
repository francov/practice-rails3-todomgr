namespace :jsduck do
	desc 'Generate js doc'
	task :run do
		CMD = <<-EOC
        jsduck app/assets/javascripts \
				--builtin-classes \
				--warnings=-no_doc,-dup_member,-link_ambiguous \
				--ignore-global \
				--title="practice-rails3-todomgr" \
				--output doc/javascript-app
		EOC

		`#{CMD}`
	end
end