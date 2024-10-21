from django.contrib import admin
from .models import Ingredient, NutritionalInfo, Recipe, Tag

admin.site.register(Tag)
admin.site.register(NutritionalInfo)
admin.site.register(Recipe)
admin.site.register(Ingredient)

# Register your models here.
