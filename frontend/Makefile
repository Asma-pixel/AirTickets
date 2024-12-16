FRONTEND_DIR=frontend
BACKEND_DIR=../backend

INSTALL_FRONTEND=$(FRONTEND_DIR)/node_modules
INSTALL_BACKEND=$(BACKEND_DIR)/node_modules

install: install-frontend install-backend

all: install run-backend run-frontend
run: run-backend run-frontend
build: run-backend build-frontend

# Установка зависимостей для frontend
install-frontend:
	@echo "Installing frontend dependencies..."
	npm ci

# Установка зависимостей для backend
install-backend:
	@echo "Installing backend dependencies..."
	cd $(BACKEND_DIR) && npm ci

build-frontend: 
	@echo "Starting frontend development server..."
	npm run build
run-backend:
	@echo "Starting backend server..."
	cd $(BACKEND_DIR) && node server.js &

# Запуск frontend (клиент)
run-frontend:
	@echo "Starting frontend development server..."
	npm run dev
