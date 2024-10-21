from django.conf import settings
from django.db import models


class Tag(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=50,
    )
    recipes = models.ManyToManyField(
        "recipes.Recipe",
        related_name="tag_recipes",
    )


class NutritionalInfo(models.Model):
    "Generated Model"
    calories = models.IntegerField()
    fat = models.FloatField()
    protein = models.FloatField()
    carbohydrates = models.FloatField()
    recipe = models.OneToOneField(
        "recipes.Recipe",
        on_delete=models.CASCADE,
        related_name="nutritionalinfo_recipe",
    )


class Recipe(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=255,
    )
    description = models.TextField()
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="recipe_user",
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
    )
    updated_at = models.DateTimeField(
        auto_now=True,
    )


class Ingredient(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=255,
    )
    quantity = models.CharField(
        max_length=50,
    )
    recipe = models.ForeignKey(
        "recipes.Recipe",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="ingredient_recipe",
    )


# Create your models here.
