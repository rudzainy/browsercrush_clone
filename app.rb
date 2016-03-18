require 'sinatra'
require 'erb'

get '/calculator' do
  erb :calculator
end

post '/calculator' do
  operator = params[:operator]
  @first_number = params[:first_value].to_i
  @second_number = params[:second_value].to_i
  
  #Start coding here, friends!
  
  erb :calculator 
end