# Use the Nginx base image
FROM nginx

# Copy the index.html file to the Nginx default document root
COPY index.html /usr/share/nginx/html/

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN apt update -y
RUN apt install vim -y

# Expose the default Nginx port
EXPOSE 3000

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]