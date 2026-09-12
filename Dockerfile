# Use official Nginx lightweight alpine image
FROM nginx:alpine

# Copy all static website assets into Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
