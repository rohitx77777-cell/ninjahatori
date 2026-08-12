"""Backend tests for Nidhi Sarna site: /api/contact and /api/status"""
import os
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL") or open("/app/frontend/.env").read().split("REACT_APP_BACKEND_URL=")[1].split("\n")[0].strip()
API = f"{BASE_URL.rstrip('/')}/api"


def test_root():
    r = requests.get(f"{API}/", timeout=15)
    assert r.status_code == 200
    assert "message" in r.json()


def test_contact_create_and_list():
    payload = {
        "name": "TEST_Priya",
        "email": "test_priya@example.com",
        "phone": "+911234567890",
        "age": "3-4",
        "message": "Testing contact endpoint",
    }
    r = requests.post(f"{API}/contact", json=payload, timeout=15)
    assert r.status_code == 200, r.text
    data = r.json()
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["phone"] == payload["phone"]
    assert data["age"] == payload["age"]

    # GET list should contain our record
    r2 = requests.get(f"{API}/contact", timeout=15)
    assert r2.status_code == 200
    items = r2.json()
    assert any(c["id"] == data["id"] for c in items)


def test_contact_minimal_fields():
    payload = {"name": "TEST_Min", "email": "min@example.com", "phone": "999"}
    r = requests.post(f"{API}/contact", json=payload, timeout=15)
    assert r.status_code == 200
    assert r.json()["name"] == "TEST_Min"


def test_contact_validation_missing_required():
    r = requests.post(f"{API}/contact", json={"name": "x"}, timeout=15)
    assert r.status_code in (400, 422)
