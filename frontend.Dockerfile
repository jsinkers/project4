# frontend.Dockerfile
# Step 1: Build the frontend with Node
FROM node:14 AS frontend-builder

# Set working directory
WORKDIR /frontend

# Copy frontend files
COPY ./reg-mac-frontend /frontend

# Install dependencies and build
RUN npm install
RUN npm run build

# Step 2: Use Nginx to serve the static files
FROM nginx:alpine AS frontend

# Copy the built frontend files to Nginx's default HTML directory
COPY --from=frontend-builder /frontend/dist /usr/share/nginx/html

# Copy Nginx config if you want to customize settings
COPY ./reg-mac-frontend/nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for the frontend
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]