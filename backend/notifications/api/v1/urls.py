from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import NotificationViewSet

router = DefaultRouter()
router.register("notification", NotificationViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
