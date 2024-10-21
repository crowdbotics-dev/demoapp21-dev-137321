from rest_framework import serializers
from community.models import Comment, Event, Group, Rating


class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = "__all__"


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = "__all__"


class GroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Group
        fields = "__all__"


class RatingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Rating
        fields = "__all__"
