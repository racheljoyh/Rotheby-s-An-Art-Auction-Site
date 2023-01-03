class BuyerController < ApplicationController

   get "/buyers" do 
        buyers = Buyer.all
        buyers.to_json
    end

    get "/buyerBids/:id" do
        buyer = Buyer.find(params[:id])
        buyer.getAllBids.to_json
    end

    get "/buyers/:id" do
        buyer = Buyer.find(params[:id])
        buyer.to_json
    end
    
    post "/buyers" do
        new_buyer = Buyer.create(first_name:params[:first_name], last_name:params[:last_name])
        status 201
        new_buyer.to_json
    end

    patch "/buyers/:id" do
        buyer = Buyer.find(params[:id])
        buyer.update(first_name:params[:first_name], last_name:params[:last_name])
        buyer.to_json

    end

    delete "/buyers/:id" do
        old_buyer = Buyer.find(params[:id])
        old_buyer.destroy
        status 204
    end

end