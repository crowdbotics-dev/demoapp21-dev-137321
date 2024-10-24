from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _


class User(AbstractUser):
    # WARNING!
    """
    Some officially supported features of Crowdbotics Dashboard depend on the initial
    state of this User model (Such as the creation of superusers using the CLI
    or password reset in the dashboard). Changing, extending, or modifying this model
    may lead to unexpected bugs and or behaviors in the automated flows provided
    by Crowdbotics. Change it at your own risk.


    This model represents the User instance of the system, login system and
    everything that relates with an `User` is represented by this model.
    """
    name = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )
    email = models.EmailField(
        max_length=255,
        blank=True,
        null=True,
    )
    password = models.CharField(
        max_length=255,
        blank=True,
        null=True,
    )
    role = models.CharField(
        max_length=20,
        choices=[["user", "User"], ["moderator", "Moderator"]],
        blank=True,
        null=True,
    )

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})


class Profile(models.Model):
    "Generated Model"
    user = models.OneToOneField(
        "users.User",
        on_delete=models.CASCADE,
        related_name="profile_user",
    )
    bio = models.TextField(
        null=True,
        blank=True,
    )
    profile_picture = models.ImageField(
        null=True,
        blank=True,
        upload_to="profile_pics/",
    )
