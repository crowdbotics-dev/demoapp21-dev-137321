from rest_framework import authentication
from recipes.models import NutritionalInfo, Recipe, Tag, Ingredient
from .serializers import (
    IngredientSerializer,
    NutritionalInfoSerializer,
    RecipeSerializer,
    TagSerializer,
)
from rest_framework import viewsets


class TagViewSet(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Tag.objects.all()


class NutritionalInfoViewSet(viewsets.ModelViewSet):
    serializer_class = NutritionalInfoSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = NutritionalInfo.objects.all()


class RecipeViewSet(viewsets.ModelViewSet):
    serializer_class = RecipeSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Recipe.objects.all()


class IngredientViewSet(viewsets.ModelViewSet):
    serializer_class = IngredientSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Ingredient.objects.all()
