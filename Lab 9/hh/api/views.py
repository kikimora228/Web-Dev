from rest_framework import generics
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer


class CompanyList(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CompanyDetails(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyVacancies(generics.RetrieveAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.filter(id = self.kwargs["pk"])
    

class VacancyList(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


class VacancyDetails(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


class TopTenVacancies(generics.ListAPIView):
    serializer_class = VacancySerializer
    
    def get_queryset(self):
        return Vacancy.objects.all().order_by('-salary')[:10]