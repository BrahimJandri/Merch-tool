# Merch-tool - Deployment Infrastructure

This directory contains infrastructure and deployment configurations for the Merch-tool project.

## Structure

- `docker-compose.yml` - Local development setup with all services
- `Dockerfile.backend` - Backend Docker image
- `Dockerfile.frontend` - Frontend Docker image
- `nginx.conf` - Nginx reverse proxy configuration
- `deploy/` - Deployment configurations for various platforms

## Local Development

### Using Docker Compose

Start all services:
```bash
docker-compose up -d
```

Stop all services:
```bash
docker-compose down
```

View logs:
```bash
docker-compose logs -f
```

### Services

- **Backend**: http://localhost:8000
- **Frontend**: http://localhost:3000
- **PostgreSQL**: localhost:5432
- **Redis**: localhost:6379
- **Elasticsearch**: http://localhost:9200

## Deployment

### Vercel (Frontend)

1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to frontend directory
3. Run `vercel` and follow prompts
4. Update `deploy/vercel.json` with your backend URL

### AWS (Full Stack)

1. Configure AWS CLI
2. Create ECR repositories for backend and frontend
3. Build and push Docker images
4. Deploy using CloudFormation:
   ```bash
   aws cloudformation create-stack \
     --stack-name merch-tool \
     --template-body file://deploy/aws.yml \
     --parameters ParameterKey=Environment,ParameterValue=production
   ```

### Cron Jobs

For platforms like Google Cloud Run or App Engine, use the `deploy/cron.yaml` configuration to schedule periodic tasks.

## Environment Variables

### Backend
- `DATABASE_URL` - PostgreSQL connection string
- `REDIS_HOST` - Redis host
- `REDIS_PORT` - Redis port
- `ELASTICSEARCH_URL` - Elasticsearch URL
- `SECRET_KEY` - JWT secret key

### Frontend
- `NEXT_PUBLIC_API_URL` - Backend API URL
