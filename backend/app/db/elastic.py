"""
Elasticsearch configuration and utilities
"""
from elasticsearch import Elasticsearch
from app.utils.config import settings


class ElasticSearchClient:
    """Elasticsearch client wrapper"""
    
    def __init__(self):
        self.client = Elasticsearch(
            hosts=[settings.ELASTICSEARCH_URL],
            # Add authentication if needed
        )
    
    def index_product(self, product_data: dict):
        """
        Index a product in Elasticsearch
        """
        return self.client.index(
            index="products",
            body=product_data
        )
    
    def search_products(self, query: str, filters: dict = None, limit: int = 50):
        """
        Search products using Elasticsearch
        """
        search_body = {
            "query": {
                "multi_match": {
                    "query": query,
                    "fields": ["title^3", "description", "category"]
                }
            },
            "size": limit
        }
        
        if filters:
            # Add filters to query
            pass
        
        return self.client.search(index="products", body=search_body)
    
    def get_trending(self, days: int = 7):
        """
        Get trending products based on recent data
        """
        # TODO: Implement trending logic using aggregations
        pass


# Global instance
es_client = ElasticSearchClient()
