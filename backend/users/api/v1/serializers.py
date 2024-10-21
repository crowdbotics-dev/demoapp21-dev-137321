from rest_framework import serializers
from users.models import Profile, User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        exclude = ["password"]


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = "__all__"
