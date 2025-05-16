from django.db import models
from django.core.mail import send_mail
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver


class PersonalData(models.Model):
    CITY_CHOICES = (
        ('Москва', 'Москва'),
        ('Московская область', 'Московская область'),
    )

    TARGET_CHOICES = (
        ('Для проживания', 'Для проживания'),
        ('Инвестирования', 'Инвестирования'),
        ('Под сдачу', 'Под сдачу'),
    )

    HOUSING_TYPE_CHOICES = (
        ('Первичное (Новостройки)', 'Первичное (Новостройки)'),
        ('Вторичное', 'Вторичное'),
    )

    PAYMENT_TYPE_CHOICES = (
        ('Наличный расчет', 'Наличный расчет'),
        ('Ипотека', 'Ипотека'),
        ('Рассрочка', 'Рассрочка'),
    )

    city = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        choices=CITY_CHOICES,
        verbose_name='Город'
    )
    target = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        choices=TARGET_CHOICES,
        verbose_name='Цель'
    )
    type_of_housing = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        choices=HOUSING_TYPE_CHOICES,
        verbose_name='Тип жилья'
    )
    payment_type = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        choices=PAYMENT_TYPE_CHOICES,
        verbose_name='Тип оплаты'
    )
    full_name = models.CharField(
        max_length=50,
        verbose_name='ФИО'
    )
    phone_number = models.CharField(
        max_length=50,
        verbose_name='Номер телефона'
    )
    agreement = models.BooleanField(
        default=True,
        verbose_name='Согласие на обработку персональных данных'
    )

    class Meta:
        verbose_name = 'Анкета'
        verbose_name_plural = 'Анкеты'

    def __str__(self):
        if self.city or self.target:
            return f'{self.city} {self.target}'
        return str(self.pk)

    def send_confirmation_email(self):
        message = (
            f"НОВАЯ АНКЕТА ОТ {self.full_name}\n\n"
            f"НОМЕР ТЕЛЕФОНА: {self.phone_number}\n"
            f"ГОРОД: {self.city or 'Не указан'}\n"
            f"ЦЕЛЬ: {self.target or 'Не указана'}\n"
            f"ТИП ЖИЛЬЯ: {self.type_of_housing or 'Не указан'}\n"
            f"ТИП ОПЛАТЫ: {self.payment_type or 'Не указан'}\n"
            f"СОГЛАСИЕ НА ОБРАБОТКУ: {'Да' if self.agreement else 'Нет'}\n"
        )

        send_mail(
            subject=f"Новая анкета от {self.full_name}",
            message=message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.DEFAULT_FROM_EMAIL],
            fail_silently=False,
        )


@receiver(post_save, sender=PersonalData)
def send_email_on_save(sender, instance, created, **kwargs):
    if created:
        instance.send_confirmation_email()
