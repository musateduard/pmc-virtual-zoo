# django imports
from django.db.models import Model, CharField, IntegerField, BooleanField, DateField


class Test(Model):

    test_char: CharField = CharField(max_length=255, blank=False, null=False)
    test_int: IntegerField = IntegerField(blank=False, null=False)
    test_bool: BooleanField = BooleanField(blank=False, null=False, default=False)
    test_date: DateField = DateField(auto_now=True)

    class Meta:
        managed: bool = True
        db_table: str = "test"


class Animal(Model):

    name: CharField = CharField(max_length=255, blank=False, null=False)
    weight: IntegerField = IntegerField(blank=False, null=False)
    superpower: CharField = CharField(max_length=255, blank=False, null=False)
    extinct_since: CharField = CharField(max_length=255, blank=False, null=False, default="unknown")

    class Meta:
        managed: bool = True
        db_table: str = "animal"
