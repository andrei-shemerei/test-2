from django.db import models


class Status(models.Model):
    name = models.CharField(max_length=100, unique=True, verbose_name='Название')

    class Meta:
        db_table: str = 'status'
        verbose_name: str= 'Статус'
        verbose_name_plural: str= 'Статусы'
        
    def __str__ (self):
        return self.name

class Document(models.Model):
    name = models.CharField(max_length=100, unique=True, verbose_name='Название')
    result = models.DecimalField(max_digits=3, decimal_places=2, blank=True, null=True, verbose_name='Оригинальность')
    status = models.ForeignKey(to=Status, on_delete=models.CASCADE)
    time_created = models.DateTimeField(auto_now_add=True, verbose_name='Дата и время загрузки документа')
    data = models.FileField(upload_to="data_pdf", verbose_name='документ')
   
    class Meta:
        db_table: str = 'Document'
        verbose_name: str= 'Документ'
        verbose_name_plural: str= 'Документы'

    def __str__ (self):
        return self.name


