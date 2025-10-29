#!/bin/bash

# Test Authentication Flow
# This script tests the backend authentication endpoints

BASE_URL="http://localhost:8000/api/v1"

echo "🔐 Testing Merch-tool Authentication API"
echo "=========================================="
echo ""

# Test 1: Register a new user
echo "1️⃣  Registering new user..."
REGISTER_RESPONSE=$(curl -s -X POST "${BASE_URL}/auth/register" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "demouser",
    "email": "demo@example.com",
    "password": "password123"
  }')

echo "Response: $REGISTER_RESPONSE"
echo ""

# Test 2: Login with the user
echo "2️⃣  Logging in..."
TOKEN_RESPONSE=$(curl -s -X POST "${BASE_URL}/auth/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=demouser&password=password123")

echo "Response: $TOKEN_RESPONSE"
echo ""

# Extract token
TOKEN=$(echo $TOKEN_RESPONSE | grep -o '"access_token":"[^"]*' | cut -d'"' -f4)

if [ -z "$TOKEN" ]; then
  echo "❌ Login failed - no token received"
  exit 1
fi

echo "✅ Token received: ${TOKEN:0:20}..."
echo ""

# Test 3: Get current user
echo "3️⃣  Fetching current user info..."
USER_RESPONSE=$(curl -s -X GET "${BASE_URL}/auth/me" \
  -H "Authorization: Bearer $TOKEN")

echo "Response: $USER_RESPONSE"
echo ""

# Test 4: Try with invalid token
echo "4️⃣  Testing with invalid token (should fail)..."
INVALID_RESPONSE=$(curl -s -X GET "${BASE_URL}/auth/me" \
  -H "Authorization: Bearer invalid-token-here")

echo "Response: $INVALID_RESPONSE"
echo ""

echo "=========================================="
echo "✅ All authentication tests completed!"
echo ""
echo "You can now use these credentials in the frontend:"
echo "  Username: demouser"
echo "  Password: password123"
echo ""
echo "Access the app at: http://localhost:3000"
