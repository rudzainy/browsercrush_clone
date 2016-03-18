require 'sinatra'
require 'erb'

# This gives you the homepage of your app.
get '/calculator' do
  erb :calculator
end

# This handles the data from your calculator form.
post '/calculator' do
  math_operator = params[:math_operator]           # eg: +, -, *, /
  @first_number = params[:first_num].to_i   # eg: 5
  @second_number = params[:second_num].to_i # eg: 6

  # Start coding here, friends!

  erb :calculator
end