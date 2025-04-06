from django.urls import path
from .views import CompanyList, CompanyDetails, CompanyVacancies,VacancyList, VacancyDetails,TopTenVacancies

urlpatterns = [
    path('companies/',CompanyList.as_view() ),
    path('companies/<int:pk>/', CompanyDetails.as_view()),
    path('companies/<int:pk>/vacancies/', CompanyVacancies.as_view()),
    path('vacancies/', VacancyList.as_view()),
    path('vacancies/<int:pk>/', VacancyDetails.as_view()),
    path('vacancies/top_ten/', TopTenVacancies.as_view()),
]
