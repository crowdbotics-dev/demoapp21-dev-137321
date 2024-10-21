from rest_framework import authentication
from community.models import Event, Group, Comment, Rating
from .serializers import (
    CommentSerializer,
    EventSerializer,
    GroupSerializer,
    RatingSerializer,
)
from rest_framework import viewsets


class EventViewSet(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Event.objects.all()


class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Comment.objects.all()


class GroupViewSet(viewsets.ModelViewSet):
    serializer_class = GroupSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Group.objects.all()


class RatingViewSet(viewsets.ModelViewSet):
    serializer_class = RatingSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Rating.objects.all()
