# Base image
FROM node:16-alpine as builder

# Set working directory
RUN mkdir app
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port your application is listening on

FROM nginx:alpine
COPY --from=builder /app/build /build
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
