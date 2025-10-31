# Database Setup

## Overview
The authentication system now uses a proper SQLite database with SQLAlchemy ORM instead of in-memory storage.

## Database Configuration

### Location
- Database file: `backend/merch_tool.db`
- SQLite database (can be easily changed to PostgreSQL/MySQL)

### Tables

#### Users Table
- `id`: Primary key (Integer)
- `username`: Unique username (String, max 50 chars)
- `email`: Unique email address (String, max 100 chars)
- `hashed_password`: Argon2 hashed password (String, max 255 chars)
- `is_active`: User active status (Boolean, default: True)
- `created_at`: Account creation timestamp
- `updated_at`: Last update timestamp

## Password Hashing

Using **Argon2** (modern, secure, Python 3.13 compatible) instead of bcrypt:
- More secure than bcrypt
- Better resistance to GPU/ASIC attacks
- Full Python 3.13 compatibility
- Fallback to bcrypt for legacy hashes

## API Endpoints

All endpoints are at `/api/auth`:

### 1. Register User
```bash
POST /api/auth/register
Content-Type: application/json

{
  "username": "john",
  "email": "john@example.com",
  "password": "securepassword123"
}

Response: 201 Created
{
  "id": 1,
  "username": "john",
  "email": "john@example.com"
}
```

### 2. Login (Get Token)
```bash
POST /api/auth/token
Content-Type: application/x-www-form-urlencoded

username=john&password=securepassword123

Response: 200 OK
{
  "access_token": "eyJhbGci...",
  "token_type": "bearer"
}
```

### 3. Get Current User
```bash
GET /api/auth/me
Authorization: Bearer <token>

Response: 200 OK
{
  "id": 1,
  "username": "john",
  "email": "john@example.com"
}
```

## Testing

### Register a new user:
```bash
curl -X POST "http://localhost:8000/api/auth/register" \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"test@example.com","password":"password123"}'
```

### Login:
```bash
curl -X POST "http://localhost:8000/api/auth/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=testuser&password=password123"
```

### Get user info:
```bash
TOKEN="<your_token_here>"
curl -X GET "http://localhost:8000/api/auth/me" \
  -H "Authorization: Bearer $TOKEN"
```

## Database Management

### View users:
```bash
cd backend
sqlite3 merch_tool.db "SELECT id, username, email, created_at FROM users;"
```

### Reset database (delete all data):
```bash
rm backend/merch_tool.db
# Database will be recreated on next server start
```

## Security Features

✅ Password hashing with Argon2
✅ JWT token-based authentication
✅ 30-minute token expiration
✅ Email validation
✅ Unique username and email constraints
✅ SQL injection protection (SQLAlchemy ORM)
✅ CORS configured for frontend access

## Production Considerations

Before deploying to production:

1. **Change SECRET_KEY**: Set via environment variable
   ```bash
   export SECRET_KEY="your-very-secure-random-secret-key-here"
   ```

2. **Use PostgreSQL/MySQL** instead of SQLite:
   ```bash
   export DATABASE_URL="postgresql://user:password@localhost/merch_tool"
   ```

3. **Update CORS settings** in `main.py` to only allow your frontend domain

4. **Enable HTTPS** in production

5. **Set up database migrations** with Alembic:
   ```bash
   alembic revision --autogenerate -m "Initial migration"
   alembic upgrade head
   ```

## Files Modified

- `backend/app/database.py` - Database configuration
- `backend/app/models.py` - User model definition
- `backend/app/api/routes/auth.py` - Authentication routes with DB integration
- `backend/app/main.py` - Database initialization
- `backend/requirements.txt` - Added SQLAlchemy, Alembic, Argon2
- `frontend/src/lib/api.ts` - Fixed API endpoints (removed /v1 prefix)

## Current Status

✅ Backend running on http://localhost:8000
✅ Frontend running on http://localhost:3000
✅ Database created and working
✅ User registration working
✅ User login working
✅ JWT authentication working
✅ All API endpoints functional

## Test Users

Current users in database:
- alice / alice@example.com / password: password123
- bob / bob@example.com / password: password123
