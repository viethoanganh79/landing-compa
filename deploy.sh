#!/bin/bash
# Deploy landing page to Cloudflare Pages
# Requires: npm install -g wrangler, and wrangler login

set -e

echo "Building..."
npm run build

echo "Deploying to Cloudflare Pages..."
npx wrangler pages deploy dist --project-name=landing-compa

echo "Done!"