class PostsController < ApplicationController

	def index
		@posts = Post.all
		render status: 200, json: @posts.to_json
	end

	def show
		@post = Post.find(params[:id])
		render status: 200, json: @post.to_json
	end

	def create
		@post = Post.new(post_params)
		if @post.save
			render status:200, json: @post.to_json
		end
	end

	def edit
	end

	def update
	end

	def destroy
	end

	private
	def post_params
		params.require(:post).permit(:author, :title, :content, :photo_url)
	end

end