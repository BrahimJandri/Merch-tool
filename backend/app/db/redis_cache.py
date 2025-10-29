"""
Redis cache configuration and utilities
"""
import redis
import json
from typing import Any, Optional
from app.utils.config import settings


class RedisCache:
    """Redis cache wrapper"""
    
    def __init__(self):
        self.client = redis.Redis(
            host=settings.REDIS_HOST,
            port=settings.REDIS_PORT,
            db=0,
            decode_responses=True
        )
    
    def get(self, key: str) -> Optional[Any]:
        """
        Get value from cache
        """
        value = self.client.get(key)
        if value:
            return json.loads(value)
        return None
    
    def set(self, key: str, value: Any, expire: int = 3600):
        """
        Set value in cache with expiration (default 1 hour)
        """
        self.client.setex(
            key,
            expire,
            json.dumps(value)
        )
    
    def delete(self, key: str):
        """
        Delete key from cache
        """
        self.client.delete(key)
    
    def exists(self, key: str) -> bool:
        """
        Check if key exists
        """
        return self.client.exists(key)


# Global instance
cache = RedisCache()
