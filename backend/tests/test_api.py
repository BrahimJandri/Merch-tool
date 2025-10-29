"""
API endpoint tests
"""
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_read_root():
    """Test root endpoint"""
    response = client.get("/")
    assert response.status_code == 200
    assert response.json()["message"] == "Welcome to Merch-tool API"


def test_health_check():
    """Test health check endpoint"""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "healthy"


def test_search_products():
    """Test product search endpoint"""
    response = client.get("/api/products/search?query=test")
    assert response.status_code == 200
    assert "results" in response.json()


def test_analyze_keywords():
    """Test keyword analysis endpoint"""
    response = client.get("/api/keywords/analyze?keyword=test")
    assert response.status_code == 200
    assert "keyword" in response.json()


def test_check_trademark():
    """Test trademark check endpoint"""
    response = client.get("/api/trademarks/check?phrase=test")
    assert response.status_code == 200
    assert "is_trademarked" in response.json()
