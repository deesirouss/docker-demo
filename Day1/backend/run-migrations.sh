#!/bin/sh

# Run database migrations
npx knex migrate:latest

# Start the application
exec "$@"
