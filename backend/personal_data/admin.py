from django.contrib import admin

from .models import PersonalData


@admin.register(PersonalData)
class PersonalDataAdmin(admin.ModelAdmin):
    list_display = (
        'pk',
        'city',
        'target',
        'type_of_housing',
        'payment_type',
        'full_name',
        'phone_number',
    )
    list_display_links = 'pk', 'city', 'target',
    ordering = 'pk',
    search_fields = (
        'pk',
        'city',
        'target',
        'type_of_housing',
        'payment_type',
        'full_name',
        'phone_number',
    )
