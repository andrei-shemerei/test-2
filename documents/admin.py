from django.contrib import admin

from documents.models import Status, Document


admin.site.register(Status)
admin.site.register(Document)