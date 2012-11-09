namespace :jsduck do
	desc 'Generate js doc'
	task :js do
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

	desc 'Generate Guides doc'
	task :guide do
		CMD = <<-EOC
        jsduck --guides doc/guide/guides.json \
				--title="practice-rails3-todomgr" \
				--output doc/guides-app
		EOC

		`#{CMD}`
	end

	desc 'Generate Js and Guides doc'
	task :all do
		CMD = <<-EOC
        jsduck app/assets/javascripts \
				--builtin-classes \
				--warnings=-no_doc,-dup_member,-link_ambiguous \
				--ignore-global \
				--title="practice-rails3-todomgr" \
				--guides doc/guide/guides.json \
				--output doc/javascript-app
		EOC

		`#{CMD}`
	end
end