"""
FastAPI entry point for Merch-tool application
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import products, keywords, trademarks, auth

app = FastAPI(title="Merch-tool API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(products.router, prefix="/api/products", tags=["products"])
app.include_router(keywords.router, prefix="/api/keywords", tags=["keywords"])
app.include_router(trademarks.router, prefix="/api/trademarks", tags=["trademarks"])
app.include_router(auth.router, prefix="/api/auth", tags=["auth"])


@app.get("/")
async def root():
    return {"message": "Welcome to Merch-tool API"}


@app.get("/health")
async def health_check():
    return {"status": "healthy"}
