FROM python:3.11.6-bookworm

WORKDIR /backend

COPY requirements.txt .
RUN python3 -m pip install -r requirements.txt

COPY . .

EXPOSE 8000

ENTRYPOINT ["hypercorn"]
CMD ["--bind", "0.0.0.0:8000", "main.wsgi:application"]
