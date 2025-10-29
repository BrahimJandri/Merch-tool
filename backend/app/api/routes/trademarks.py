"""
Trademark checking routes
"""
from fastapi import APIRouter, Query, HTTPException

router = APIRouter()


@router.get("/check")
async def check_trademark(
    phrase: str = Query(..., description="Phrase to check"),
    region: str = Query("US", description="Region/country code")
):
    """
    Check if a phrase is trademarked
    """
    # TODO: Implement trademark checker integration
    return {
        "phrase": phrase,
        "region": region,
        "is_trademarked": False,
        "matches": []
    }


@router.post("/batch-check")
async def batch_check_trademarks(phrases: list[str], region: str = "US"):
    """
    Check multiple phrases for trademarks
    """
    # TODO: Implement batch checking
    return {
        "region": region,
        "results": [{"phrase": p, "is_trademarked": False} for p in phrases]
    }
