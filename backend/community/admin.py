from django.contrib import admin
from .models import Comment, Event, Group, Rating

admin.site.register(Event)
admin.site.register(Comment)
admin.site.register(Group)
admin.site.register(Rating)

# Register your models here.
