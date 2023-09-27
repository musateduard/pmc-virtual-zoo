# django imports
from django.db.models import Model, CharField, IntegerField, BooleanField


class TestModel(Model):

    test_char: CharField = CharField(max_length=255, unique=True, blank=False, null=False)
    test_int: IntegerField = IntegerField(blank=False, null=False)
    test_bool: BooleanField = BooleanField(blank=False, null=False)

    class Meta:
        managed: bool = True
        db_table: str = "test"
