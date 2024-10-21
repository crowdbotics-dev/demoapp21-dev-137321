from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CommentViewSet, EventViewSet, GroupViewSet, RatingViewSet

router = DefaultRouter()
router.register("event", EventViewSet)
router.register("comment", CommentViewSet)
router.register("group", GroupViewSet)
router.register("rating", RatingViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
