from rest_framework import serializers
from personal_data.models import PersonalData


class PersonalDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalData
        fields = '__all__'

# class PersonalFullDataCreateSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = PersonalData
#         fields = ('city', 'target', 'type_of_housing', 'payment_type', 'full_name', 'phone_number', 'agreement')
class PersonalFullDataCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalData
        fields = ('city', 'target', 'type_of_housing', 'payment_type', 'full_name', 'phone_number', 'agreement')
        extra_kwargs = {
            'agreement': {'required': True}  # Согласие обязательно
        }

class PersonalShortDataCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalData
        fields = ('full_name', 'phone_number', 'agreement')
        extra_kwargs = {
            'agreement': {'required': True}  # Согласие обязательно
        }
