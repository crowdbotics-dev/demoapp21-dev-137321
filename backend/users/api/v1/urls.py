from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ProfileViewSet, UserViewSet

router = DefaultRouter()
router.register("user", UserViewSet)
router.register("profile", ProfileViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
