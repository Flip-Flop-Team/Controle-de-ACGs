from rest_framework.viewsets import ModelViewSet
from rest_framework.serializers import ModelSerializer
from django_filters.rest_framework import FilterSet

def genericFilterSet(viewsetModel):
    class FilterSetClass(FilterSet):
        class Meta:
            model = viewsetModel
            fields = {i.name:(['exact'] if i.max_length is None else ['exact', 'icontains']) for i in viewsetModel._meta.fields}
    return FilterSetClass

def genericSerializer(viewsetModel):
    class Serializer(ModelSerializer):
        class Meta:
            model = viewsetModel
            fields = '__all__'
    return Serializer

def genericViewSet(model):
    class ViewSet(ModelViewSet):
        serializer_class = genericSerializer(model)
        queryset = model.objects.all()
        pagination_class = None
        filterset_class = genericFilterSet(model)
    return ViewSet