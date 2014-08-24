class PostsController < ApplicationController

	def index
		@posts = Post.all
		render status: 200, json: @posts.to_json
	end

	def show
		@post = Post.find(params[:id])
		render status: 200, json: @post.to_json
	end

	def new
	end

	def create
	end

	def edit
	end

	def update
	end

	def destroy
	end

	private
	def posts_params
		params.require(:post).permit(:author, :title, :content)
	end

end