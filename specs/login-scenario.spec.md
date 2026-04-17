# Feature: Login functionality

## Goal
Validate login behavior for valid and invalid scenarios.

## Preconditions
- User exists:
  - email: testuser@example.com
  - password: Password123
- Login page is accessible

---

## Scenario 1: Successful login

### Steps
1. Navigate to https://example.com/login
2. Fill input "Email" with "testuser@example.com"
3. Fill input "Password" with "Password123"
4. Click button "Login"

### Expected Result
- User is redirected to "/dashboard"
- Text "Welcome, Test User" is visible

---

## Scenario 2: Invalid credentials

### Steps
1. Navigate to https://example.com/login
2. Fill input "Email" with "testuser@example.com"
3. Fill input "Password" with "WrongPassword"
4. Click button "Login"

### Expected Result
- Error message "Invalid credentials" is displayed
- User remains on "/login"

---

## Scenario 3: Empty fields validation

### Steps
1. Navigate to https://example.com/login
2. Leave "Email" empty
3. Leave "Password" empty

### Expected Result
- Button "Login" is disabled