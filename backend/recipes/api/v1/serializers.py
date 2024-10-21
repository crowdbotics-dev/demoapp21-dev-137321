from rest_framework import serializers
from recipes.models import Ingredient, NutritionalInfo, Recipe, Tag


class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = "__all__"


class NutritionalInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = NutritionalInfo
        fields = "__all__"


class RecipeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recipe
        fields = "__all__"


class IngredientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ingredient
        fields = "__all__"
