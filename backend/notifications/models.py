from django.conf import settings
from django.db import models


class Notification(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="notification_user",
    )
    message = models.TextField()
    read = models.BooleanField(
        default="False",
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
    )


# Create your models here.
