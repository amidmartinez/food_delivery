from rest_framework import serializers
from .models import Restaurant, MenuItem


class MenuItemSerializer(serializers.HyperlinkedModelSerializer):
    restaurant = serializers.HyperlinkedRelatedField(
        view_name='restaurant_detail',
        read_only=True
    )

    restaurant_id = serializers.PrimaryKeyRelatedField(
        queryset=Restaurant.objects.all(),
        source='restaurant'
    )

    class Meta:
        model = MenuItem
        fields = ('id', 'restaurant', 'restaurant_id', 'name', 'description', 'price',)



class RestaurantSerializer(serializers.HyperlinkedModelSerializer):
    menuitem = MenuItemSerializer(
        many=True,
        read_only=True
    )

    restaurant_url = serializers.ModelSerializer.serializer_url_field(
        view_name='restaurant_detail'
    )

    class Meta:
       model = Restaurant
       fields = ('id','restaurant_url','name','menuitem','address','monday_open','monday_close','tuesday_open','tuesday_close','wednesday_open','wednesday_close','thursday_open','thursday_close','friday_open','friday_close','saturday_open','saturday_close','sunday_open','sunday_close')
