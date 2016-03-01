require 'bundler'
Bundler.require

require_relative 'connection'

get '/' do
    erb :index
end

get '/photo_gallery' do
    erb :photo_gallery
end

get '/contact' do
    erb :contact
end
