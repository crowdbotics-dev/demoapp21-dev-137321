from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    IngredientViewSet,
    NutritionalInfoViewSet,
    RecipeViewSet,
    TagViewSet,
)

router = DefaultRouter()
router.register("tag", TagViewSet)
router.register("nutritionalinfo", NutritionalInfoViewSet)
router.register("recipe", RecipeViewSet)
router.register("ingredient", IngredientViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
