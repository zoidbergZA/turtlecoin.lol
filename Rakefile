require "bundler"
Bundler.require

task :tests do
  # link checking from Travis CI machines fails sometimes (bad network?)
  with_retries(max_tries: 5) do
    HTMLProofer.check_directory(
      "./_site",
      url_ignore: ["#"]
    ).run
  end
end
