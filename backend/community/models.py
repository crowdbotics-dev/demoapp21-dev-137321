from django.conf import settings
from django.db import models


class Event(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=255,
    )
    description = models.TextField()
    start_time = models.DateTimeField(
        null=False,
        blank=False,
    )
    end_time = models.DateTimeField(
        null=False,
        blank=False,
    )
    location = models.CharField(
        max_length=255,
    )
    created_by = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="event_created_by",
    )


class Comment(models.Model):
    "Generated Model"
    content = models.TextField()
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="comment_user",
    )
    recipe = models.ForeignKey(
        "recipes.Recipe",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="comment_recipe",
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
    )


class Group(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=255,
    )
    description = models.TextField()
    created_by = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="group_created_by",
    )
    members = models.ManyToManyField(
        "users.User",
        related_name="group_members",
    )


class Rating(models.Model):
    "Generated Model"
    value = models.IntegerField()
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="rating_user",
    )
    recipe = models.ForeignKey(
        "recipes.Recipe",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="rating_recipe",
    )


# Create your models here.
